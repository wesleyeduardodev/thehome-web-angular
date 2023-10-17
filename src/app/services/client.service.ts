import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../config/api.config';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${API_CONFIG.baseUrl}/v1/clients`);
  }

  findById(id: any): Observable<Client> {
    return this.http.get<Client>(`${API_CONFIG.baseUrl}/v1/clients/${id}`);
  }

  create(cliente: Client): Observable<Client> {
    return this.http.post<Client>(`${API_CONFIG.baseUrl}/v1/clients`, cliente);
  }

  update(cliente: Client): Observable<Client> {
    return this.http.put<Client>(`${API_CONFIG.baseUrl}/v1/clients/${cliente.id}`, cliente);
  }
}
