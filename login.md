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

<form action="login()">
  <h1>
    Login
  </h1>
  <div class="box">
    <p class="p1">
      <input class="login" type="text" name="uid" id="uid" placeholder="Username" autocomplete="off" required>
    </p>
    <p class="p1">
      <input class="login" type="password" name="password" id="password" placeholder="Password" autocomplete="off" required>
    </p>
  </div>
    <p class="p1">
        <button onclick="login()">Login</button>
    </p>
</form>
<form action="{{site.baseurl}}/signup">
  <p class="p1">
    Don't have an account?
    <p class="p1">
      <button>Sign Up</button>
    </p>
  </p>
</form>
<script>
  function login(){
    window.location.href = '{{site.baseurl}}/data';
  }
</script>