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
let localtime = {}
var taskInput = document.getElementById('newTask');
var addTaskButton = document.getElementById('addTaskButton');
var timeInput = document.getElementById('newTime');
var addTimeButton = document.getElementById('addTimeButton');
var completedTask = document.getElementById('completedTasks');
var incompleteTasks = document.getElementById('toDo');

var tasks = []
var timeExpected = []
function addTask() {
    var text = taskInput.value;
    tasks.push(taskInput.value)
    var timeExp = timeInput.value;
    timeExpected.push(timeInput.value)
    var ActualTime = 0;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('TimeExpected', JSON.stringify(timeExpected));
    // localStorage.setItem('ActualTime', JSON.stringify(ActualTime));

    maketable(text, timeExp, tasks.length)
}

// poplulating the times in the table
const newtime = JSON.parse(localStorage.getItem('time')) || {};

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
function maketable(text, timeExp, i, time) {
  let seconds = newtime[i] || 0;
  let secondsFormatted = calculatetime(seconds)
  var table = document.createElement('tr');
    table.innerHTML = "<th class='cell'>" + text + "</th>" + 
                      "<th id=timeExp" + (i) + "' class='cell'>" + timeExp + "</th>" + 
                      "<th id='time" + (i) + "' class='cell'>" + secondsFormatted + "</th>" + 
                      "<th class='cell'>" + 
                      "<button class='timerButton' onclick='start(" + (i) + ")'>" + "Start" + "</button>" + 
                      "<button class='timerButton' onclick='stop(" + (i) + ")'>" + "Stop" + "</button>" + 
                      "<button class='timerButton' onclick='reset(" + (i) + ")'>" + "Reset" + "</button>" + 
                      "</th>";
    incompleteTasks.appendChild(table);
    started[i+1] = {yes:false};
}
const timeExp = JSON.parse(localStorage.getItem('TimeExpected'));
// const Realtime = JSON.parse(localStorage.getItem('ActualTime'));
const task2 = JSON.parse(localStorage.getItem('tasks'));
for (let i = 0; i < task2.length; i++) {
  tasks.push(task2[i])
  timeExpected.push(timeExp[i])
  maketable(task2[i], timeExp[i], i+1)
}




function start(i) {
  started[i] = {yes: true,date: new Date()};
  started[i].interval = setInterval(() => {
  let now = new Date()
  now.setSeconds(now.getSeconds() + (newtime[i] || 0))
  let time = Math.round((now - started[i].date) / 1000);

  // setting the local storage time
  localtime[i] = time || 0
  // for (let i =0; i<localtime.entries.length; i++) {
    console.log(started)
  // }

  localStorage.setItem('time', JSON.stringify(localtime));
  const hours = Math.floor(time / 3600)
  const hours2 = String(hours).padStart(2,'0')
  const minutes = Math.floor(time / 60);
  const minutes2 =  String(minutes).padStart(2,'0')
  const seconds = time % 60;
  const seconds2 =  String(seconds).padStart(2,'0')
  document.getElementById('time'+i).innerHTML = `${hours2}:${minutes2}:${seconds2}`;
  }, 1000);
}



function stop(i) {
  clearInterval(started[i].interval)
  started[i].yes = false
}
function reset(i) {
  started[i].date = new Date()
   document.getElementById('time'+i).innerHTML = `00:00:00`
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

