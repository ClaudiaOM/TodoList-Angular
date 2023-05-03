import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoTask } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() task? : TodoTask;
  @Output() updatedTasks = new EventEmitter<TodoTask[]>();

  constructor(private taskService: TaskService) {}

  updateTask(task : TodoTask){
    this.taskService.updateTask(task).subscribe((tasks) => this.updatedTasks.emit(tasks));
  }
  
  createTask(task : TodoTask){    
    this.taskService.createTask(task).subscribe((tasks) => this.updatedTasks.emit(tasks));
  }
  
  deleteTask(task : TodoTask){
    this.taskService.deleteTask (task).subscribe((tasks) => this.updatedTasks.emit(tasks));  
  }
}

