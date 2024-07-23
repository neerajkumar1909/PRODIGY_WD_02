let [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById('displayTime');
let timer = null;


// creating a global function, which will use for stop, start and reset
function stopWatch() {
    milliSeconds++;
    if (milliSeconds == 99) {
        milliSeconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // without this, it will show only one zero in the browsers timer
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliSeconds < 10 ? "0" + milliSeconds : milliSeconds;

    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
    // at the line 1, we are not assigning the value 00, because it will show an error
}

// adding a function to start the timer
function startWatch() {
    if (timer !== null) {
        clearInterval(timer)
    }
    clearMilliSecond = setInterval(stopWatch, 10);
    timer = setInterval(stopWatch, 1000);
}

// adding function for stopWatch
function pauseWatch() {
    clearInterval(clearMilliSecond);
    clearInterval(timer);
}

// adding function for resetWatch
function resetWatch() {
    [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
    pauseWatch();
    displayTime.innerHTML = "00:00:00:00";
}