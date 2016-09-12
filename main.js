new Vue({
  el: '#app',
  data: {
    newTodo: '',
    newNote: '',
    newToDoClass: true,
    todos: [],
    doneTodos: [],
    showDone: true,
    displayError1: false,
    backgroundColourToDos: false,
  },
  methods: {
    submitNewTodo: function() {
      var todoText = this.newTodo.trim();
      var notesText = this.newNote
      if (todoText) {
      	this.displayError1 = false;
        this.todos.push({
          text: todoText,
          note: notesText
        });
        this.newTodo = '';
        this.newNote = '';
      }else{
      	this.displayError1 = true;
      }
    },
    removeTodo: function(index) {
      var text = this.todos[index].text
      var note = this.todos[index].note
      this.doneTodos.push({
        text: text,
        note: note
      });
      this.todos.splice(index, 1)
    },
  },
})
