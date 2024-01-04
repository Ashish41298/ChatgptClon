import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCopytoclip]'
})
export class CopytoclipDirective {

  constructor(private el:ElementRef) {
   }

   @Input('appCopytoclip') codeElement: any;

   @HostListener('click') onClick() {
    if (this.codeElement) {
      const text = this.codeElement.nativeElement.innerText;
      if(text){
      }else{
        const dd = this.codeElement.nativeElement.innerHTML;
      }
   
    }
  }


}