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
  var expr;
  var calcd;
  var calcslocal
  var calcslocalex;
  var calcslocalout;

  const isLocalhost = Boolean(
	  window.location.hostname === "localhost" ||
		window.location.hostname === "[::1]" ||
	  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );
  const api = isLocalhost ? "http://localhost:8199" : "https://saakd.nighthawkcodingsociety.com";

  let expressions, outputs
  const extracts = ["expression","output"]
  let combine = []

  getCalculations()

  expression.focus();
  expression.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equals").click();
  }
  });
  equals.addEventListener("click", function(){ countString(); });
  clear.addEventListener("click", function(){ clearEntry();});

  function getCalculations() {
    combine = []
    fetch(api + "/calculatorList")
    .then(response => response.json())
    .then(data => {
      console.log("asdfd",data)
      expressions = data.map(obj => obj[extracts[0]])
      outputs = data.map(obj => obj[extracts[1]])
      console.log("expr",expressions)
      console.log("outs",outputs)
      for (var i = 0; i < expressions.length; i++) {
        combine.push(expressions[i]+"="+outputs[i])
      }
      
    console.log("?",combine)
    tableAdding(combine)
    })
    
  }

  function tableAdding(calculations){

    table = document.getElementById('table');
    table.innerHTML = ""
    table.className = "tableResult"

    for (var i = 0; i < calculations.length; i++) {
        console.log("his")
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
  function split(str){
    var position = str.search("=")
    expr = str.substring(0, position)
    calcd = str.substring(position+1, str.length)
        
    console.log(expr, calcd)
  }
  
  function addCalculation(calcStr) {
    split(calcStr)

    let data = { expression: expr , output: calcd };
    fetch(api + '/calculator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => { response.json()
      
    getCalculations()})
      .catch((error) => {
        console.error('Error:', error);
      });

    
    
  }

  function editCalculation(calcStr, ids) {
    split(calcStr)
    let num = ids+1
    let data = { id: num, expression: expr , output: calcd };
    fetch(api + '/calculator', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => { response.json()
      
    getCalculations()})
      .catch((error) => {
        console.error('Error:', error);
      });
      
  }


  function editEntry(entry){
    console.log("splendid:", entry)
    var preexpression = combine[entry];
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
    expression.value = "";
    combine = []

    fetch(api + '/calculatorList', {
      method: 'DELETE',
    })
      .then((response) => { response.json()
      
    getCalculations()
    expression.focus()})
  }

  function countString() {
    console.log("hi")
    str = ""
    str = expression.value;
    console.log("stringgg", str)
    array = Array.from(str)
    console.log("asr",array)
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
    console.log("???")
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
    }
    console.log(operators, "ops")
    console.log("asdfsdjfdpodoooooooo", str.toLowerCase())
    if (str.toLowerCase() == "kaiden is a csp genius" || (str.toLowerCase().includes("kaiden") && str.toLowerCase().includes("genius") && !str.toLowerCase().includes("not") && !str.toLowerCase().includes("isn't") && !str.toLowerCase().includes("isnt"))) {
      addCalculation(str + " = true")
      expression.value = "";
      element = str + " = true"
      expression.focus();
      return
    }
    
    else if (operators.length == 0) {
      alert("Try Again");
       expression.value = "";
       expression.focus();
       operators = []
       numbers = []
       positions = []
       console.log("sdfchunker")
       return   
    }
    else if (str.toLowerCase().split("").some(l => l.match(/[a-z]/i))) {
      alert("Try Again");
       expression.value = "";
       expression.focus();
       operators = []
       numbers = []
       positions = []
       console.log("sdfckalanihunker")
       return   
    } 
    // else if (!str.toLowerCase().split("").some(l => myRegex.test(l))){
    //   alert("Try Again");
    //    expression.value = "";
    //    expression.focus();
    //    console.log("pennker")
    //    return 
    // }
    console.log("nonon")
    console.log("op"+operator)
    operators.reverse()
    console.log("operators:",operators)
    for (let i = 0; i < count; i++) {
      num = str.slice(positions[i] + 1, str.length).trim();
      console.log("jhgfdsdfgh",num)
      if(isNaN(parseInt(num))){
        console.log(parseInt(num), "ding")
        alert("Try Again");
       expression.value = "";
       expression.focus();
       console.log("pennker")
       operators = []
       numbers = []
       positions = []
       return 
      }
      str = str.slice(0, positions[i]);
      numbers.unshift(parseInt(num))
      console.log(num)
      console.log(str)
      console.log("numbers:",numbers)
    }
    
    console.log("sdfsdf", parseInt(str))
    if (isNaN(parseInt(str))){
      alert("Try Again");
       expression.value = "";
       expression.focus();
       console.log("pennsdfker")
       console.log(str)
       operators = []
       numbers = []
       positions = []
       return 
    }
    numbers.unshift(parseInt(str))

    
    
    console.log("numbers:",numbers)
    console.log("operators:",operators)
    console.log("positionsreverse",positions);
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
        combine.splice(editId, 1, element);
        editId = -1
    }
    else {
      combine.push(element)
      
      addCalculation(result)
      
    }
    operators.length = 0;
    numbers.length = 0;
    console.log(";;")
    positions.length = 0;
  }
</script>
