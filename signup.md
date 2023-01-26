<style>
  h1 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  input.login {
    margin-top: 10px;
    position: relative;
    width: 50%;
    font-size: 20px;
    background-color: #282827;
    color: #b89cf0;
    border: none;
    border-radius: 5px;
    border-bottom: 2px solid #A881F7;
    transition-duration: 0.3s;
    padding: 5px;
  }
  input[type=date]:invalid::-webkit-datetime-edit {
    color: #b89cf0;
  }
  input.login:focus {
    background-color: #4d4c4b;
    outline: none;
  }
  button {
    outline: none;
    font-size: 20px;
    position: center;
    margin: 0px 10px 10px 0px;
    padding: 1% 10% 1% 10%;
    border-radius: 8px;
    background-color: #A881F7;
    color: #1E1E1E;
    border: none;
    transition-duration: 0.3s;
  }
  button:hover {
    color: #242424;
    background-color: #E2D4FC;
  }
  .box, button {
    text-align: center;
  }
  .p1 {
    padding-top: 0px;
    text-align: center;
    font-size: 20px
  }
</style>

<form action="create_User()">
  <h1>
    Sign Up
  </h1>
  <div class="box">
    <p class="p1">
      <input class="login" type="text" name="name" id="name" placeholder="Name" autocomplete="off" required>
    </p>
    <p class="p1">
      <input class="login" type="text" name="uid" id="uid" placeholder="Username" autocomplete="off" required>
    </p>
    <p class="p1">
      <input class="login" type="password" name="password" id="password" placeholder="Password" autocomplete="off" required>
    </p>
    <p class="p1">
      <input class="login" type="password" name="passwordV" id="passwordV" placeholder="Verify Password" autocomplete="off" required>
    </p>
    <p class="p1">
      <input class="login" type="date" name="dob" id="dob" placeholder="Birthday" autocomplete="off" required>
    </p>
  </div>
    <p class="p1">
        <button onclick="create_User()">Create</button>
    </p>
</form>
<form action="{{site.baseurl}}/login">
  <p class="p1">
    Already have an account?
    <p class="p1">
      <button>Login</button>
    </p>
  </p>
</form>
<script>
  function create_User(){
    // extract data from inputs
    const name = document.getElementById("name").value;
    const uid = document.getElementById("uid").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
        },
    };
    console.log(name)
    console.log(uid)
    console.log(password)
    console.log(dob)
    //url for Create API
    const url='/crud_api/create/' + name + '/' + uid+ '/' + password + '/' + dob; 
    //Async fetch API call to the database to create a new user
    fetch(url, requestOptions).then(response => {
        // prepare HTML search result container for new output
        const resultContainer = document.getElementById("result");
        // trap error response from Web API
        if (response.status !== 200) {
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
            // Email must be unique, no duplicates allowed
            document.getElementById("pswError").innerHTML =
                "Email already exists in the table";
            return;
        }
        // response contains valid result
        response.json().then(data => {
            console.log(data);
            //add a table row for the new/created userId
            const tr = document.createElement("tr");
            for (let key in data) {
                if (key !== 'query') {
                    //create a DOM element for the data(cells) in table rows
                    const td = document.createElement("td");
                    console.log(data[key]);
                    //truncate the displayed password to length 20
                    if (key === 'password'){
                        td.innerHTML = data[key].substring(0,17)+"...";
                    }
                    else{
                        td.innerHTML = data[key];}
                    //add the DOM data element to the row
                    tr.appendChild(td);
                }
            }
            //append the DOM row to the table
            table.appendChild(tr);
        })
    })
}
</script>