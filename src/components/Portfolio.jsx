import React,  { useState, useEffect } from 'react';
import qDrone from "../assets/portfolio/qdrone.png";
import qdroneDemoVideo from '../assets/portfolio/qdrone_demo.mp4';
import './Portfolio.css'; // Import the CSS file
import VideoModal from './VideoModal'; 

const Portfolio = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    const [modalTop, setModalTop] = useState(0);
    useEffect(() => {
        function handleScroll() {
            setModalTop(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleDemoButtonClick = (src) => {
        setVideoSrc(src);
        setShowVideo(true);
    };
    const handleCloseModal = () => {
        setShowVideo(false);
    };

    const portfolios = [
        {
            id: 1,
            src: qDrone,
            title: 'Target Drone with Autonoumous Landing',
            videoSrc: qdroneDemoVideo,
        },
        
    ];

    return (
        <div name="portfolio" className="portfolio-container">
            <div className="portfolio-content">
                <div className="portfolio-heading">
                    <p className="portfolio-title">Portfolio</p>
                    <p className="portfolio-description">Check out some of my work</p>
                </div>
                <div className="portfolio-grid">
                    {portfolios.map(({ id, src, title, videoSrc }) => (
                        <div key={id} className="portfolio-item">
                            <img src={src} alt="" className="portfolio-image"/>
                            <div className="project-name"> 
                                <p className="project-name">{title}</p>
                                <div className="portfolio-buttons">
                                  
                                    <button className="demo-button" onClick={() => handleDemoButtonClick(videoSrc)}>Demo</button>
                                    <button className="code-button">Code</button>
                                </div>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
            {showVideo && (
                <VideoModal videoSrc={videoSrc} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Portfolio;
