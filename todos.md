<div class="todoContainer">
	<h1>Todos</h1>
	<button id="clear">Clear todos</button>
	<form id="addTodo">
		<label for="todo">Add a todo:</label>
		<div class="horizontal">
			<input type="text" id="todo" name="todo" placeholder="New todo..." />
			<input type="submit" />
		</div>
	</form>
	<div id="todos"></div>
	<script type="module" src="{{ '/assets/js/todos.js' | relative_url }}"></script>
</div>
