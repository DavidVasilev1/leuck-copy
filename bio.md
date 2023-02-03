<html>
<body>
   <h2 id="header"></h2>
   <style>
      .box {
         width: 500px;
         background-color: white;
         padding: 10px;
         margin: 20px;
         border: 7.5px #cca300 solid;
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
   </body>
   <script>
      function save_data() {
      let data = document.getElementById("input2").value.split(" ");
      localStorage.setItem("a", JSON.stringify(data))
    } 
   document.getElementById("input2").value = JSON.parse(localStorage.getItem("a")).join(" ")
   function del_data(){
      let mt = [];
      localStorage.setItem("a", JSON.stringify(mt))
      document.getElementById("input2").value = ""
   }
   document.getElementById("header") = localStorage.getItem("b")
   </script>
</body>
</html>