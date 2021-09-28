import {action, makeObservable, observable} from 'mobx';

class Todo {
  id: number;
  text: string;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}

class TodoList {
  todos: Todo[] = [
    {
      id: 1,
      text: '1',
    },
    {
      id: 2,
      text: '2',
    },
  ];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}

const TodoStore = new TodoList();

export default TodoStore;
