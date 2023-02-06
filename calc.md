<html>
<body>
   <h2>AP Calculus Note-Taker</h2>
   <style>
      .box {
         width: 500px;
         background-color: white;
         padding: 10px;
         margin: 20px;
         border: 7.5px #795db3 solid;
         border-radius: 20px;
         float: left;
         color: black;
      }
      .input{
         width: 500px;
         resize: none;
         height: 750px;
         border-radius: 15px;
         padding: 0.5rem;
      }
      .button{
         width: 100px;
         height: 50px;
         margin-top: 20px;
      }

   </style>
   <body>
      <div type="text" class="box" id="box">
         <textarea class="input" placeholder="Take some notes!" id="input2"></textarea>
      <button onclick="del_data()" id="delete" class="button">Delete All</button>
      <button onclick="save_data()" id="save" class="button">Save</button>
      </div>
      <p style="text-align:left"><a href="{{site.baseurl}}/calculator"><img src="https://icones.pro/wp-content/uploads/2021/06/icone-de-la-calculatrice-violet.png" style="width:50px;height:50px;"></a></p>
   </body>
   <script>
      function save_data() {
      let data = document.getElementById("input2").value.split(" ");
      localStorage.setItem("x", JSON.stringify(data))
    } 
   document.getElementById("input2").value = JSON.parse(localStorage.getItem("x")).join(" ")
   function del_data(){
      let mt = [];
      localStorage.setItem("x", JSON.stringify(mt))
      document.getElementById("input2").value = ""
   }
   </script>
</body>
</html>
