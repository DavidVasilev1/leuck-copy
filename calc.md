<html>
   <head>
   <h2>AP Calculus Note-Taker</h2>
      <style>
         .box{
            width: 500px;
            height: 800px;
            background-color: white;
            padding: 20px;
            margin: 20px;
            border: 10px solid yellow;
            border-radius: 7.5%;
            float: left;
            color: black;
}
      </style>
   </head>
   <body>
      <div class="box">  </div>
      <div class="delbutton"> </div>
   </body>
   <script>
      let ui = prompt("Take some notes!");
      localStorage.setItem("savedInput", ui);
      alert("Your input has been saved to your device!");
   </script>
</html>