let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;
let lapCount = 1;

const displayHours = document.getElementById('hours');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapTimes = document.getElementById('lap-times');

function startTimer() {
    intervalId = setInterval(updateTimer, 10);
}

function pauseTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayHours.textContent = '00';
    displayMinutes.textContent = '00';
    displaySeconds.textContent = '00';
    displayMilliseconds.textContent = '00';
    lapTimes.innerHTML = '';
    lapCount = 1;
}

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    displayHours.textContent = padNumber(hours);
    displayMinutes.textContent = padNumber(minutes);
    displaySeconds.textContent = padNumber(seconds);
    displayMilliseconds.textContent = padNumber(milliseconds);
}

function padNumber(number) {
    return number < 10 ? '0' + number : number;
}

function recordLap() {
    const lapTime = `${lapCount}. ${displayHours.textContent}:${displayMinutes.textContent}:${displaySeconds.textContent}:${displayMilliseconds.textContent}`;
    const lapItem = document.createElement('div');
    lapItem.textContent = lapTime;
    lapTimes.appendChild(lapItem);
    lapCount++;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);
