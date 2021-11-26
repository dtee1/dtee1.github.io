function clickCounter(type) {
    if (type=="like") {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
            document.getElementById("likes").innerHTML = localStorage.clickcount;
        } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
    } else {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
            document.getElementById("dislikes").innerHTML = localStorage.clickcount;
        } 
    }
  }