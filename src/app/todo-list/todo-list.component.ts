import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  items = ['todo1', 'todo2', 'todo3']
  ngOnInit(): void {
  }

  addTodo(todo:HTMLInputElement): void {
    this.items.push(todo.value)
    todo.value = ''
  }

  removeTodo(index:number): void {
    this.items.splice(index, 1)
  }

}
