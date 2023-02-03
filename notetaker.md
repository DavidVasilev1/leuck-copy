<html>
<div class="div">
<a href="http://davidvasilev1.github.io/leuck-copy/calc">
   <button class="button" id="calc" type="button">
      <input placeholder="Class One" type="text" class="class" >
   </button>
</a>
<a href="https://davidvasilev1.github.io/leuck-copy/bio">
   <button class="button" id="bio" type="button">
      <input placeholder="Class Two" type="text" class="class" >
   </button>
</a>
<a href="https://davidvasilev1.github.io/leuck-copy/poe">
   <button class="button" id="poe" type="button">
      <input placeholder="Class Three" type="text" class="class" >
   </button>
</a>
<a href="https://davidvasilev1.github.io/leuck-copy/csp">
   <button class="button" id="csp" type="button">
      <input placeholder="Class Four" type="text" class="class" >
   </button>
</a>
<a href="https://davidvasilev1.github.io/leuck-copy/ush">
   <button class="button" id="ush" type="button">
      <input placeholder="Class Five" type="text" class="class" >
   </button>
</a>
</div>
<style>
.button{
   margin: 15px;
   color: #cca300;
   background-color: black;
   border: 2px #cca300 solid;
   border-radius: 5px;
   font-size:20px;
   width:200px;
   height:70px;
}
.div{
   text-align: center;
}
</style>
<script>
let data = document.getElementByClassName("class").value.split(" ");
localStorage.setItem("b", JSON.stringify(data))
document.getElementById("input2").value = JSON.parse(localStorage.getItem("b")).join(" ")
</script>
</html>