import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../assets/config.json'
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public httpClient: HttpClient) { }

  get = (url: string, options: any) => {
    return this.httpClient.get(`${config.BASEURL}${url}`, {
    })
  }

  post = (url: string, data: any, options: any) => {
    return this.httpClient.post(`${config.BASEURL}${url}`, data, options)
  }
}
