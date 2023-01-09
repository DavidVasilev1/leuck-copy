<html>
<style>
  .table {
    border: #cca300 solid;
    border-radius: 10px;
    border-collapse:separate;
  }
  .cell {
    border: 1px solid;
    text-align: center;
  }
  .container {
  }
  input {
    padding: 10px;
    background-color: #4a4a48;
    border: 0px;
    color: #fce277;
    border-radius: 15px;
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  h3 {
    color: #ffcc00;
    padding: 10px;
    padding-left: 0px;
    font-size: 25px;
  }
  .title {
    color: #ffcc00;
    padding: 10px;
    font-size: 30px;
    text-align: center;
  }
  .button {
    border-radius: 10px;
    width: 50px;
    height: 30px;
    background: #4a4a4a;
    font-size: 15px;
    color: #ffcc00;
    border-color: #cca300;
  }
  .timerButton {
    border-radius: 10px;
    background: #4a4a4a;
    font-size: 15px;
    color: #ffcc00;
    border-color: #cca300;
  }
</style>

<div class='container'>
    
<h3> Add Item </h3>
    <input id='newTask' type='text'>
<h3> Set Expected Time (hh:mm:ss)</h3>
    <input id='newTime' type='text'>
<br>
<br>
<button class='button' id='addTaskButton' onclick="addTask()">Add</button>
<h3 class="title"> To-Do </h3>
        <table class="table" id="toDo" style="width: 100%; margin-left: auto; margin-right: auto;">
          <tr>
            <th class="cell">Task</th>
            <th class="cell">Expected Time</th>
            <th class="cell">Actual Time</th>
            <th class="cell">Timer Controls</th>
          </tr>
        </table>
</div>

<script>

var taskInput = document.getElementById('newTask');
var addTaskButton = document.getElementById('addTaskButton');
var timeInput = document.getElementById('newTime');
var addTimeButton = document.getElementById('addTimeButton');
var completedTask = document.getElementById('completedTasks');
var incompleteTasks = document.getElementById('toDo');

var i = 0

function addTask(a) {
    var text = taskInput.value;
    var timeExp = timeInput.value;
    
    i++;

    var table = document.createElement('tr');
    table.innerHTML = "<th class='cell'>" + text + "</th>" + 
                      "<th id=timeExp" + i + "' class='cell'>" + timeExp + "</th>" + 
                      "<th id='time" + i + "' class='cell'>" + "00:00:00" + "</th>" + 
                      "<th class='cell'>" + 
                      "<button class='timerButton' onclick='start" + i + "()'>" + "Start" + "</button>" + 
                      "<button class='timerButton' onclick='stop" + i + "()'>" + "Stop" + "</button>" + 
                      "<button class='timerButton' onclick='reset" + i + "()'>" + "Reset" + "</button>" + 
                      "</th>";
    incompleteTasks.appendChild(table);
}




let time = 0;
let interval;
function start1() { interval = setInterval(() => {time++; displayTime();}, 1000);}
function stop1() {
  clearInterval(interval);
}
function reset1() {
  stop();
  time = 0;
  displayTime();
}
function displayTime() {
  const hours = Math.floor(time / 3600)
  const hours2 = String(hours).padStart(2,'0')
  const minutes = Math.floor(time / 60);
  const minutes2 =  String(minutes).padStart(2,'0')
  const seconds = time % 60;
  const seconds2 =  String(seconds).padStart(2,'0')
  document.getElementById('time1').innerHTML = `${hours2}:${minutes2}:${seconds2}`;
}

</script>

