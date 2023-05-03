import { Injectable } from '@angular/core';
import { TodoTask } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = "TodoTask"

  constructor(private http: HttpClient) { }

  public getTasks() : Observable<TodoTask[]> {
    
    let apiUrl = environment.apiUrl;
    return this.http.get<TodoTask[]>(`${apiUrl}/${this.url}`)
  }

  public updateTask(task: TodoTask){
    let apiUrl = environment.apiUrl;
    return this.http.put<TodoTask[]>(`${apiUrl}/${this.url}`, task);
  }

  public createTask(task: TodoTask){
    let apiUrl = environment.apiUrl;
    return this.http.post<TodoTask[]>(`${apiUrl}/${this.url}`, task);
  }

  
  public deleteTask(task: TodoTask){
    let apiUrl = environment.apiUrl;
    return this.http.delete<TodoTask[]>(`${apiUrl}/${this.url}/${task.id}`);
  }
}
 