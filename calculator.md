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
  <p>Type out an expression with a number, followed by a sign (+, -, *, /), and then the second number. Ex: 2+9 (PEMDAS does not work)</p>
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
  var num = 0;
  var operator = -1;
  var position = 0;
  var initial = window.localStorage.getItem(CALC_KEY);
  var str = "";
  var array = [];
  var count = 0;
  var numbers = [];
  var operatorss = [];
  var positions = [];
  var total = 0;
  result.innerHTML = initial


  expression.focus();
  expression.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equals").click();
  }
  });

  equals.addEventListener("click", function(){ countString(); }); //separate();
  clear.addEventListener("click", function(){ clearEntry();});

  function clearEntry() {
    console.log("test")
    window.localStorage.clear();
    expression.value = "";
    result.innerHTML = "";
    expression.focus();
  }
  // program to check the number of occurrence of a character

  function countString() {
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
        operatorss.push(operator)
      } else if (sign == "-") {
        console.log("minus")
        operator = 1;
        operatorss.push(operator)
      } else if (sign == "*") {
        operator = 2;
        operatorss.push(operator)
      } else if (sign == "/") {
        operator = 3;
        operatorss.push(operator)
      } 
    // else {
    //   alert("Try Again");
    //   expression.value = "";
    //   expression.focus();
    //   return
    // }
    }
    if (operatorss.length == 0) {
      alert("Try Again");
       expression.value = "";
       expression.focus();
       return
    }
    
    
    // operatorss.push(operator)
    console.log("op"+operator)
    operatorss.reverse()
    console.log("operators:",operatorss)
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
    console.log("operators:",operatorss)
    console.log("positionsreverse",positions);
    // num1 = str.slice(0, position).trim();
    // num2 = str.slice(position + 1, str.length).trim();
    expression.value = "";
    expression.focus();
    solve(numbers, operatorss);
  }

  function solve(numbers, operatorss) {
    num1 = numbers[0]
    total = parseInt(num1);
    for (let i = 0; i < count; i++) {
      operator = operatorss[i]
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
    result.textContent += num1
    for (let i = 0; i < count; i++) {
      result.textContent += signs[operatorss[i]] + numbers[i+1]
    }
    // result.textContent += num1 + signs[operator] + num2 + "=" + answer + "\r\n"
    result.textContent += "=" + total + "\r\n"
    window.localStorage.setItem(CALC_KEY, result.innerHTML);
    operatorss.length = 0;
    numbers.length = 0;
    console.log(";;")
    positions.length = 0;
  }

</script>

### Graphing Calculator