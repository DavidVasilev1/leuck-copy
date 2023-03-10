<html>
<style>
  input {
    padding: 10px;
    background-color: #4a4a48;
    border: 0px;
    color: #e7dff7;
    border-radius: 15px;
    height: 37px;
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  select {
    padding: 10px;
    background-color: #4a4a48;
    border: 0px;
    color: #e7dff7;
    border-radius: 15px;
  }
  button {
    border-radius: 10px;
    background: #4a4a4a;
    font-size: 15px;
    color: #a881f7;
    border-color: #775cad;
    margin: 5px;
    width: 60px;
    height: 40px;
    text-align: center;
  }
  .button {
    position: inherit;
    float: left;
    align-content: center;
    width: 45%;
    margin-top: 15px;
  }
  h3 {
    color: #a881f7;
    font-size: 25px;
    padding-top: 15px;
  }
  .data {
    width: 100%;
    position: inherit;
    float: right;
  }
  .title {
    height: 40px;
    color: #a881f7;
    font-size: 30px;
    text-align: center;
    padding: 10px;
  }
  .table {
    border: #a881f7 solid;
    border-radius: 10px;
    border-collapse:separate;
  }
  .cell {
    border: 1px solid;
    text-align: center;
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
    background: #4a4a4a;
    font-size: 15px;
    color: #a881f7;
    border-color: #775cad;
  }
  canvas {
    border-radius: 10px;
    border: 1px solid #000000;
  }
  select {
    text-align: center;
    margin: 5px;
    width: 27%;
  }
  ::-webkit-scrollbar {
      width: 7px;
  }
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      -webkit-border-radius: 10px;
      border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: #a881f7;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
      background: #a881f7;
  }
  
</style>

<div class='container'>

  <div class='texts1'>    
    <h3> Period </h3>
        <input autocomplete="off" id='newPeriod' type='number' required>
    <h3> Class </h3>
        <input autocomplete="off" id='newClass' type='text' required>
    <h3> Class Number </h3>
        <select id="drop1" required>
          <option value="" selected disabled hidden>---</option>
          <option>A</option>
          <option>B</option>
          <option>D</option>
          <option>E</option>
          <option>G</option>
          <option>J</option>
          <option>K</option>
          <option>L</option>
          <option>M</option>
          <option>N</option>
          <option>P</option>
          <option>R</option>
          <option>S</option>
        </select>
        <select id="drop2" required>
          <option value="" selected disabled hidden>---</option>
          <option>101</option>
          <option>102</option>
          <option>103</option>
          <option>104</option>
          <option>105</option>
          <option>106</option>
          <option>107</option>
          <option>108</option>
          <option>110</option>
          <option>111</option>
          <option>112</option>
          <option>113</option>
          <option>114</option>
          <option>115</option>
          <option>116</option>
          <option>117</option>
          <option>118</option>
          <option>121</option>
          <option>122</option>
          <option>123</option>
          <option>124</option>
          <option>125</option>
          <option>126</option>
          <option>128</option>
          <option>136</option>
          <option>138</option>
          <option>144</option>
          <option>148</option>
          <option>150</option>
          <option>151</option>
          <option>300</option>
          <option>301</option>
          <option>302</option>
          <option>303</option>
          <option>401</option>
          <option>402</option>
          <option>501</option>
          <option>502</option>
          <option>Performing Arts Center</option>
          <option>Library</option>
          <option>Administration</option>
          <option>Food Court</option>
          <option>Gym</option>
        </select>
  </div>
  <div class='texts2'>
    <h3> Start Time (hh:mm) </h3>
        <input autocomplete="off" id='newStart' type='time' required>
    <h3> End Time (hh:mm) </h3>
        <input autocomplete="off" id='newEnd' type='time' required>
  </div>
  <div class="button">
    <button class='button' id='addClassButton' onclick="addSchedule()">Add</button>
    <button class='button' id='remove'>Clear</button>
  </div>
  <div class="data">
    <p class="title">Classes</p>
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
</div>

<img src="images/school_map.jpg" id="map" alt="map" usemap="#map" hidden>

<canvas id="canvas" width="652px" height="652px">
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
    ctx.strokeStyle='red';
    ctx.stroke();
}

var periodInput = document.getElementById('newPeriod');
var classInput = document.getElementById('newClass');
var classLetter = document.getElementById('drop1');
var classNum = document.getElementById('drop2');
var startInput = document.getElementById('newStart');
var endInput = document.getElementById('newEnd');
var addClassButton = document.getElementById('addClassButton');
var clear = document.getElementById('remove')
var incompleteTasks = document.getElementById('schedule');

//local

var periodX = []
var class1X = []
var classNumX = []
var startTimeX = []
var endTimeX = []
function addSchedule() {
    var period = periodInput.value;
      periodX.push(periodInput.value)
    var classIn = classInput.value;
      class1X.push(classInput.value)
    var classNum = document.getElementById('drop1').value + document.getElementById('drop2').value;
    console.log(classNum)
      classNumX.push(classNum)
    var start = startInput.value;
      startTimeX.push(startInput.value)
    var end = endInput.value;
      endTimeX.push(endInput.value)
    localStorage.setItem('period', JSON.stringify(periodX))
    localStorage.setItem('class1', JSON.stringify(class1X))
    localStorage.setItem('classNum', JSON.stringify(classNumX))
    localStorage.setItem('startTime', JSON.stringify(startTimeX))
    localStorage.setItem('endTime', JSON.stringify(endTimeX))
    const delay = (delayms) => {
      return new Promise(resolve => setTimeout(resolve, delayms));
    }
    const reRender = async () => {
      let reloadDelay = await delay(700);
      window.location.reload()
    }
    reRender();
    addTask(period, classIn, classNum, start, end)
    addLocal(period, classIn, classNum, start, end)
}

var i = 0

function addTask(period, classIn, classNum, start, end) {

    var table = document.createElement('tr');
    table.innerHTML = "<th id='class' class='cell'>" + period + "</th>" +
        "<th id='class' class='cell' ondblclick='editName()'>" + classIn + "</th>" +
        "<th id='class' class='cell'>" + classNum + "</th>" +
        "<th id='class' class='cell'>" + start + "</th>" +
        "<th id='class' class='cell'>" + end + "</th>";
    incompleteTasks.appendChild(table);
    document.getElementById('newPeriod').value = "";
    document.getElementById('newClass').value = "";
    document.getElementById('newStart').value = "";
    document.getElementById('newEnd').value = "";
}

// API connect

const isLocalhost = Boolean(
	window.location.hostname === "localhost" ||
		window.location.hostname === "[::1]" ||
		window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);
const api = isLocalhost ? "http://localhost:8199" : "https://saakd.nighthawkcodingsociety.com";

clear.addEventListener("click", function(){
  remove();
});

const getList = async () => {
	const list = await fetch(api + "/scheduleList").then((r) => r.json());
	scheduleLocal = list;
  return list
};

getList().then(list => {
  list.forEach(cls => {

    addTask(cls.period, cls.class1, cls.classNum, cls.startTime, cls.endTime)
    
    const result = coords.find(({ room }) => room === cls.classNum);
    console.log(result)
    drawStar(result.x, result.y, 5, 20, 10)
  });
})

function addLocal(period, class1, classNum, startTime, endTime){

  let data = {
    "period": period,
    "class1": class1,
    "classNumber": classNum,
    "startTime": startTime,
    "endTime": endTime
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

function edit(period, class1, classNum, startTime, endTime) {
  let data = {
    "class1": class1
  };
  fetch(api + '/schedule', {
    method: 'PUT',
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

function editName(className, classIn){
  className = document.getElementById('className' + i)
  console.log(className) 
}

function remove() {
  console.log("work")
  fetch(api + '/scheduleList', {
    method: 'DELETE'
  })
    .then((response) => response.json())
  var x = 1
  
  const delay = (delayms) => {
    return new Promise(resolve => setTimeout(resolve, delayms));
  }
  const reRender = async () => {
    let reloadDelay = await delay(700);
    window.location.reload()
  }
  reRender();

  while (x=1) {
    const element = document.getElementById("class");
    element.remove();
  }
}
</script>