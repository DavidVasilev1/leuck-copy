<!-- run on a Github Pages website, using a template from teacher, John Mortensen, on website layout and nothing else -->
<html>
<style>
  /* personal styling on interface to make it look appealing */
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
  <!-- visual interface that the user sees -->
  <p style="text-align: center;">Enter your class information below and click enter when you are ready.</p> 
  <div class='texts1'>
  <!-- input cells used for gathering user data -->
    <h3> Period </h3>
        <input autocomplete="off" id='newPeriod' type='number' required>
    <h3> Class </h3>
        <input autocomplete="off" id='newClass' type='text' required>
    <h3> Class Number </h3>
        <select id="dropClass1" required>
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
        <select id="dropClass2" required>
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
  <!-- submission and clear button used to alter the table state (add or remove data entered by the user) -->
  <div class="button">
    <button class='button' id='addClassButton' onclick="addSchedule()">Add</button>
    <button class='button' id='remove'>Clear</button>
  </div>
  <!-- data table used to display class information entered by the user -->
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
<!-- hidden image used to create map canvas on which classes are marked -->
<img src="images/school_map.jpg" id="map" alt="map" usemap="#map" hidden>
<!-- canvas on which map and highlighted classes will be displayed -->
<canvas id="canvas" width="652px" height="652px">
</canvas>

<!-- logic of the program -->
<script>

// variables created for the map canvas which is used to project classes for user to see
var map = document.getElementById("canvas");
var mapCanvas = map.getContext("2d");
var imgMap = document.getElementById("map");

// redundancy, making sure map always loads on website
if (imgMap.complete) {
  mapCanvas.drawImage(imgMap, 0, 0, 652, 652); // if map is complete loading, don't try loading map again
} else {
    imgMap.onload = function () {
      mapCanvas.drawImage(imgMap, 0, 0, 652, 652); // if map hasn't loaded, map will attempt to load again, making sure it always shows
    };
}

// help on how to draw a star on HTML canvas was found here: https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5
// code is modified to meet my specific needs
function starMark(cx, cy, spikes, outerRadius, innerRadius) {
  // created variables for star location and orientation
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;

  // starting path of where the star is drawn and how it is drawn
  mapCanvas.strokeStyle = "#000";
  mapCanvas.beginPath();
  mapCanvas.moveTo(cx, cy - outerRadius)
  // moves brush to repeat a pattern in order to draw the spikes of the star
  for (i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      mapCanvas.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      mapCanvas.lineTo(x, y)
      rot += step
  }
  // ending the path of the brush in order to end the star and sets final color, line width, and infill of star
  mapCanvas.lineTo(cx, cy - outerRadius)
  mapCanvas.closePath();
  mapCanvas.lineWidth=5;
  mapCanvas.strokeStyle='red';
  mapCanvas.stroke();
}

// setting formatting of keys used to store room information which is used to index the rooms on the map and their coordinates
function storeRoomData(room, xVal, yVal, dataArray) {
    dataArray.push({room: room, x: xVal, y: yVal});
}

// array of room numbers and coordinates is set and filled with 'storeRoomData()' function
var coords = [];

// data for room numbers
storeRoomData("A101",347,507,coords)
storeRoomData("A102",325,509,coords)
storeRoomData("A107",302,501,coords)
storeRoomData("A116",283,487,coords)
storeRoomData("A124",261,484,coords)
storeRoomData("A125",243,469,coords)
storeRoomData("A126",228,445,coords)
storeRoomData("A136",253,425,coords)
storeRoomData("A138",267,436,coords)
storeRoomData("A144",313,462,coords)
storeRoomData("A148",325,437,coords)
storeRoomData("A150",330,469,coords)
storeRoomData("A151",349,471,coords)
storeRoomData("B111",573,358,coords)
storeRoomData("B113",594,356,coords)
storeRoomData("B115",619,354,coords)
storeRoomData("B121",592,239,coords)
storeRoomData("B123",571,247,coords)
storeRoomData("B125",551,255,coords)
storeRoomData("B128",521,263,coords)
storeRoomData("D101",450,260,coords)
storeRoomData("D102",431,241,coords)
storeRoomData("D103",463,247,coords)
storeRoomData("D104",445,229,coords)
storeRoomData("D111",471,203,coords)
storeRoomData("D112",489,221,coords)
storeRoomData("D113",485,189,coords)
storeRoomData("D114",503,208,coords)
storeRoomData("D115",499,176,coords)
storeRoomData("D116",517,194,coords)
storeRoomData("D117",513,162,coords)
storeRoomData("D118",531,183,coords)
storeRoomData("E101",435,175,coords)
storeRoomData("E102",419,169,coords)
storeRoomData("E103",451,153,coords)
storeRoomData("E104",427,144,coords)
storeRoomData("E105",461,129,coords)
storeRoomData("E106",437,119,coords)
storeRoomData("G101",373,215,coords)
storeRoomData("G102",345,213,coords)
storeRoomData("G103",374,199,coords)
storeRoomData("G104",346,353,coords)
storeRoomData("G111",349,162,coords)
storeRoomData("G112",377,163,coords)
storeRoomData("G113",350,143,coords)
storeRoomData("G114",377,144,coords)
storeRoomData("G115",350,123,coords)
storeRoomData("G116",376,125,coords)
storeRoomData("G117",352,104,coords)
storeRoomData("G118",379,105,coords)
storeRoomData("J101",281,233,coords)
storeRoomData("J102",305,222,coords)
storeRoomData("J103",272,215,coords)
storeRoomData("J104",297,204,coords)
storeRoomData("J110",260,188,coords)
storeRoomData("J111",254,177,coords)
storeRoomData("J112",249,165,coords)
storeRoomData("J113",283,175,coords)
storeRoomData("J114",275,157,coords)
storeRoomData("J115",241,151,coords)
storeRoomData("J116",266,139,coords)
storeRoomData("J117",233,133,coords)
storeRoomData("J118",257,122,coords)
storeRoomData("K101",222,208,coords)
storeRoomData("K102",209,223,coords)
storeRoomData("K103",206,186,coords)
storeRoomData("K104",185,206,coords)
storeRoomData("K105",186,167,coords)
storeRoomData("K106",165,187,coords)
storeRoomData("L101",234,283,coords)
storeRoomData("L102",224,307,coords)
storeRoomData("L103",218,276,coords)
storeRoomData("L104",208,299,coords)
storeRoomData("L110",179,287,coords)
storeRoomData("L111",167,282,coords)
storeRoomData("L112",155,276,coords)
storeRoomData("L113",186,261,coords)
storeRoomData("L114",169,252,coords)
storeRoomData("L115",140,270,coords)
storeRoomData("L116",151,245,coords)
storeRoomData("L117",121,262,coords)
storeRoomData("L118",133,237,coords)
storeRoomData("M101",103,312,coords)
storeRoomData("M116",75,350,coords)
storeRoomData("N113",170,422,coords)
storeRoomData("N122",157,359,coords)
storeRoomData("P101",176,468,coords)
storeRoomData("P104",156,462,coords)
storeRoomData("P107",152,479,coords)
storeRoomData("P108",133,490,coords)
storeRoomData("P111",106,482,coords)
storeRoomData("P116",98,456,coords)
storeRoomData("R300",452,66,coords)
storeRoomData("R301",481,76,coords)
storeRoomData("R302",506,89,coords)
storeRoomData("R303",530,103,coords)
storeRoomData("R401",392,49,coords)
storeRoomData("R402",418,53,coords)
storeRoomData("R501",334,42,coords)
storeRoomData("R502",361,44,coords)
storeRoomData("S101",100,147,coords)
storeRoomData("S102",118,132,coords)
storeRoomData("S103",137,114,coords)
storeRoomData("S104",155,100,coords)
storeRoomData("S105",170,85,coords)
storeRoomData("S106",186,72,coords)
storeRoomData("S107",201,58,coords)
storeRoomData("Performing Arts Center",137,395,coords)
storeRoomData("Library",380,477,coords)
storeRoomData("Administration",423,454,coords)
storeRoomData("Food Court",477,323,coords)
storeRoomData("Gym",571,304,coords)

// initializes the format of the function which will be used to populate array, using parameters and assigning them to initial values 
coords[0].room == "A101"
coords[0].x == 347
coords[0].y == 507

// loop continues organization of data into array based on key, value pairs and indexing with the use of 'i'
for (var i = 0; i < coords.length; i++) {
    var room = coords[i].room;
    var x = coords[i].x;
    var y = coords[i].y;
}

// setting variables used to gather data from user inputs in above HTML
var periodInput = document.getElementById('newPeriod');
var classInput = document.getElementById('newClass');
var startInput = document.getElementById('newStart');
var endInput = document.getElementById('newEnd');
var addClassButton = document.getElementById('addClassButton');
var clear = document.getElementById('remove')
var schedule = document.getElementById('schedule');

// delay set to reload page after user adds data
const delay = (delayms) => {
      return new Promise(resolve => setTimeout(resolve, delayms))
    }
// rerendering function using above delay to reload page when called, allowing stars to be drawn on map canvas
const reRender = async () => {
  let reloadDelay = await delay(700)
  window.location.reload()
}



//function used to add data to the backend database
function addSchedule() {

  // defines the variables that are to be pushed into the backend api
  var period = periodInput.value
  var class1 = classInput.value
  var classNum = document.getElementById('dropClass1').value + document.getElementById('dropClass2').value;
  var startTime = startInput.value
  var endTime = endInput.value

  // this checks is all cells are complete before pushing the data to the backend
  // this creates an array with the variables that are used to define the values entered by the user
  var cellIds = ['newPeriod', 'newClass', 'dropClass1', 'dropClass2', 'newStart', 'newEnd']

  // this iterates through the variables used to define the input cells
  for (let i = 0; i < cellIds.length; i++) {
    var getData = document.getElementById(cellIds[i]).value
    // checks if the cells are empty or not and if they are, it prompts the user to fill in the empty cells
    if (getData === ''){
      alert('Please fill out the empty cells.')
      return
    }
  }

  // reloads the page, allowing for the stars to be drawn onto the map and for the data to be loaded into the table
  //reRender()
  addTask(period, class1, classNum, startTime, endTime)
  // runs the function responsible for adding the data to an api where the data is stored, called, and can be deleted from
  addData(period, class1, classNum, startTime, endTime)
}

// this function adds data into the table for the user to see, based on the data that is read from the database in the api
// this functoin calls the parameters which are defined to match with the values of the input from the user which are pulled from the api
// function addTask(period, class1, classNum, startTime, endTime) {
  
//   // creates an array with the variables defining the user data pulled form the api, allowing for quick iteration through the rows and cells of the table, to display data quickly
//   var tableCells = [period, class1, classNum, startTime, endTime]
//   // creates the rows of information
//   var row = document.createElement('tr')
//   // for each cell, the program pulls the data from the api based on the variables defined in the above array, and displays them as text for the user to see
//   tableCells.forEach((cell) => {
//     var tableCell = document.createElement('th')
//     tableCell.textContent = cell
//     tableCell.className = 'cell'
//     // creates a new cell for each piece of information
//     row.appendChild(tableCell)
//   })
//   // creates a new row for further information to be placed
//   schedule.appendChild(row)
// }

function addTask(period, class1, classNum, startTime, endTime) {
  
  // creates an array with the variables defining the user data pulled form the api, allowing for quick iteration through the rows and cells of the table, to display data quickly
  var tableCells = [period, class1, classNum, startTime, endTime]
  // creates the rows of information
  var row = document.createElement('tr')
  // for each cell, the program pulls the data from the api based on the variables defined in the above array, and displays them as text for the user to see
  for (var i = 0; i < tableCells.length; i++) {
    var tableCell = document.createElement('th')
    tableCell.textContent = tableCells[i]
    tableCell.className = 'cell'
    // creates a new cell for each piece of information
    if (i === 0) {
      tableCell.id = 'period'
    } else if (i === 1) {
      tableCell.id = 'class'
    } else if (i === 2) {
      tableCell.id = 'classNum'
    } else if (i === 3) {
      tableCell.id = 'classStart'
    } else if (i === 4) {
      tableCell.id = 'classEnd'
    }
    row.appendChild(tableCell)
  }
  // creates a new row for further information to be placed
  schedule.appendChild(row)
}

// connection to the api 

// creates the ability to call the local api, if full stack is run entirely locally
const isLocalhost = Boolean(
	window.location.hostname === "localhost" ||
	window.location.hostname === "[::1]" ||
	window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)
// checks whether the site is run locally and decides whether or not to use the local api or hosted api
const api = isLocalhost ? "http://localhost:8199" : "https://saakd.nighthawkcodingsociety.com";

// adds data that the user inputs into the api, based on the parameters which are defined per the values of the input boxes in the above logic
function addData(period, class1, classNum, startTime, endTime){

// a dictionary is made, to organize the data before sending it to the backend for storage
let data = {
  "period": period,
  "class1": class1,
  "classNumber": classNum,
  "startTime": startTime,
  "endTime": endTime
}

// this fetches the post link for the api, allowing for the data to be added into the api database
fetch(api + '/schedule', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  // error checking, to make sure everything works and if there are errors, the program stops
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });
}

// gathers all data from the api backend and send it for the frontend to process through the get link, which contains all the data in the database
const getList = async () => {
	const list = await fetch(api + "/scheduleList").then((r) => r.json());
	scheduleLocal = list
  return list
};

// gathers data and prepares it to be displayed for the user to see
getList().then(list => {
  // for each class in the data, which is defined as list, that is pulled into the frontend, it is run through the 'addTask()' function in order to display the data for the user to see
  list.forEach(cls => {
    addTask(cls.period, cls.class1, cls.classNum, cls.startTime, cls.endTime)
    
    // adds the markings on the map for each class that is in the dataset
    const result = coords.find(({ room }) => room === cls.classNum);
    starMark(result.x, result.y, 5, 20, 10)
  })
})

// allows data to be cleared from the table and the api once the clear button is clicked
clear.addEventListener("click", function(){
  // runs the 'remove()' function
  remove()
});

// this fetches the delete link for the api, allowing for the data to be removed entirely from the api database, preventing program from regenerating stars and text
function remove() {
  fetch(api + '/scheduleList', {
    method: 'DELETE'
  })
    .then((response) => response.json())

  // sets arbitrary for while loop to clear table
  var x = 1
  // this triggers the page to reload in order to entirely clear the table and map of it's contents
  reRender();
  // entirely clears contents of table
  while (x = 1) {
    const element = document.getElementById("class");
    element.remove();
  }
}
</script>