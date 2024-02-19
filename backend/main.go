package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis/v8"
)

func main() {
	r := gin.Default()
	redisPassword := os.Getenv("REDIS_PASSWORD")
	options := redis.Options{
		Addr:     "redis-19534.c56.east-us.azure.cloud.redislabs.com:19534",
		Password: redisPassword,
		DB:       0,
	}

	client := redis.NewClient(&options)

	// Define a "Hello World" endpoint
	r.GET("/api/hello", func(c *gin.Context) {
		_, err := client.Ping(c).Result()
		if err != nil {
			log.Printf("Failed to ping Redis: %v", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to ping Redis"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Hello, World!"})
	})

	r.POST("/api/add-data", func(c *gin.Context) {
		// Your request data, e.g., from a JSON request body
		requestData := struct {
			Key   string `json:"key"`
			Value string `json:"value"`
		}{}

		// Bind the JSON request data to the requestData struct
		if err := c.ShouldBindJSON(&requestData); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// Use the Redis client to set the key-value pair in Redis
		err := client.Set(c, requestData.Key, requestData.Value, 0).Err()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add data to Redis"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "Data added to Redis"})
	})

	// Start the server
	r.Run(":8081")
}
