import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../config/api.config';
import {Task} from "../models/task";

const PATH = '/v1/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API_CONFIG.baseUrl}${PATH}`);
  }

  findById(id: any): Observable<Task> {
    return this.http.get<Task>(`${API_CONFIG.baseUrl}${PATH}/${id}`);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(`${API_CONFIG.baseUrl}${PATH}`, task);
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(`${API_CONFIG.baseUrl}${PATH}/${task.id}`, task);
  }

  delete(id: any): Observable<Task> {
    return this.http.delete<Task>(`${API_CONFIG.baseUrl}${PATH}/${id}`);
  }
}
