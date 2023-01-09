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
  background-color: #ffcc00;
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
.button:hover {background-color: #ffeb9b;}

</style>
</head>
<body>
  <p>Type out an expression with a number, followed by a sign (+, -, *, /), and then the second number. Ex: 2+9 (only 2 numbers)</p>
  <pre id="result"></pre>
  <input id='expression' class = 'input' type='text'>
  <button class="button" id="equals" on>=</button>
  <button class="button" id="clear" on>Clear</button>
</body>




<script>
  const CALC_KEY = "CALCULATOR";
  var expression = document.getElementById('expression');
  var equals = document.getElementById('equals');
  var clear = document.getElementById('clear');
  var result = document.getElementById('result');
  var answer = 0;
  const operators = ["\\+","\\-","\\*","\\/"]
  const signs = ["+","-","*","/"]
  var num1 = 0;
  var num2 = 0;
  var operator = -1;
  var position = 0;
  var initial = window.localStorage.getItem(CALC_KEY);
  result.innerHTML = initial

  expression.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equals").click();
  }
  });

  equals.addEventListener("click", function(){ separate();});
  clear.addEventListener("click", function(){ clearEntry();});

  function clearEntry() {
    console.log("test")
    window.localStorage.clear();
    expression.value = "";
    result.innerHTML = "";
    expression.focus();
  }
  
  function separate() {
    var str = expression.value;
    console.log(str);
    var array = Array.from(str)
    console.log(array);
      for (let i = 0; i < operators.length; i++) {
       position = str.search(operators[i])
       console.log(position);
       if (position > 0){
        break
       }
      }
    if (array[position] == "+") {
      operator = 0;
    } else if (array[position] == "-") {
      operator = 1;
    } else if (array[position] == "*") {
      operator = 2;
    } else if (array[position] == "/") {
      operator = 3;
    } else {
      alert("Try Again");
      expression.value = "";
      expression.focus();
      return
    }
    console.log("op"+operator)

    num1 = str.slice(0, position).trim();
    num2 = str.slice(position + 1, str.length).trim();
    expression.value = "";
    expression.focus();
    solve(num1, num2, operator);
  }

  function solve(num1, num2, operator) {
    if (operator == 0) {
      answer = parseInt(num1) + parseInt(num2);
    } else if (operator == 1) {
      answer = parseInt(num1) - parseInt(num2);
    } else if (operator == 2) {
      answer = parseInt(num1) * parseInt(num2);
    } else{
      answer = parseInt(num1) / parseInt(num2);
    }
    result.textContent += num1 + signs[operator] + num2 + "=" + answer + "\r\n"
    window.localStorage.setItem(CALC_KEY, result.innerHTML);

  }

</script>

### Graphing Calculator