import { Component } from '@angular/core';
import { TodoTask } from './models/task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TodoList.UI';
  tasks : TodoTask[] = [];
  taskToEdit? : TodoTask;

  constructor(private taskService: TaskService) {}

  ngOnInit() : void{
    this.taskService.getTasks()
    .subscribe(
      (result : TodoTask[]) => {
        this.tasks = result 
      }
    );
    console.log(this.tasks);
  }

  editTask(task : TodoTask){
    this.taskToEdit = task;
  }

  createTask(){
    this.taskToEdit = new TodoTask();
  }

  updateTaskList(tasks : TodoTask[]){
    this.tasks = tasks;
  }
}

