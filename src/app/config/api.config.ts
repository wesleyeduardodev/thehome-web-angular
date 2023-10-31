import {HttpHeaders} from "@angular/common/http";

const URL_PROD = 'https://thehome-3a98079ba9ed.herokuapp.com/api';
const URL_LOCAL = 'http://localhost:8080/api';

export const API_CONFIG = {
  baseUrl: URL_PROD
}

export const AUTHORIZATION_CONFIG = {
  headerOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa("admin" + ':' + "admin")
    })
  }
}
