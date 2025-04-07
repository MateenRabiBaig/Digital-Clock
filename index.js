let hourSpan = document.getElementById('hour');
let minuteSpan = document.getElementById('minute');
let secondSpan = document.getElementById('second');
let amorpmSpan = document.getElementById('amorpm');

function ChangeTime() {
    let date = new Date();
    let hour = date.getHours();
    hourSpan.innerHTML = formatTime(hour);

    let minute = date.getMinutes();
    minuteSpan.innerHTML = formatTime(minute);

    let second = date.getSeconds();
    secondSpan.innerHTML = formatTime(second);

    let amorpm = (hour >= 12) ? "PM" : "AM"; // Simplified conditional check
    amorpmSpan.innerHTML = amorpm;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; // Add leading zero if the time is less than 10
}

setInterval(ChangeTime, 1000);