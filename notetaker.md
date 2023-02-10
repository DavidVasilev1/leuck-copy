<html>
	<div class="div">
		<a href="http://davidvasilev1.github.io/leuck-copy/calc">
			<button class="button" id="class1btn" type="button"></button>
		</a>
		<input placeholder="Class One" type="text" id="class1"/>
    	<a href="https://davidvasilev1.github.io/leuck-copy/bio">
    		<button class="button" id="class2btn" type="button"></button>
    	</a>
    	<input placeholder="Class Two" type="text" id="class2"/>
    	<a href="https://davidvasilev1.github.io/leuck-copy/poe">
    		<button class="button" id="class3btn" type="button"></button>
    	</a>
    	<input placeholder="Class Three" type="text" id="class3" />
    	<a href="https://davidvasilev1.github.io/leuck-copy/csp">
    		<button class="button" id="class4btn" type="button"></button>
    	</a>
    	<input placeholder="Class Four" type="text" id="class4" />
    	<a href="https://davidvasilev1.github.io/leuck-copy/ush">
    		<button class="button" id="class5btn" type="button"></button>
    	</a>
    	<input placeholder="Class Four" type="text" id="class5"/>
    </div>
    <style>
    	.class {
    		color: #a881f7;
    		border: 2px #795db3 solid;
    		border-radius: 2px;
    		font-size: 15px;
    		width: 200px;
    		height: 45px;
    	}
    	.button {
    		margin: 15px;
    		color: #a881f7;
    		background-color: black;
    		border: 2px #795db3 solid;
    		border-radius: 5px;
    		font-size: 20px;
    		width: 200px;
    		height: 70px;
    		color: #a881f7;
    	}
      input {
    		width: 200px;
      }
    	.div {
         display: flex;
         flex-direction: column;
         align-items: center;
    	}
    </style>
    <script>
    	let inputs = [1, 2, 3, 4, 5].map((i) => `class${i}`);
    	inputs.forEach(function (id) {
         // input element
    		let el = document.getElementById(id);
         // button element
         let btn = document.getElementById(id + "btn");
         // update elements with localstorage (if its empty, use and empty string)
    		el.value = localStorage.getItem(id) || "";
         btn.innerHTML = localStorage.getItem(id) || "";
         // every time they type, update localstorage
    		el.addEventListener("change", function() {
    			localStorage.setItem(id, el.value);
            // change the button text
    			btn.innerHTML = el.value;
    		});
    	});
    </script>
</html>
