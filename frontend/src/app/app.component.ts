import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title:string = 'ToDoApp';
    nameAlert:string = 'This field is required';
    todoForm:FormGroup;
    name:string = '';
    todo:Todo;
    todos:Todo[];

    constructor(private fb:FormBuilder, private httpClient:HttpClient) {
        this.todoForm = fb.group({
            'name': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(200)])]
        });
    }

    ngOnInit() {
        this.getAllToDoItems();
    }

    validatePost(post) {
        this.name = post.name;
        this.addTodo();
        this.todoForm.reset();
    }

    addTodo() {
        const newTodo = {
            name: this.name,
            isDone: false
        }
        this.httpClient.post('/todo', newTodo)
            .subscribe(()=> {
                this.getAllToDoItems();
            })
    }

    getAllToDoItems() {
        this.httpClient.get<Todo[]>('/todo')
            .subscribe((todos:any[])=> {
                this.todos = todos;
            })
    }

    removeTodo(todo:Todo) {
        const url = '/todo/' + todo.id;
        this.httpClient.delete(url)
            .subscribe(()=> {
                this.getAllToDoItems();
            })
    }

    updateTodo(todo:Todo) {
        const modifiedTodo = {
            id: todo.id,
            isDone: todo.isDone
        }
        this.httpClient.put('/todo', modifiedTodo)
            .subscribe(()=> {
                this.getAllToDoItems();
            })
    }

}

export interface Todo {
    id: number;
    name: string;
    isDone: boolean;
}
