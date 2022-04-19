import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {

  todos!: Todo[];
  inputTodo: string="";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      // {
      //   task: 'buy cloths',
      //   completed: true,
      // },
      // {
      //   task: 'do laundary',
      //   completed: false,
      // }
    ]
  }
  toggleTask(id: number) {
    this.todos.map((value, i) => {
      if (i == id) value.completed = !value.completed;
      return value;
    }
    )
  }
  deleteTask(id: number) {
    this.todos = this.todos.filter((value, i) => i !== id);
  }
  // addTask(value:any) {
  //   this.todos.push(value)
  // }
  addTask(){
    this.todos.push({
      task:this.inputTodo,
      completed:false
    });
    this.inputTodo="";
  }


}




