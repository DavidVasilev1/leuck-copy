## Calculator
### Arithmetic Calculator

<head>
<style>
.button {
  background-color: #ffcc00;
  border: none;
  color: #1E1E1E;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
}
.buttonEquals {
  background-color: #ffcc00;
  border: 2px solid white;
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
.buttonEquals:hover {background-color: #ffeb9b;}

</style>
</head>
<input id='expression' type='text'>
<br>
<button class="buttonEquals" id="equals" on>=</button>
<br>
<body>
  <pre id="result"></pre>
</body>

<script>
  var expression = document.getElementById('expression');
  var equals = document.getElementById('equals');
  var result = document.getElementById('result');
  var answer = 0;
  const operators = ["\\+","\\-","\\*","\\/"]
  const signs = ["+","-","*","/"]
  var num1 = 0;
  var num2 = 0;
  var operator = -1;
  var position = 0;
  
  equals.addEventListener("click", function(){ separate();});
  
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
      return
    }
    console.log("op"+operator)

    num1 = str.slice(0, position).trim();
    num2 = str.slice(position + 1, str.length).trim();
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
  }

</script>