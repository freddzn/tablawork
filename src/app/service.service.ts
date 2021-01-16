import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  
  providedIn: 'root'
})
export class ServiceService {

  constructor(private Http:HttpClient) {
    
   

   }

   getInformation(){
    return this.Http.get('https://jsonplaceholder.typicode.com/todos')

   }
}
