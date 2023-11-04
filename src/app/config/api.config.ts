import {HttpHeaders} from "@angular/common/http";

const URL_PROD = 'https://thehome-3a98079ba9ed.herokuapp.com/api';
const URL_LOCAL = 'http://localhost:8080/api';

//TODO Criar esquema de configuração automática de ambiente de Des e Prod usando o envviroment.ts
export const API_CONFIG = {
  baseUrl: URL_PROD
}

//TODO Implementar futuramente autenticação e autorização com JWT
export const AUTHORIZATION_CONFIG = {
  headerOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa("prod" + ':' + "81230868")
    })
  }
}
