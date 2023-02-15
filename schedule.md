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
<br>
<br>
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

if (img.complete) {
    ctx2.drawImage(img, 0, 0, 652, 652);
} else {
    img.onload = function () {
        ctx2.drawImage(img, 0, 0, 652, 652);    
    };
}

function storeCoordinate(room, xVal, yVal, array) {
    array.push({room: room, x: xVal, y: yVal});
}

var coords = [];

storeCoordinate("A101",347,507,coords)
storeCoordinate("A102",325,509,coords)
storeCoordinate("A107",302,501,coords)
storeCoordinate("A116",283,487,coords)
storeCoordinate("A124",261,484,coords)
storeCoordinate("A125",243,469,coords)
storeCoordinate("A126",228,445,coords)
storeCoordinate("A136",253,425,coords)
storeCoordinate("A138",267,436,coords)
storeCoordinate("A144",313,462,coords)
storeCoordinate("A148",325,437,coords)
storeCoordinate("A150",330,469,coords)
storeCoordinate("A151",349,471,coords)
storeCoordinate("B111",573,358,coords)
storeCoordinate("B113",594,356,coords)
storeCoordinate("B115",619,354,coords)
storeCoordinate("B121",592,239,coords)
storeCoordinate("B123",571,247,coords)
storeCoordinate("B125",551,255,coords)
storeCoordinate("B128",521,263,coords)
storeCoordinate("D101",450,260,coords)
storeCoordinate("D102",431,241,coords)
storeCoordinate("D103",463,247,coords)
storeCoordinate("D104",445,229,coords)
storeCoordinate("D111",471,203,coords)
storeCoordinate("D112",489,221,coords)
storeCoordinate("D113",485,189,coords)
storeCoordinate("D114",503,208,coords)
storeCoordinate("D115",499,176,coords)
storeCoordinate("D116",517,194,coords)
storeCoordinate("D117",513,162,coords)
storeCoordinate("D118",531,183,coords)
storeCoordinate("E101",435,175,coords)
storeCoordinate("E102",419,169,coords)
storeCoordinate("E103",451,153,coords)
storeCoordinate("E104",427,144,coords)
storeCoordinate("E105",461,129,coords)
storeCoordinate("E106",437,119,coords)
storeCoordinate("G101",373,215,coords)
storeCoordinate("G102",345,213,coords)
storeCoordinate("G103",374,199,coords)
storeCoordinate("G104",346,353,coords)
storeCoordinate("G111",349,162,coords)
storeCoordinate("G112",377,163,coords)
storeCoordinate("G113",350,143,coords)
storeCoordinate("G114",377,144,coords)
storeCoordinate("G115",350,123,coords)
storeCoordinate("G116",376,125,coords)
storeCoordinate("G117",352,104,coords)
storeCoordinate("G118",379,105,coords)
storeCoordinate("J101",281,233,coords)
storeCoordinate("J102",305,222,coords)
storeCoordinate("J103",272,215,coords)
storeCoordinate("J104",297,204,coords)
storeCoordinate("J110",260,188,coords)
storeCoordinate("J111",254,177,coords)
storeCoordinate("J112",249,165,coords)
storeCoordinate("J113",283,175,coords)
storeCoordinate("J114",275,157,coords)
storeCoordinate("J115",241,151,coords)
storeCoordinate("J116",266,139,coords)
storeCoordinate("J117",233,133,coords)
storeCoordinate("J118",257,122,coords)
storeCoordinate("K101",222,208,coords)
storeCoordinate("K102",209,223,coords)
storeCoordinate("K103",206,186,coords)
storeCoordinate("K104",185,206,coords)
storeCoordinate("K105",186,167,coords)
storeCoordinate("K106",165,187,coords)
storeCoordinate("L101",234,283,coords)
storeCoordinate("L102",224,307,coords)
storeCoordinate("L103",218,276,coords)
storeCoordinate("L104",208,299,coords)
storeCoordinate("L110",179,287,coords)
storeCoordinate("L111",167,282,coords)
storeCoordinate("L112",155,276,coords)
storeCoordinate("L113",186,261,coords)
storeCoordinate("L114",169,252,coords)
storeCoordinate("L115",140,270,coords)
storeCoordinate("L116",151,245,coords)
storeCoordinate("L117",121,262,coords)
storeCoordinate("L118",133,237,coords)
storeCoordinate("M101",103,312,coords)
storeCoordinate("M116",75,350,coords)
storeCoordinate("N113",170,422,coords)
storeCoordinate("N122",157,359,coords)
storeCoordinate("P101",176,468,coords)
storeCoordinate("P104",156,462,coords)
storeCoordinate("P107",152,479,coords)
storeCoordinate("P108",133,490,coords)
storeCoordinate("P111",106,482,coords)
storeCoordinate("P116",98,456,coords)
storeCoordinate("R300",452,66,coords)
storeCoordinate("R301",481,76,coords)
storeCoordinate("R302",506,89,coords)
storeCoordinate("R303",530,103,coords)
storeCoordinate("R401",392,49,coords)
storeCoordinate("R402",418,53,coords)
storeCoordinate("R501",334,42,coords)
storeCoordinate("R502",361,44,coords)
storeCoordinate("S101",100,147,coords)
storeCoordinate("S102",118,132,coords)
storeCoordinate("S103",137,114,coords)
storeCoordinate("S104",155,100,coords)
storeCoordinate("S105",170,85,coords)
storeCoordinate("S106",186,72,coords)
storeCoordinate("S107",201,58,coords)
storeCoordinate("Performing Arts Center",137,395,coords)
storeCoordinate("Library",380,477,coords)
storeCoordinate("Administration",423,454,coords)
storeCoordinate("Food Court",477,323,coords)
storeCoordinate("Gym",571,304,coords)

coords[0].room == "A101"
coords[0].x == 347
coords[0].y == 507

for (var i = 0; i < coords.length; i++) {
    var room = coords[i].room;
    var x = coords[i].x;
    var y = coords[i].y;
    console.log(room)
    console.log(x,y)
} 



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

// min = Math.ceil(0);
// max = Math.floor(600);

// const x1 = Math.floor(Math.random() * (max - min) + min);;
// const y1 = Math.floor(Math.random() * (max - min) + min);;



drawStar(x, y, 5, 15, 5)

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
    if (classNumber = room) {
      console.log(x);
    }
}

// API connect

const isLocalhost = Boolean(
	window.location.hostname === "localhost" ||
		window.location.hostname === "[::1]" ||
		window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);
const api = isLocalhost ? "http://localhost:8199" : "https://saakd.nighthawkcodingsociety.com";




const getList = async () => {
	const list = await fetch(api + "/scheduleList").then((r) => r.json());
	scheduleLocal = list;
  return list
};

// getList().then()


function addLocal(periodX, classX, classNumX, startTimeX, endTimeX){

  let data = {
    "period": periodX,
    "class": classX,
    "classNumber": classNumX,
    "startTime": startTimeX,
    "endTime": endTimeX
}
  fetch(api + '/schedule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });



}
const addData = async () => {
	const timer = await fetch(api + "/schedule", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({period: 10, class: "classX", classNum: "classNumX", startTime: "startTimeX", endTime: "endTimeX"}),
	}).then((r) => r.json());
};


</script>