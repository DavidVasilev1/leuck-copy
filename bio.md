<html>
<body>
   <h2 id="header">Period 2</h2>
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
         <textarea class="input" placeholder="Take some notes!" id="input2" onchange="bad_words()" ></textarea>
      <button onclick="del_data()" id="delete" class="button">Delete All</button>
      <button onclick="save_data()" id="save" class="button">Save</button>
      </div>
      <button id="count" class="button"></button>
   </body>
   <script>
const isLocalhost = Boolean(
	  window.location.hostname === "localhost" ||
		window.location.hostname === "[::1]" ||
	  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );
  const api = isLocalhost ? "http://localhost:8199" : "https://saakd.nighthawkcodingsociety.com"
fetch(api + '/note?id=1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
   function save_data() {
      fetch(api + '/note', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
            id: 1,
            text: document.getElementById("input2").value,
            subject: 'Period 2'
  })
})
         .then(response => response.json())
         .then(data => console.log(data))
         .catch(error => console.error(error));
}
   function del_data(){
      fetch(api+'/note', {
         method: 'DELETE',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
            id: 1,
            text: document.getElementById("input2"),
            subject: 'Period 2'
  })
})
         .then(response => response.json())
         .then(data => console.log(data))
         .catch(error => console.error(error));
   }
   function bad_words(){
      let user_input_el = document.getElementById("input2")
      let user_input = user_input_el.value
      if (user_input.includes("fuck") || user_input.includes("shit") || user_input.includes("bitch") || user_input.includes("dick")  || user_input.includes("pp") || user_input.includes("hell")){
         alert("That is a bad word, the entire text will be deleted.")
         user_input_el.value = ""
      }
   }
   let el = localStorage.getItem("class2")
   let header = document.getElementById("header")
   header.innerHTML = el;
   document.getElementById("input2").addEventListener("change", count);
   let word = document.getElementById("input2").value.split(" ");
   let word_count = word.length;
   let current = 0 
   function countWords() {
   const textArea = document.getElementById("input2");
   const text = textArea.value.trim();
   let wordCount = 0;
   for (let i = 0; i < text.length; i++) {
     if (text.charAt(i) !== " " && (i === text.length - 1 || text.charAt(i + 1) === " ")) {
       wordCount++;
     }
   }
   const countBox = document.getElementById("count");
   countBox.textContent = wordCount;
   }
   </script>
</body>
</html>