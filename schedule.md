<html>
<style>
  .table {
    border: #a881f7 solid;
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
    color: #e7dff7;
    border-radius: 15px;
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  h3 {
    color: #a881f7;
    padding: 10px;
    padding-left: 0px;
    font-size: 25px;
  }
  .title {
    color: #a881f7;
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
    color: #a881f7;
    border-color: #775cad;
  }
  .timerButton {
    border-radius: 10px;
    background: #4a4a4a;
    font-size: 15px;
    color: #a881f7;
    border-color: #775cad;
  }
  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .texts1 {
    width: 50%;
    float: left;
  }
  .texts2 {
    width: 50%;
    float: left;
    padding-bottom: 20px;
  }
  .drop {
    border-radius: 10px;
    width: 50px;
    height: 30px;
    background: #4a4a4a;
    font-size: 15px;
    color: #a881f7;
    border-color: #775cad;
  }
</style>

<div class='container'>
<form>
  <div class='texts1'>    
    <h3> Period </h3>
        <input autocomplete="off" id='newPeriod' type='number' required>
    <h3> Class </h3>
        <input autocomplete="off" id='newClass' type='text' required>
  </div>
  <div class='texts2'>
    <h3> Start Time (hh:mm) </h3>
        <input autocomplete="off" id='newStart' type='time' required>
    <h3> End Time (hh:mm) </h3>
        <input autocomplete="off" id='newEnd' type='time' required>
  </div>
<br>
<br>
<button class='button' id='addClassButton' type="reset" onclick="addTask()">Add</button>
</form>
<h3 class="title"> Classes </h3>
        <table class="table" id="toDo" style="width: 100%; margin-left: auto; margin-right: auto;">
          <tr>
            <th class="cell">Period</th>
            <th class="cell">Class</th>
            <th class="cell">Start Time</th>
            <th class="cell">End Time</th>
            <th class="cell"></th>
            <th class="cell"></th>
          </tr>
        </table>
</div>

<img src="images/school_map.png" id="map" alt="map" usemap="#map" hidden>

<canvas id="canvas" width="652px" height="652px" style="border: 1px solid #000000;">
</canvas>


<script>
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var img = document.getElementById("map");
ctx.drawImage(img, 0, 0, 652, 652);

var d = document.getElementById("canvas");
var ctx2 = d.getContext("2d");
ctx2.beginPath();
ctx2.arc(95, 50, 40, 0, 2 * Math.PI);
ctx2.stroke();
ctx2.fillStyle = "rgba(255, 0, 0, 0.5)"


var periodInput = document.getElementById('newPeriod');
var classInput = document.getElementById('newClass');
var startInput = document.getElementById('newStart');
var endInput = document.getElementById('newEnd');
var addClassButton = document.getElementById('addClassButton');
var incompleteTasks = document.getElementById('toDo');

var i = 0

function addTask() {
    var period = periodInput.value;
    var classIn = classInput.value;
    var start = startInput.value;
    var end = endInput.value;


    var [h, m] = document.getElementById('newStart').value.split(":");
    console.log((h % 12 ? h % 12 : 12) + ":" + m, h >= 12 ? 'PM' : 'AM');

    i++;

    var table = document.createElement('tr');
    table.innerHTML = "<th id='class" + i + "' class='cell'>" + period + "</th>" +
        "<th id='class" + i + "' class='cell'>" + classIn + "</th>" +
        "<th id='class" + i + "' class='cell'>" + start + "</th>" +
        "<th id='class" + i + "' class='cell'>" + end + "</th>" +
        "<th id='class" + i + "' class='cell'><button class='button' onclick='remove()'>X</button>" +
        "<th id='class" + i + "' class='cell'><button class='button' onclick='remove()'>Edit</button>";
    incompleteTasks.appendChild(table);
}
</script>