import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import VanillaTilt from 'vanilla-tilt';
import { Particle } from 'src/app/shared/particle';
// declare var VanillaTilt: any;
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})

export class DashComponent implements OnInit, AfterViewInit{
  constructor(private router:Router, private elementref:ElementRef){

  }
  
  ngOnInit(): void {
     this.chatgpttyped(); 
    this.codesnipit();
    this.bardtyped();
    const el:any = document.querySelectorAll('#tilt');
    VanillaTilt.init(el, {
      max: 20, // Max tilt rotation (degrees)
      // perspective: 500,
      speed: 400, // Tilt speed
      glare: true, // Display glare effect
      'max-glare': 0.2, // Max glare opacity+
    });
  }
  private canvas:any;
   ctx: any;
  private particles: any[] = [];
  private particleCount = 100;
  private mover: HTMLElement | null = null;
  private animationFrameId: number | undefined;
  
  private scrollThreshold: number = 120;
  ngAfterViewInit(): void {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    this.mover =document.body;
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.createParticles();
      this.animate();
      this.addMousemoveListener();
      this.addResizeListener();
    }
    const crollc= this.elementref.nativeElement.querySelector('.maininner');
    const addclel = this.elementref.nativeElement.querySelector('.midsection');
    const header = this.elementref.nativeElement.querySelector('.header_dash');
    crollc.addEventListener('scroll', () => {
      const scrollTop = crollc.scrollTop;
      console.log(scrollTop);
      if (scrollTop > this.scrollThreshold) {
        console.log(addclel);
        addclel.classList.add('scrolled');
        header.classList.add('gone');
      } else {
       addclel.classList.remove('scrolled');
       header.classList.remove('gone');
      }
    });
  }
  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId!);
  }

  private createParticles(): void {
    if (this.ctx) {
      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push(new Particle(this.ctx, this.canvas.width, this.canvas.height));
      }
    }
  }

  private animate(): void {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas!.width, this.canvas!.height);

      this.particles.forEach((particle) => {
        particle.update();
      });

      this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
  }

  private addMousemoveListener(): void {
    if (this.mover) {
      this.mover.addEventListener('mousemove', (e: { clientX: any; clientY: any; }) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        this.particles.forEach((particle) => {
          const distX = mouseX - particle.baseX;
          const distY = mouseY - particle.baseY;
          const distance = Math.sqrt(distX * distX + distY * distY);

          const parallaxX = distX / distance * 50;
          const parallaxY = distY / distance * 50;

          particle.x = particle.baseX - parallaxX;
          particle.y = particle.baseY - parallaxY;
        });
      });
    }
  }

  private addResizeListener(): void {
    window.addEventListener('resize', () => {
      if (this.canvas) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.particles = [];
        this.createParticles();
      }
    });
  }
  
  reprofile(){
    this.router.navigate(['/login']);
  }
  gochatgpt(){
    this.router.navigate(['/ChatGptAi']);
  }
  gosnipite(){
    this.router.navigate(['/dlang']);
  }
  gobard(){
    this.router.navigate(['/BardAi']);
  }

  chatgpttyper:any = `
  You can use Chat gpt 3.5 turbo. It's a designed to generate human-like text and assist with various tasks and generate normal code. now you can create code snippet.
  `;
  async chatgpttyped() {
    const rel = await this.elementref.nativeElement.querySelector('.chatgpt');
    console.log(rel);
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= this.chatgpttyper.length) {
        rel.innerHTML += `${this.chatgpttyper.charAt(index)}`;
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 10);
  }

  Snipittyper:any = `
  you can go direct code snippet to create beautiful snippets, you can customize the snippets with different settings and download with different image formate and Quality.
  `;
  async codesnipit() {
    const rel = await this.elementref.nativeElement.querySelector('.codesnipite');
    console.log(rel);
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= this.Snipittyper.length) {
        rel.innerHTML += `${this.Snipittyper.charAt(index)}`;
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 13);
  }
  bardtypers:any = `
  Bard AI PaLM is a conversational generative artificial intelligence chatbot developed by Google, it same like chatgpt with some additional feature and it's a faster.
  `;
  async bardtyped() {
    const rel = await this.elementref.nativeElement.querySelector('.bard');
    console.log(rel);
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= this.bardtypers.length) {
        rel.innerHTML += `${this.bardtypers.charAt(index)}`;
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 16);
  }

  originalImageLoaded = false;

  onImageLoad() {
    this.originalImageLoaded = true;
    console.log(" img has been loaded")
  }
  firsthandelimg(){
    
  }


}
