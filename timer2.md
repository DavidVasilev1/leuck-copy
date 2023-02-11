<html>
<style>
  .table {
    border: #795db3 solid;
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
    color: #b89cf0;
    border-radius: 15px;
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  h3 {
    color: #A881F7;
    padding: 10px;
    padding-left: 0px;
    font-size: 25px;
  }
  .title {
    color: #A881F7;
    padding: 10px;
    font-size: 30px;
    text-align: center;
  }
  .button {
    border-radius: 10px;
    width: 50px;
    height: 30px;
    background: #A881F7;
    font-size: 15px;
    color: #1E1E1E;
    border-color: #795db3;
  }
  .timerButton {
    border-radius: 10px;
    background: #A881F7;
    font-size: 15px;
    color: #1E1E1E;
    border-color: #795db3;
  }
</style>

<div class='container'>
    

<h3> Add Activity </h3>
    <input id='newTask' type='text'>
<h3> Set Expected Time (hh:mm:ss)</h3>
    <input id='ExpectedTime' type='text'>

<br>
<br>
<button class='button' id='addTaskButton' onclick="addTask()">Add</button>
<!-- <br>
<br> -->
<!-- <h3> Real Time </h3>
<p id='Time' type='text'> -->
<h3 class="title"> To-Do </h3>
        <table class="table" id="toDo" style="width: 100%; margin-left: auto; margin-right: auto;">
          <tr>
            <th class="cell">Task</th>
            <th class="cell">Expected Time</th>
            <th class="cell">Actual Time</th>
            <th class="cell">Timer Controls</th>
          </tr>
        </table>
<h3 class="title"> Completed Tasks </h3>
        <table class="table" id="Completed" style="width: 100%; margin-left: auto; margin-right: auto;">
        <tr>
            <th class="cell">Task</th>
            <th class="cell">Expected Time</th>
            <th class="cell">Actual Time</th>
          </tr>
        </table>
<!-- </div> -->

<script>
const newtime = JSON.parse(localStorage.getItem('time')) || 0;
let localtime = 0
var taskInput = document.getElementById('newTask');
var addTaskButton = document.getElementById('addTaskButton');
var timeInput = document.getElementById('ExpectedTime');
var addTimeButton = document.getElementById('addTimeButton');
var completedTask = document.getElementById('completedTasks');
var incompleteTasks = document.getElementById('toDo');
var timeBox = document.getElementById('Time')

var tasks = []
var timeExpected = []
function addTask() {
    var text = taskInput.value;
    tasks.push(taskInput.value)
    var timeExp = timeInput.value;
    timeExpected.push(timeInput.value)
    var ActualTime = 0;

    // localStorage.setItem('ActualTime', JSON.stringify(ActualTime));

    maketable(text, timeExp, tasks.length)
}




function calculatetime(time) {
   const hours = Math.floor(time / 3600)
  const hours2 = String(hours).padStart(2,'0')
  const minutes = Math.floor(time / 60);
  const minutes2 =  String(minutes).padStart(2,'0')
  const seconds = time % 60;
  const seconds2 =  String(seconds).padStart(2,'0')
  return hours + ":" + minutes + ":" + seconds
}


const started = {};
function maketable(text, timeExp, time) {
  let seconds = newtime || 0;
  let secondsFormatted = calculatetime(seconds)
  var table = document.createElement('tr');
    table.innerHTML = "<th id=task class='cell'>" + text + "</th>" + 
                      "<th id=timeExp"  + "' class='cell'>" + timeExp + "</th>" + 
                      "<th id='Time" + "' class='cell'>" + secondsFormatted + "</th>" + 
                      "<th class='cell'>" + 
                      "<button class='timerButton' onclick='start(1)'>" + "Start" + "</button>" + 
                      "<button class='timerButton' onclick='stop(1)'>" + "Stop" + "</button>" + 
                      "<button class='timerButton' onclick='reset(1)'>" + "Reset" + "</button>" + 
                      "<button class='timerButton' onclick='finish(1)'>" + "Finish" + "</button>" +
                      "</th>";
    incompleteTasks.appendChild(table);
}
const timeExp = JSON.parse(localStorage.getItem('TimeExpected'));
// const Realtime = JSON.parse(localStorage.getItem('ActualTime'));
const task2 = JSON.parse(localStorage.getItem('tasks'));
for (let i = 0; i < task2.length; i++) {
  tasks.push(task2[i])
  timeExpected.push(timeExp[i])
  maketable(task2[i], timeExp[i], i+1)
}


function stop(i) {
  clearInterval(started[i].interval)
  started[i].yes = false
}
function start(i) {
  let temptime = JSON.parse(localStorage.getItem('time'));
  started[i] = {yes: true,date: new Date()};
  started[i].interval = setInterval(() => {
  let now = new Date()
  now.setSeconds(now.getSeconds() + (temptime || 0))
  let time = Math.round((now - started[i].date) / 1000);

  // setting the local storage time
  localtime = time || 0
  
  console.log(temptime)
  // }

  localStorage.setItem('time', JSON.stringify(localtime));
  const hours = Math.floor(time / 3600)
  const hours2 = String(hours).padStart(2,'0')
  const minutes = Math.floor(time / 60);
  const minutes2 =  String(minutes).padStart(2,'0')
  const seconds = time % 60;
  const seconds2 =  String(seconds).padStart(2,'0')
  document.getElementById('Time').innerHTML = `${hours2}:${minutes2}:${seconds2}`;
  }, 1000);
}




function reset(i) {
  let zerotime = 0
  started[i].date = new Date()
  localStorage.setItem('time', JSON.stringify(zerotime));
   document.getElementById('Time').innerHTML = `00:00:00`
}


function finish(i) { 
  let temptime2 = JSON.parse(localStorage.getItem('time'));
  localStorage.setItem('tasks', JSON.stringify(timeExp[0]));
  localStorage.setItem('TimeExpected', JSON.stringify(timeExp[0]));
  localStorage.setItem('StoredTimes', JSON.stringify(temptime2));
  var table = document.createElement('tr');
    table.innerHTML = "<th class='cell'>" + tasks[0] + "</th>" + 
                      "<th id=timeExp"  + "' class='cell'>" + timeExp[0] + "</th>" + 
                      "<th id='Time" + "' class='cell'>" + calculatetime(temptime2) + "</th>" + 
                      "<th class='cell'>" + 
                      "</th>";
    Completed.appendChild(table);
}




// function start1() { interval = setInterval(() => {time++; displayTime1();}, 1000);}
// function stop1() {
//   clearInterval(interval);
// }
// function reset1() {
//   stop();
//   time = 0;
//   displayTime();
// }
// function displayTime1() {
//   const hours = Math.floor(time / 3600)
//   const hours2 = String(hours).padStart(2,'0')
//   const minutes = Math.floor(time / 60);
//   const minutes2 =  String(minutes).padStart(2,'0')
//   const seconds = time % 60;
//   const seconds2 =  String(seconds).padStart(2,'0')
//   document.getElementById('time1').innerHTML = `${hours2}:${minutes2}:${seconds2}`;
// }



// function start2() { interval = setInterval(() => {time2++; displayTime2();}, 1000);}
// function stop2() {
//   clearInterval(interval);
// }
// function reset2() {
//   stop();
//   time = 0;
//   displayTime();
// }
// function displayTime2() {
//   const hours = Math.floor(time2 / 3600)
//   const hours2 = String(hours).padStart(2,'0')
//   const minutes = Math.floor(time2 / 60);
//   const minutes2 =  String(minutes).padStart(2,'0')
//   const seconds = time2 % 60;
//   const seconds2 =  String(seconds).padStart(2,'0')
//   document.getElementById('time2').innerHTML = `${hours2}:${minutes2}:${seconds2}`;
// }



// function start3() { interval = setInterval(() => {time3++; displayTime();}, 1000);}
// function stop3() {
//   clearInterval(interval);
// }
// function reset3() {
//   stop();
//   time = 0;
//   displayTime();
// }
// function displayTime() {
//   const hours = Math.floor(time3 / 3600)
//   const hours2 = String(hours).padStart(2,'0')
//   const minutes = Math.floor(time3 / 60);
//   const minutes2 =  String(minutes).padStart(2,'0')
//   const seconds = time3 % 60;
//   const seconds2 =  String(seconds).padStart(2,'0')
//   document.getElementById('time3').innerHTML = `${hours2}:${minutes2}:${seconds2}`;
// }



// function start4() { interval = setInterval(() => {time4++; displayTime();}, 1000);}
// function stop4() {
//   clearInterval(interval);
// }
// function reset4() {
//   stop();
//   time = 0;
//   displayTime();
// }
// function displayTime() {
//   const hours = Math.floor(time4 / 3600)
//   const hours2 = String(hours).padStart(2,'0')
//   const minutes = Math.floor(time4 / 60);
//   const minutes2 =  String(minutes).padStart(2,'0')
//   const seconds = time4 % 60;
//   const seconds2 =  String(seconds).padStart(2,'0')
//   document.getElementById('time4').innerHTML = `${hours2}:${minutes2}:${seconds2}`;
// }



// function start5() { interval = setInterval(() => {time5++; displayTime();}, 1000);}
// function stop5() {
//   clearInterval(interval);
// }
// function reset5() {
//   stop();
//   time = 0;
//   displayTime();
// }
// function displayTime() {
//   const hours = Math.floor(time5 / 3600)
//   const hours2 = String(hours).padStart(2,'0')
//   const minutes = Math.floor(time5 / 60);
//   const minutes2 =  String(minutes).padStart(2,'0')
//   const seconds = time5 % 60;
//   const seconds2 =  String(seconds).padStart(2,'0')
//   document.getElementById('time5').innerHTML = `${hours2}:${minutes2}:${seconds2}`;
// }

</script>

