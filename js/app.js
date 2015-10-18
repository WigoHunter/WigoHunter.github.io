var app = angular.module('todoApp', []);

function TodoCtrl(){
	this.todos = [{text:'Learn Angular JS, starting from TODAY', deadline: new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate(), done: false, toClear: true}, {text: 'Smile everyday!', deadline: new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate(), done: false, toClear: true}];
	this.newText = '';
	this.newDeadline = '';
	this.filters = [{label: 'All', showTodo: function(todo){return true}}, {label: 'In Progress', showTodo: function(todo){return !todo.done}}, {label: 'Done', showTodo: function(todo){return todo.done}}];
	this.selectedFilter = this.filters[0];
}

app.controller('TodoCtrl', TodoCtrl);

TodoCtrl.prototype.addTodo = function(){
	this.todos.push({text: this.newText, deadline: this.newDeadline, done:false, toClear: true});
}

TodoCtrl.prototype.clearComplete = function(){
	this.todos = this.todos.filter(function(todo){
		return !todo.done;
	});
}

TodoCtrl.prototype.clearDefault = function(){
	this.todos = this.todos.filter(function(todo){
		return !todo.toClear;
	})
}

TodoCtrl.prototype.allGone = function(){
	var numOfTodos = this.todos.length;

	if(numOfTodos === 0) return true;
	else return false;
}


TodoCtrl.prototype.isClearDisabled = function(){
	var completeTodos = this.todos.filter(function(todo){
		return todo.done
	});

	if(completeTodos.length == 0) return true;
	else return false;
}


