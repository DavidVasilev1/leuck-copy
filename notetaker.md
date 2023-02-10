<html>
<div class="div">
<a href="http://davidvasilev1.github.io/leuck-copy/calc">
   <button class="button" id="calc" type="button"></button>
</a>
<div>
   <input placeholder="Class One" type="text" id="class1">
<a href="https://davidvasilev1.github.io/leuck-copy/bio">
   <button class="button" id="class1btn" type="button"></button>
</a>
<input placeholder="Class Two" type="text" id="class2">
<a href="https://davidvasilev1.github.io/leuck-copy/poe">
   <button class="button" id="class2btn" type="button"></button>
</a>
<input placeholder="Class Three" type="text" id="class3">
<a href="https://davidvasilev1.github.io/leuck-copy/csp">
   <button class="button" id="class3btn" type="button"></button>
</a>
<input placeholder="Class Four" type="text" id="class4">
<a href="https://davidvasilev1.github.io/leuck-copy/ush">
   <button class="button" id="class4btn" type="button"></button>
</a>
<input placeholder="Class Four" type="text" id="class5">
<button class="button2" type="class5btn">Save</button>
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
   let inputs = [1, 2, 3, 4, 5].map(i => `class${i}`)
   inputs.forEach(id => {
      let element = document.getElementById(id)
      element.value = localStorage.getItem(id) || ""
      element.addEventListener("onchange", () => {
         localStorage.setItem(id, element.value)
         document.getElementById(id + "btn").innerHTML = element.value
      })
   })
</script>
</html>