import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuserService } from 'src/app/guards/auser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  Muser:any = '';
  curentckd:any;
  chabtntxtx:boolean=false;
  constructor(private social: SocialAuthService, private router:Router, private renderer: Renderer2,private el: ElementRef){
   if(localStorage.getItem('user')){
    const data = JSON.parse(localStorage.getItem('user')!);
    this.Muser = data;
    this.previmg = data.Photourl || '';
    this.mail = data.email || "";
    this.chabtntxtx =true;
    this.name = data.name;
   }
  }
  @ViewChild('googleIframe') googleIframe: ElementRef | undefined;
  Mpasscode:any;
  async ngOnInit() {
    this.social.authState.subscribe(async (usersg:any)=>{
      if(usersg){
        this.curentckd = await usersg;
        this.pview = true;
        this.previmg = usersg.photoUrl
        this.showpp = await true;
        this.name = usersg.name
      
      }else{this.showpp = false;};
      this.user.name = usersg?.name;
      this.user.Photourl = usersg.photoUrl;
      this.user.email = usersg.email;
      this.name = usersg.name;
      console.log(this.user);
      const data = JSON.stringify(this.user);
      if(data){localStorage.setItem('user', data);
      }
    });
    await this.cordinate();
  }
  pview:boolean = false;
  signInWithGoogle(): void {
    this.social.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut() {
    this.Muser ='';
    this.router.navigate(['login']);
    this.social.signOut();
    localStorage.clear();
    localStorage.removeItem('chat');
    localStorage.removeItem('theme');
    localStorage.removeItem('user');
    this.mail = '';
    this.pass = '';
    this.chabtntxtx =false;
    window.location.reload();
  }
  sdbl:boolean =false;
  email = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]);
  Password = new FormControl('', [Validators.required,Validators.pattern('^[A-Za-z0-9\d@$!%*?&]{8,}')]);
  entpcode = new FormControl('', [Validators.required,Validators.pattern('^[A-Za-z0-9\d@$!%*?&]{8,}')]);
  name:any = this.Muser?.name || 'G_bot_user';
  mail:any = '';
  pass:any ='';
  showpp:boolean = false;
  vv(){
    if(this.mail !=='' && this.pass !==''){
      if(this.email.valid){
        return this.sdbl = true;
      }
     }return  this.sdbl = false;
  }
  user:any={
    email:'',
    Photourl:'',
    name:'',
    pcode:''
  }
  localstore(user:any){
    const data = JSON.stringify(user);
    localStorage.setItem('user', data);
    if(user){
     this.router.navigate(['Dashboard']);
    }
  }
  sfdata(){
   if(this.email && this.Password && !this.email.hasError('pattern') && !this.Password.hasError('pattern')){
    this.showpp = true;
     this.user.email = this.email.value;
     const data = JSON.parse(localStorage.getItem('user')!);
    if(data){
      this.Muser = data;
    this.name = data?.name;
    }
   }
  }
  async profnuserdt(){
    if(localStorage.getItem('user')){
    const data = JSON.parse(localStorage.getItem('user')!);
    this.user.name= this.name || data.name;
    this.user.Photourl = data.Photourl;
    this.user.pcode = this.Mpasscode || this.pass;
    this.user.email = data.email;
    await this.localstore(this.user);
  window.location.reload();
   }else{
    this.user.name= this.name || this.Muser.name;
    this.user.Photourl = this.previmg;
    this.user.pcode = this.Mpasscode || this.pass;
    await this.localstore(this.user);
  window.location.reload();
   }
  
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }else{return this.email.hasError('pattern') ? `Not a valid email` : '';}

  }
  paserr:boolean = false;
  getErrorMessagepass() {
    this.morn = false;
    if (this.Password.hasError('required')) {
      return 'You must enter a value';
    }else{
    this.paserr = true;
    return this.Password.hasError('pattern') ? `Password must contain more than 8 characters, 1 upper case letter, and 1 special character` : '';
    }
  }
  getErrorMatch(){
    if (this.entpcode.hasError('required')) {
      return 'You must enter a value';
    }else{
    this.paserr = true;
    return this.entpcode.hasError('pattern') ? `Password must contain more than 8 characters, 1 upper case letter, and 1 special character` : '';
    }
  }
 previmg:any = "assets/profile.png";
  Profileimg(event:any){
    const inputElement = event.target as HTMLInputElement;
    const file: File = (inputElement.files as FileList)[0];
    console.log(file)
    const reader = new FileReader();
    reader.onload = (e: any) => {
     this.previmg = e.target.result;
    };

    reader.readAsDataURL(file);
  }
  cordinate(){
    const width  = window.innerWidth;
    console.log(width);
    // let googleSignInButton = document.querySelector('.googles');
  }
  glsize:any = 'large';
  glshape:any = 'rectangular';
  gltheme:any = 'outline';
  gltype:any = 'standard'
  gltext:any = '';
  ngAfterViewInit(){
    const width = window.innerWidth;
    setTimeout(() => {
      if(width <= 286){
        this.gltype = 'icon'
        this.glsize = 'large';
         this.glshape = 'square';
         this.gltheme = 'outline';
      }else{
        this.gltype = 'standard';
        this.glsize = "medium";
        this.glshape = "rectangular";
        this.gltheme = 'outline';
        this.gltext="continue_with"
      }
    }, 0);
    // const iframe = this.googleIframe?.nativeElement as HTMLIFrameElement;
    // iframe.contentWindow?.location.reload();
  }
  morn:boolean = false;
  async checkandpedit(){
    const pascodes =await this.Muser.pcode;
    const pds = await this.pass;
    if(pascodes === pds){
      this.pview = true;
      this.showpp = true;
     console.log("pass Mached");
    }else{
      this.morn = true;
      console.log("Don't Mached");
    }
 
  }
  donmenud:boolean = false;
  forgotpa(){
    this.showpp = true;
    this.donmenud = true;
  }
}

