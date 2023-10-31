import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_CONFIG, AUTHORIZATION_CONFIG} from '../config/api.config';
import {Client} from '../models/client';

const PATH = '/v1/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${API_CONFIG.baseUrl}${PATH}`, AUTHORIZATION_CONFIG.headerOptions);
  }

  findById(id: any): Observable<Client> {
    return this.http.get<Client>(`${API_CONFIG.baseUrl}${PATH}/${id}`, AUTHORIZATION_CONFIG.headerOptions);
  }

  create(cliente: Client): Observable<Client> {
    return this.http.post<Client>(`${API_CONFIG.baseUrl}${PATH}`, cliente, AUTHORIZATION_CONFIG.headerOptions);
  }

  update(cliente: Client): Observable<Client> {
    return this.http.put<Client>(`${API_CONFIG.baseUrl}${PATH}/${cliente.id}`, cliente, AUTHORIZATION_CONFIG.headerOptions);
  }

  delete(id: any): Observable<Client> {
    return this.http.delete<Client>(`${API_CONFIG.baseUrl}${PATH}/${id}`, AUTHORIZATION_CONFIG.headerOptions);
  }
}
