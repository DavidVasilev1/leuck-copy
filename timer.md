<html>
<style>
  .table {
    border:1px solid;
  }
  .cell {
    border:1px solid;
  }
</style>

<!-- <div id="stopwatch">
  <p id="time">00:00:00</p>
  <button onclick="start()">Start</button>
  <button onclick="stop()">Stop</button>
  <button onclick="reset()">Reset</button>
</div> -->
<div class='container'>
    
<h3> Add Item </h3>
    <input id='newTask' type='text'>
    <button id='addTaskButton'>Add</button>
<h3> To-Do </h3>
        <table class="table" id="toDo" style="width: 100%; margin-left: auto; margin-right: auto;">
          <tr>
            <th class="cell" style="text-align: center">Task</th>
            <th class="cell" style="text-align: center">Timer</th>
            <th class="cell" style="text-align: center">Timer Control</th>
          </tr>
        </table>
</div>


<script>

var taskInput = document.getElementById('newTask');
var addTaskButton = document.getElementById('addTaskButton');
var completedTask = document.getElementById('completedTasks');
var incompleteTasks = document.getElementById('toDo');

var addTask = function () {
    var text = taskInput.value;
    var table = document.createElement('tr');
    table.innerHTML = "<th class='cell'>" + text + "</th>" + 
                      "<th id='time' class='cell'>" + "00:00:00" + "</th>" + 
                      "<button onclick='start()'>" + "Start" + "</button>" + 
                      "<button onclick='stop()'>" + "Stop" + "</button>" + 
                      "<button onclick='reset()'>" + "Reset" + "</button>";
    incompleteTasks.appendChild(table);
}

addTaskButton.onclick = addTask;

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

