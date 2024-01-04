import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuserService {

  constructor() { }
  checkLogin(){
   if(localStorage.getItem('user')){
     const dt = localStorage.getItem('user')!;
     const user = JSON.parse(dt);
     if(user.email){
      return true;
     }
   }
   return false;
  }
}
