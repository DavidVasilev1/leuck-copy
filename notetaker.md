<html>
<div class="div">
<a href="http://davidvasilev1.github.io/leuck-copy/calc">
   <button class="button" id="calc" type="button"></button>
</a>
<input placeholder="Class One" type="text" id="class1">
<a href="https://davidvasilev1.github.io/leuck-copy/bio">
   <button class="button" id="bio" type="button"></button>
</a>
<input placeholder="Class Two" type="text" id="class2">
<a href="https://davidvasilev1.github.io/leuck-copy/poe">
   <button class="button" id="poe" type="button"></button>
</a>
<input placeholder="Class Three" type="text" id="class3">
<a href="https://davidvasilev1.github.io/leuck-copy/csp">
   <button class="button" id="csp" type="button"></button>
</a>
<input placeholder="Class Four" type="text" id="class4">
<a href="https://davidvasilev1.github.io/leuck-copy/ush">
   <button class="button" id="ush" type="button"></button>
</a>
<input placeholder="Class Four" type="text" id="class5">
</div>
<style>
.class{
   color: #A881F7;
   border: 2px #795db3 solid;
   border-radius: 2px;
   font-size: 15px;
   width: 200px;
   height:45px;
}
.button{
   margin: 15px;
   color: #A881F7;
   background-color: black;
   border: 2px #795db3 solid;
   border-radius: 5px;
   font-size:20px;
   width:200px;
   height:70px;
   color:#A881F7;
}
.div{
   text-align: center;
}
</style>
<script>
let data = document.getElementById("class1").value.split(" ");
localStorage.setItem("h", JSON.stringify(data))
document.getElementById("class1").value = document.getElementById("calc").innerHTML
let data2 = document.getElementById("class2").value.split(" ");
localStorage.setItem("i", JSON.stringify(data2))
document.getElementById("class2").value = document.getElementById("bio").innerHTML
let data3 = document.getElementById("class3").value.split(" ");
localStorage.setItem("j", JSON.stringify(data3))
document.getElementById("class3").value = document.getElementById("poe").innerHTML
let data4 = document.getElementById("class4").value.split(" ");
localStorage.setItem("k", JSON.stringify(data4))
document.getElementById("class4").value = document.getElementById("csp").innerHTML
let data5 = document.getElementById("class5").value.split(" ");
localStorage.setItem("k", JSON.stringify(data5))
document.getElementById("class5").value = document.getElementById("ush").innerHTML
</script>
</html>