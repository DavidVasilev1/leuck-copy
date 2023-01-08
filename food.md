<html>
<div id="stopwatch">
  <p id="time">00:00:00</p> 
  <button onclick="start()">Start</button>
  <button onclick="stop()">Stop</button>
</div>
<script>
let time = 0;
let interval;
function start() {
  interval = setInterval(() => {time++; displayTime();}, 1000);
  //interval2 = setInterval(() => {time2++; displayTime();}, 10);
}
function stop() {
  clearInterval(interval);
}
function displayTime() {
  const minutes = Math.floor(time / 60);
  const minutes2 =  String(minutes).padStart(2,'0')
  const seconds = time % 60;
  const seconds2 =  String(seconds).padStart(2,'0')
  document.getElementById('time').innerHTML = `${minutes2}:${seconds2}`;
}

</script>