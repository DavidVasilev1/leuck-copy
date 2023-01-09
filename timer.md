<html>
<div id="stopwatch">
  <p id="time">00:00:00</p>
  <button onclick="start()">Start</button>
  <button onclick="stop()">Stop</button>
  <button onclick="reset()">Reset</button>
</div>
<script>
let time = 0;
let interval;
function start() { interval = setInterval(() => {time++; displayTime();}, 1000);}
function stop() {
  clearInterval(interval);
}
function reset() {
  stop();
  time = 0;
  displayTime();
}
function displayTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById('time').innerHTML = `${minutes}:${seconds}`;
}

</script>




<!-- <!DOCTYPE html>
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
      
    </style>
     -->
<!-- <script>
      const stopwatch = document.querySelector("#stopwatch");
      const time = document.querySelector("#time");
      const startStopBtn = document.querySelector("#start-stop-btn");
      
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
      } -->
      
      