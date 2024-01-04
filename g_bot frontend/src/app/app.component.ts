import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuserService } from './guards/auser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title='G_bot'

constructor(private router:Router,private auser:AuserService){
  if(localStorage.getItem('user')){
    const dr = localStorage.getItem('user')!;
  const user = JSON.parse(dr);
  
   }
}
}
