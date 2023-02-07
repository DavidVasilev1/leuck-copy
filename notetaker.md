<html>
<div class="div">
<a href="http://davidvasilev1.github.io/leuck-copy/calc">
   <button class="button" id="calc" type="button"></button>
</a>
<input placeholder="Class One" type="text" id="class1">
<a href="https://davidvasilev1.github.io/leuck-copy/bio">
   <button class="button" id="bio" type="button"></button>
</a>
<input placeholder="Class Two" type="text" class="class2">
<a href="https://davidvasilev1.github.io/leuck-copy/poe">
   <button class="button" id="poe" type="button"></button>
</a>
<input placeholder="Class Three" type="text" class="class3">
<a href="https://davidvasilev1.github.io/leuck-copy/csp">
   <button class="button" id="csp" type="button"></button>
</a>
<input placeholder="Class Four" type="text" class="class4">
<a href="https://davidvasilev1.github.io/leuck-copy/ush">
   <button class="button" id="ush" type="button"></button>
</a>
<input placeholder="Class Four" type="text" class="class5">
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
let data = document.getElementByClassName("class").map(e => e.value.split(" "));
localStorage.setItem("b", JSON.stringify(data))
document.getElementByClassName("class1").value = document.getElementById("calc").innerHTML
</script>
</html>