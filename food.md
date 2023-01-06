<!DOCTYPE html>
<html>
  <head>
    <title>Stopwatch</title>
  </head>
  <body>
    <div id="stopwatch">
      <p id="time">00:00:00</p>
      <button id="start-stop-btn">Start</button>
      <button id="lap-btn">Lap</button>
    </div>
    <ul id="laps"></ul>
    
<style>
      #stopwatch {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      #time {
        font-size: 2em;
        margin: 0;
      }
      
      #laps {
        list-style: none;
        padding: 0;
      }
      
      #laps li {
        font-size: 1.5em;
        margin-bottom: 0.5em;
      }
    </style>
    
<script>
      const stopwatch = document.querySelector("#stopwatch");
      const time = document.querySelector("#time");
      const startStopBtn = document.querySelector("#start-stop-btn");
      const lapBtn = document.querySelector("#lap-btn");
      const laps = document.querySelector("#laps");
      
      let isRunning = false;
      let interval;
      let elapsedTime = 0;
      let lapTime = 0;
      
      function startStop() {
        if (isRunning) {
          clearInterval(interval);
          isRunning = false;
          lapTime = 0;
          startStopBtn.textContent = "Start";
        } else {
          interval = setInterval(updateTime, 10);
          isRunning = true;
          startStopBtn.textContent = "Stop";
        }
      }
      
      function updateTime() {
        elapsedTime += 10;
        lapTime += 10;
        
        let minutes = Math.floor(elapsedTime / 6000);
        let seconds = Math.floor(elapsedTime / 100) % 60;
        let milliseconds = elapsedTime % 100;
        
        minutes = minutes.toString().padStart(2, "0");
        seconds = seconds.toString().padStart(2, "0");
        milliseconds = milliseconds.toString().padStart(2, "0");
        
        time.textContent = `${minutes}:${seconds}:${milliseconds}`;
      }
      
      function lap() {
        const lapTimeFormatted = formatTime(lapTime);
        laps.insertAdjacentHTML("beforeend", `<li>${lapTimeFormatted}</li>`);
        lapTime = 0;
      }
      
      function formatTime(time) {
        let minutes = Math.floor(time / 6000);
        let seconds = Math.floor(time / 100) % 60;
        let milliseconds = time % 100;
        
        minutes = minutes.to
