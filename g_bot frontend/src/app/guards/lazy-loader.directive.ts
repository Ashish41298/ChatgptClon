import { Attribute, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyLoader]'
})
export class LazyLoaderDirective implements OnInit{
  @HostBinding("attr.src") srcAttr:any;
  @Input() src: string | undefined;
  @Input() blrsrc: string | undefined;
  constructor(private el: ElementRef, private renderer:Renderer2) {
   
  }
  ngOnInit(): void {
    this.srcAttr = this.src;
  }

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    return window && "IntersectionObserver" in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.src = ' ';
    this.srcAttr ='';
    this.srcAttr = this.blrsrc;
    this.renderer.addClass(this.el.nativeElement, 'is-loaded');
  }
}
