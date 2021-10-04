
const m = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("month").innerHTML = months[m.getMonth()];

const d = new Date();
document.getElementById("day").innerHTML = d.getDate();



var h = document.getElementById('hour');
var min = document.getElementById('min');
function clock() {
    h.textContent = new Date().getHours();
    min.textContent = new Date().getMinutes();
}

setInterval(clock, 1000);