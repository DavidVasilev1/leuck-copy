## Calculator

### Arithmetic Calculator

<head>
<style>
.input {
  width: 83%;
  height: 50px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 20px;
}
.button {
  width: 15%;
  height: 50px;
  background-color: #A881F7;
  border: 2px solid #ccc;
  border-radius: 4px;
  color: #1E1E1E;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
}
.tableResult {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 650px;
  border: 3px solid #ccc;
  font-size: 20px;
}
.rowLine {
  border: 2px solid #919191;
}
.cellFormat {
  text-align: right;
}
.button:hover {background-color: #E2D4FC;}
.buttonEdit {
  width: 60px;
  height: 30px;
  background-color: #A881F7;
  border: 2px solid #ccc;
  border-radius: 4px;
  color: #1E1E1E;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
}
.buttonEdit:hover {background-color: #E2D4FC;}

</style>
</head>
<body>
  <p>Type out an expression with a number, followed by a sign (+, -, *, /), and then the second number. Ex: 2+9</p>
  <table id="table"></table>
  <input id='expression' class = 'input' type='text'>
  <button class="button" id="equals" on>=</button>
  <button class="button" id="clear" on>Clear</button>
</body>

<script>
  const CALC_KEY = "CALCULATOR";
  var expression = document.getElementById('expression');
  var equals = document.getElementById('equals');
  var clear = document.getElementById('clear');
  var answer = 0;
  const signs = ["+","-","*","/"]
  var num = 0;
  var operator = -1;
  var position = 0;
  // var initial = window.localStorage.getItem(CALC_KEY);
  var initial = getCalculations()
  var str = "";
  var array = [];
  var count = 0;
  var numbers = [];
  var operators = [];
  var positions = [];
  var total = 0;
  var element = "";
  var edit = 0;
  var editId = 0;
  var newStrText = "";



  function getCalculations() {
    return JSON.parse(localStorage.getItem(CALC_KEY)) || []
  }

  function tableAdding(){
    var calculations = getCalculations()

    table = document.getElementById('table');
    table.innerHTML = ""
    table.className = "tableResult"

    for (var i = 0; i < calculations.length; i++) {
        var row = document.createElement('tr');
        var column = document.createElement('td');
        row.className = "rowLine"
        column.className = "cellFormat"
        row.textContent = calculations[i]
        column.innerHTML = "<button class='buttonEdit' id='"+ i +"' onclick='editEntry("+ i +")'>" + "Edit" + "</button>"
        table.appendChild(row);
        row.appendChild(column);
    }
  }

  
  function addCalculation(calcStr) {
    var prevValue = JSON.parse(localStorage.getItem(CALC_KEY)) || []
    prevValue.push(calcStr)
    var newValue = JSON.stringify(prevValue)
    localStorage.setItem(CALC_KEY, newValue)
    tableAdding()
  }

  function editCalculation(calcStr, id) {
    var prevValue = JSON.parse(localStorage.getItem(CALC_KEY))
    prevValue[id] = calcStr
    var newValue = JSON.stringify(prevValue)
    localStorage.setItem(CALC_KEY, newValue)
    tableAdding()
  }

  console.log("dsdf",initial)
  var newStr = initial
  console.log("asdf",newStr)
  if ((newStr == "") || (newStr === null)){
    newStrFil = []
    newStrText = newStrFil.toString()
    console.log(newStrText) 

  }
  else {
    // newStr = initial.split("\n")
    console.log("ddd",newStr)
    newStrFil = newStr.filter((str) => str !== '');
    console.log("init", initial)
    newStrText = initial.toString()
    console.log(newStrText)
  }
  console.log("test:",newStrFil)
  tableAdding(newStrFil)

  expression.focus();
  expression.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equals").click();
  }
  });
  equals.addEventListener("click", function(){ countString(); });
  clear.addEventListener("click", function(){ clearEntry();});



  
  function editEntry(entry){
    console.log("splendid:", entry)
    var preexpression = newStrFil[entry];
    var prearray = Array.from(preexpression)
    for (let i = 0; i < preexpression.length; i++) {
        if (prearray[i] == "=") {
          expression.value = preexpression.substring(0, i)
          edit = 1;
          editId = entry;
        }
      }
    expression.focus();
    return entry
  }
  

  function clearEntry() {
    console.log("test")
    window.localStorage.clear();
    expression.value = "";
    newStrFil = []
    tableAdding(newStrFil)
    expression.focus();
    newStrFil = [];
    console.log("apple:",newStrFil)
  }
  // program to check the number of occurrence of a character

  function countString() {
    console.log("hi")
    str = expression.value;
    array = Array.from(str)
      count = 0;
      for (let j = 0; j < signs.length; j++) {
        for (let i = 0; i < str.length; i++) {
          if (array[i] == signs[j]) {
              count += 1;
          }
        }
      }
      console.log(count)
      separate(count, str, array)
  }
  function separate(count, str, array) {
    // str = expression.value;
    // console.log(str);
    // array = Array.from(str)
    // console.log(array);
    for (let j = 0; j < signs.length; j++) {
      for (let i = 0; i < str.length; i++) {
        if (array[i] == signs[j]) {
          positions.push(i)
        }
        if (positions.length == count) {
          break
        }
      }
    }
    positions.sort(function(a, b){return b - a});
    console.log("positionsreverse",positions);
    for (let i = 0; i < count; i++) {
      console.log("testt",array[positions[i]])
      var sign = array[positions[i]]
        if (sign == "+") {
        operator = 0;
        operators.push(operator)
      } else if (sign == "-") {
        console.log("minus")
        operator = 1;
        operators.push(operator)
      } else if (sign == "*") {
        operator = 2;
        operators.push(operator)
      } else if (sign == "/") {
        operator = 3;
        operators.push(operator)
      } 
    // else {
    //   alert("Try Again");
    //   expression.value = "";
    //   expression.focus();
    //   return
    // }
    }
    if (str.toLowerCase() == "kaiden is a csp genius" || (str.toLowerCase().includes("kaiden") && str.toLowerCase().includes("genius") && !str.toLowerCase().includes("not") && !str.toLowerCase().includes("isn't") && !str.toLowerCase().includes("isnt"))) {
      addCalculation("True: " + str + ". Kaiden is number 1.")
      expression.value = "";
      element = "True: " + str + ". Kaiden is number 1."
      newStrFil.push(element)
      tableAdding(newStrFil)
      expression.focus();
      return
    } else if (operators.length == 0) {
      alert("Try Again");
       expression.value = "";
       expression.focus();
       return
    }
    
    
    // operators.push(operator)
    console.log("op"+operator)
    operators.reverse()
    console.log("operators:",operators)
    for (let i = 0; i < count; i++) {
      // var newLength = positions.length - i
      num = str.slice(positions[i] + 1, str.length).trim();
      str = str.slice(0, positions[i]);
      numbers.unshift(parseInt(num))
      console.log(num)
      console.log(str)
      console.log("numbers:",numbers)
    }
    numbers.unshift(parseInt(str))
    
    console.log("numbers:",numbers)
    console.log("operators:",operators)
    console.log("positionsreverse",positions);
    // num1 = str.slice(0, position).trim();
    // num2 = str.slice(position + 1, str.length).trim();
    expression.value = "";
    expression.focus();

    solve(numbers, operators);
  }
  function solve(numbers, operators) {
    num1 = numbers[0]
    total = parseInt(num1);
    let result = ""
    for (let i = 0; i < count; i++) {
      operator = operators[i]
      num2 = numbers[i+1]
      if (operator == 0) {
        total = total + parseInt(num2);
      } else if (operator == 1) {
        total = total - parseInt(num2);
      } else if (operator == 2) {
        total = total * parseInt(num2);
      } else{
        total = total / parseInt(num2);
      }
      total += answer
    }
    result += num1
    element = num1

    for (let i = 0; i < count; i++) {
      result += signs[operators[i]] + numbers[i+1]
      element += signs[operators[i]] + numbers[i+1]
    }
    result += "=" + total
    element += "=" + total
    if (edit === 1) {
        editCalculation(result, editId)
        edit = 0
        newStrFil.splice(editId, 1, element);
        console.log("asjdfonsdf", newStrFil)
        editId = -1
    }
    else {
      newStrFil.push(element)
      console.log("apple:",newStrFil)
      tableAdding(newStrFil)
      addCalculation(result)
    }
    operators.length = 0;
    numbers.length = 0;
    console.log(";;")
    positions.length = 0;
  }
// // Get
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   fetch("http://localhost:8086/calculatorList", requestOptions)
//     .then(response => response.text())
//     .then(function(result) {
      
//     })
//     .catch(error => console.log('error', error)); 
// // Post
//   var requestOptions = {
//     method: 'POST',
//     redirect: 'follow'
//   };

//   fetch("http://localhost:8086/calculator", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
</script>
