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
<form id="addInfo">
  <div class='texts1'>    
    <h3> Period </h3>
        <input autocomplete="off" id='newPeriod' type='number' required>
    <h3> Class </h3>
        <input autocomplete="off" id='newClass' type='text' required>
    <h3> Class Number </h3>
        <input autocomplete="off" id='classNum' type='text' required>
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
        <table class="table" id="schedule" style="width: 100%; margin-left: auto; margin-right: auto;">
          <tr>
            <th class="cell">Period</th>
            <th class="cell">Class Name</th>
            <th class="cell">Class Number</th>
            <th class="cell">Start Time</th>
            <th class="cell">End Time</th>
          </tr>
        </table>
</div>

<img src="images/school_map.png" id="map" alt="map" usemap="#map" hidden>

<canvas id="canvas" width="652px" height="652px" style="border: 1px solid #000000;">
</canvas>


<script>
var c = document.getElementById("canvas");
var ctx2 = c.getContext("2d");
var img = document.getElementById("map");
ctx2.drawImage(img, 0, 0, 652, 652);

var d = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath();
    ctx.lineWidth=5;
    ctx.strokeStyle='black';
    ctx.stroke();
    ctx.fillStyle='red';
    ctx.fill();

}

drawStar(347, 507, 5, 15, 5)



var periodInput = document.getElementById('newPeriod');
var classInput = document.getElementById('newClass');
var classNumber = document.getElementById('classNum');
var startInput = document.getElementById('newStart');
var endInput = document.getElementById('newEnd');
var addClassButton = document.getElementById('addClassButton');
var incompleteTasks = document.getElementById('schedule');

var i = 0

function addTask() {
    var period = periodInput.value;
    var classIn = classInput.value;
    var classNum = classNumber.value;
    var start = startInput.value;
    var end = endInput.value;


    var [h, m] = document.getElementById('newStart').value.split(":");
    console.log((h % 12 ? h % 12 : 12) + ":" + m, h >= 12 ? 'PM' : 'AM');

    i++;

    var table = document.createElement('tr');
    table.innerHTML = "<th id='class" + i + "' class='cell'>" + period + "</th>" +
        "<th id='class" + i + "' class='cell'>" + classIn + "</th>" +
        "<th id='class" + i + "' class='cell'>" + classNum + "</th>" +
        "<th id='class" + i + "' class='cell'>" + start + "</th>" +
        "<th id='class" + i + "' class='cell'>" + end + "</th>";
    incompleteTasks.appendChild(table);
}
</script>