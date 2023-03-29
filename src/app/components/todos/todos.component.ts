import { Component } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
 todos:Todo[] |any; 
 inputTodo:string=""
 constructor(){}
 ngOnInit():void{
  this.todos=[
    {
      content:'First Todo',
      completed:false
    },{
      content:'Second Todo',
      completed:true
    }
  ]
 }
 toggleDone(id:number){
  this.todos.map((v:any,i:number)=>{
    if(i==id)v.completed=!v.completed;
    return v;
  })
 }
 deleteTodo(id:number){
  this.todos= this.todos.filter((v:any,i:number)=>i!=id);
 }
 addTodo(){
  this.todos.push({
    content:this.inputTodo,
    completed:false
  });
  this.inputTodo=""
 }
}
