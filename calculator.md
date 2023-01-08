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
<button class="buttonEquals" id="equals">=</button>
<br>
<body>
  <p id="result"></p>
</body>

<script>
  var expression = document.getElementById('expression');
  var equals = document.getElementById('equals');
  var result = document.getElementById('result');
  var answer = 0;
  const operators = ["+","-","*","/"]

  equals.addEventListener("click", function(){ solve(num1, num2, operator); });

  function solve(num1, num2, operator) {
    console.log("hi")
    result.innerHTML = "test";
    if (operator == 0) {
      answer = num1 + num2
    } else if (operator == 1) {
      answer = num1 - num2
    } else if (operator == 2) {
      answer = num1 * num2
    } else {
      answer = num1 / num2
    }
    result.innerHTML = answer
  }

</script>