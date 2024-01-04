import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as hljs from 'highlight.js';
import { SharedataService } from 'src/app/shared/sharedata.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-bard-ai',
  templateUrl: './bard-ai.component.html',
  styleUrls: ['./bard-ai.component.css']
})
export class BardAIComponent {
  title = 'G_bot';
  bot = 'https://www.gstatic.com/lamda/images/sparkle_thinking_v2_e272afd4f8d4bbd25efe.gif';
  uname: any;
  logeduser: any
  user: any
  loaderm: boolean = false;
  mainresarr: any[] = [];
  dashMassege: any = '';
  chatmm: boolean = false;
  constructor(private elementref: ElementRef, private router: Router, private renderer: Renderer2, private share:SharedataService) {
    if (localStorage.getItem('user')) {
      const dd = JSON.parse(localStorage.getItem('user')!);
      this.logeduser = dd.Photourl || '';
      this.user = this.logeduser || './assets/user.png';
      this.uname = dd.name || 'User';
    } else { '' }
    if (localStorage.getItem('Bardchat')) {
      const dd = JSON.parse(localStorage.getItem('Bardchat')!);
      this.bacChat = dd;
    } else { '' };
    if (localStorage.getItem('theme')) {
      const theme = JSON.parse(localStorage.getItem('theme')!);
      this.currentTheme = theme;
    } else { '' };
  }

  form: any;
  container: any;
  checkonint: number = 0;

  async ngOnInit(): Promise<void> {
    this.checkonint = await 1;
    this.scrollhandeler();
    this.setTheme(this.currentTheme);
  }
  sameheight:any='';
  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    this.sameheight = textarea.scrollHeight + 'px';
  }
  @ViewChild('textareaElement', { static: false }) textareaElement?: ElementRef;
  ngAfterViewInit() {
    this.form = this.elementref.nativeElement.querySelector('form');
    this.form.addEventListener('submit', this.handlesubmit);
    this.form.addEventListener('keyup', (e: any) => {
      if (e.keycode === 13) {
        this.handlesubmit(e);
      }
    });
    this.container = this.elementref.nativeElement.querySelector('#container');
    let textareaHeight = this.textareaElement?.nativeElement.scrollHeight + 'px';
    setTimeout(() => {
      this.sameheight = textareaHeight;
    },2);
  }
  usertypedtxt: any = '';
  globaltywriter(element: any, text: any) {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        element.innerHTML += `${text.charAt(index)}`;
        this.usertypedtxt += `${text.charAt(index)}`;
        index++;
      } else {
        clearInterval(typingInterval);
        text = '';
      }
    }, 10);
  }
  async getpresponse(text: any) {
    const rel = await this.elementref.nativeElement.querySelector('.nocores');
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        rel.innerHTML += `${text.charAt(index)}`;
        index++;
      } else {
        clearInterval(typingInterval);
        text = '';
      }
    }, 10);
  }
  generateUniqueId() {
    const timestamp = Date.now();
    const rnNumber = Math.random();
    const hex = rnNumber.toString(16);
    return `id-${timestamp}-${hex}`;
  }
  @ViewChild('hight', { read: ElementRef }) contentElement: ElementRef | undefined;
  proptdata: any;
  wpchi: boolean = false;
  handlesubmit = async (e: any) => {
    e.preventDefault();
    const elemush = await this.elementref.nativeElement.querySelector('.cck');
    elemush.innerHTML = '';
    elemush.innerText = "";
    this.proptdata = '';
    this.directbottype = " ";
    this.usertypedtxt = " ";
    this.wpchi = false;
    this.mainresarr = [{}];

    const data = new FormData(this.form ?? undefined);
    this.proptdata = data.get('prompt');
    const userel = await this.elementref.nativeElement.querySelector('.cck');
    this.globaltywriter(userel, this.proptdata);
    this.loaderm = true;
    const mopnnodekey = await environment.MainG_bot_api;
    fetch(`${mopnnodekey}/Bardchat`, { //"http://localhost:3000/api/Bardchat"
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: data.get('prompt')
      }),
    }).then((response) => response?.json()).then(async (data) => {
      console.log(data)
      const content = data?.bot[0].output ;
      if (content) {
        this.wpchi = await true;
        const el = await this.elementref.nativeElement.querySelector('.doing');
        const hasCodeBlock = await content.includes("```");
        if (hasCodeBlock) {
          await this.processContent(content, el);

          hljs.default.highlightAll();
          if (this.fouders.length > 2) {
            this.fouders;
          }
        }
        else {
          this.typeContentgbdata(content);
          this.mainresarr.push({ directres: content })
        }
        this.loaderm = false;
        const itemFound = this.bacChat.some(obj => obj.user === this.proptdata);
        if (itemFound) {
        } else {
          if (this.bacChat.length <= 15) {
            const arrayd = await this.bacChat.unshift({ user: this.proptdata, botr: this.mainresarr, disabled: false });
          } else {
            this.chatmm = true;
            this.dashMassege = '⚠️ Stack Full: Please Remove the Old chat';
            await this.messagetyper(this.dashMassege);
            setTimeout(() => {
              this.chatmm = false;
              this.dashMassege = '';
              this.showmsg = ''
            }, 2500);
          }

        }
        const data = JSON.stringify(this.bacChat)
        localStorage.setItem('Bardchat', data);
        this.usertypedtxt = "";
      }
    });
  }

  fouders: any[] = [];
  languages: any;
  async processContent(orgcon: any, element: any) {
    const regex = /((?:[^`]+|`(?!``))+)|(```[\s\S]+?```)/g;
    let match;
    while ((match = regex.exec(orgcon)) !== null) {
      if(match[1]) {
        const nonCodeContent = match[1].trim();
        this.mainresarr.push({ botp: nonCodeContent });
      } else if (match[2]) {
        const codeBlock = await match[2].trim().replace(/^```([\s\S]+?)```$/g, '$1');
        const lines = await codeBlock.split('\n');
        const lang = await lines[0];
        if (lang) {
          const hlt = await hljs.default.highlight(codeBlock, { language: `${lang}` });
          const codes = hlt.value;
          const glind: string[] = codes.split('\n');
          glind.shift()?.trim();
          const modifiedData: string = glind.join('\n');
          const data = modifiedData;
          const orgtl = await `language-${lang}`;
          this.languages = await orgtl;
          this.mainresarr.push(await { code: true, lang: lang, botc: data, copycode: codeBlock, isactive: false });
        } else { '' }
      }
    }
  }

  nav() {
    this.router.navigate(['/Login']);
  }
  usermenu: boolean = false;
  User_menu() {
    this.usermenu = true;
  }

  close_menu(event: any) {
    const eclass = event.target.className;
    if (eclass == 'UserMn') {
      this.usermenu = false;
      this.oppp = false;
      this.settingM = false;
    } else { '' }
    if (eclass == 'settingbarbg' || eclass == 'settingbarbg animate__animated animate__fadeIn') {
      this.oppp = false;
      this.settingM = false;
    }
  }

  async copedtrue(event: Event, cdel: any, index: any) {
    index.isactive = !index.isactive;
    const frt = cdel.innerHTML;
    const lines: string[] = frt.split('\n');
    lines.shift();
    const modifiedData: string = lines.join('\n');
    const mrpls = modifiedData.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    navigator.clipboard.writeText(mrpls).then(async () => {
      await setTimeout(() => {
        index.isactive = false;
      }, 500);
    })
  }
  constcopyp: boolean = false;
  async copypuchat(cdel: any, index: any) {
    this.constcopyp = !this.constcopyp;
    const nocodecon = cdel.innerHTML;
    navigator.clipboard.writeText(nocodecon).then(async () => {
      await setTimeout(() => {
        this.constcopyp = false;
      }, 500);
    })
  }

  bacChat: any[] = [];
  async cleardata() {
    this.usertypedtxt = "";
    const elemush = await this.elementref.nativeElement.querySelector('.cck');
    elemush.innerHTML = '';
    elemush.innerText = "";
    this.proptdata = '';
    this.wpchi = false;
    this.mainresarr = [""];
  }
  indeptcb: boolean = false;
  async backtochat(items: any, cchatid: any) {
    items.directres = " ";
    this.directbottype = " ";
    this.usertypedtxt = "";
    const userel = await this.elementref.nativeElement.querySelector('.cck');
    userel.innerHTML = '';
    userel.innerText = '';
    this.proptdata = await items.user || this.bacChat[cchatid].user;
    this.globaltywriter(userel, this.proptdata);
    this.wpchi = true;
    this.mainresarr = items.botr;
    this.typeContentgbdata(this.bacChat[cchatid].botr[1].directres);
  }
  directbottype: any = '';
  typeContentgbdata(data: any) {
    const content = data;
    if (content !== null && content !== undefined) {
      let index = 0;
      const intervalId = setInterval(() => {
        this.directbottype += content[index];
        index++;
        if (index === content.length) {
          clearInterval(intervalId);
        }
      }, 10);
    }
  }
  //type message
  showmsg: any = '';
  messagetyper(data: any) {
    const content = data;
    if (content !== null && content !== undefined) {
      let index = 0;
      const intervalId = setInterval(() => {
        this.showmsg += content[index];
        index++;
        if (index === content.length) {
          clearInterval(intervalId);
        }
      }, 25);
    }
  }
  async rmlinlist(cid: any) {
    this.bacChat.splice(cid, 1);
    const data = JSON.stringify(this.bacChat)
    localStorage.setItem('Bardchat', data);
    this.chatmm = true;
    this.dashMassege = '✅ Chat Has Been Removed!';
    this.cleardata();
    await this.messagetyper(this.dashMassege);
    setTimeout(() => {
      this.chatmm = false;
      this.dashMassege = '';
      this.showmsg = '';
    }, 2500);
  }
  lighticon: boolean = false;
  bgchat: boolean = true;
  settingM: boolean = false;
  oppp: boolean = false;
  opesetting() {
    this.settingM = true;
    this.oppp = true;
  }
  buttonsDisabled: boolean = false;
  darkmode: boolean = false;
  sethemeanim: boolean = false;
  currentTheme = 'main default';
  async setTheme(theme: string): Promise<void> {
    this.buttonsDisabled = true;
    setTimeout(() => {
      this.buttonsDisabled = false;
    }, 2500);
    this.currentTheme = theme;
    const data = document.querySelector('#app')!;
    data.className = theme;
    switch (theme) {
      case 'main light':
        data.className = theme;
        break;
      case 'main dark':
        data.className = theme;
        break;
      case 'main default':
        data.className = theme;
        break;
      default:
        break;
    }
    if (this.currentTheme !== 'main default') {
      this.bgchat = false;
    } else {
      this.bgchat = true;
    }
    const light = document.querySelector('.light')!;
    if (light) {
      this.lighticon = true;
      this.darkmode = true;
    } else { this.darkmode = false; this.lighticon = false; }
    const themedata = JSON.stringify(this.currentTheme);
    localStorage.setItem('theme', themedata);
    if (this.currentTheme === theme && this.checkonint === 0) {
      this.sethemeanim = true;
      this.chatmm = true;
      this.dashMassege = `✅ Theme Has Been Changed!`;
      await this.messagetyper(this.dashMassege);
      await setTimeout(() => {
        this.sethemeanim = false;
        this.chatmm = false;
        this.dashMassege = '';
        this.showmsg = '';
      }, 2500);
    }
    if (await this.checkonint === 1) {
      this.checkonint = 0;
    } else { '' }
  }
  getTheme(): string {
    return this.currentTheme;
  }
  rlogout() {
    this.router.navigate(['/login']);
  }
  async ClearAll() {
    localStorage.removeItem('Bardchat');
    this.chatmm = true;
    this.dashMassege = `✅ Clear All Chats!`;
    this.bacChat = [];
    await this.messagetyper(this.dashMassege);
    setTimeout(() => {
      this.chatmm = false;
      this.dashMassege = '';
      this.showmsg = '';
    }, 2500);
  }

  // stop to night ok
  lastScrollTop:any = 0;
  scrollhandeler(){
    const folderCon = this.elementref.nativeElement.querySelector('.doing');
    const nav = this.elementref.nativeElement.querySelector('.top-nav');
    const container = this.elementref.nativeElement.querySelector('#scrollslt'); 
    const main = this.elementref.nativeElement.querySelector('#container');
    const tarea = this.elementref.nativeElement.querySelector('.forms');
    this.renderer.listen(folderCon, 'scroll', (event) => {
      const scrollTop = event.target.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        // Scrolling down, show the container
        this.renderer.setStyle(nav, 'opacity', '0px');
        this.renderer.setStyle(container, 'opacity', '0px');
        this.renderer.setStyle(nav, 'display', 'none');
        this.renderer.setStyle(container, 'display', 'none');
        this.renderer.setStyle(main, 'margin-top', '5px');
        this.renderer.setStyle(tarea, 'opacity', '0');
        this.renderer.setStyle(tarea, 'bottom', '-50%');
      } else {
        // Scrolling up, hide the container
        this.renderer.setStyle(nav, 'opacity', '1px');
        this.renderer.setStyle(container, 'opacity', '1px');
        this.renderer.setStyle(nav, 'display', 'flex');
        this.renderer.setStyle(container, 'display', 'flex');
        this.renderer.setStyle(main, 'margin-top', '50px');
        this.renderer.setStyle(tarea, 'opacity', '1');
        this.renderer.setStyle(tarea, 'bottom', '0%');
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  async takescreenshort(index: any):Promise<void>{
  const sdata = await this.share.chanegeddata(index);
  if(await sdata){
       this.router.navigate(['/dlang']);
  }

  }
  dattrick:boolean = false;
  wrapstyles:any;
  textwrappper(){
    this.dattrick =! this.dattrick;
    if(this.dattrick == true){
      this.wrapstyles = {'white-space': 'pre-wrap !important'}
    }
    if(this.dattrick == false){
      this.wrapstyles = { };
    }
  }

  promptdata:any;
trybart(){
  const prompt = this.promptdata;
  console.log(prompt);
  fetch(`http://localhost:3000/api/Bardchat`, { //"http://localhost:3000/api/chat"
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: prompt
    }),
  }).then((response) => response.json()).then(async (data) => {
    console.log(data);
  })
}


}

















