import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighliter]'
})
export class HighliterDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  
  }

  private isResizing = false;
  private initialX:any;
  private initialY:any;
  private initialWidth:any;
  private initialHeight:any;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const isHoveringRightBorder = this.isHoveringRightBorder(event);
    const isHoveringBottomBorder = this.isHoveringBottomBorder(event);

    if (isHoveringRightBorder && isHoveringBottomBorder) {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'se-resize');
    } else if (isHoveringRightBorder) {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'col-resize');
    } else if (isHoveringBottomBorder) {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'row-resize');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'auto');
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (this.isHoveringRightBorder(event) || this.isHoveringBottomBorder(event)) {
      this.isResizing = true;
      this.initialX = event.clientX;
      this.initialY = event.clientY;
      this.initialWidth = this.el.nativeElement.offsetWidth;
      this.initialHeight = this.el.nativeElement.offsetHeight;

      const mouseMoveListener = (moveEvent: MouseEvent) => {
        if (this.isResizing) {
          const deltaX = moveEvent.clientX - this.initialX;
          const deltaY = moveEvent.clientY - this.initialY;
          const newWidth = this.initialWidth + deltaX;
          const newHeight = this.initialHeight + deltaY;
          this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
          this.renderer.setStyle(this.el.nativeElement, 'height', `${newHeight}px`);
        }
      };

      const mouseUpListener = () => {
        this.isResizing = false;
        window.removeEventListener('mousemove', mouseMoveListener);
        window.removeEventListener('mouseup', mouseUpListener);
      };

      window.addEventListener('mousemove', mouseMoveListener);
      window.addEventListener('mouseup', mouseUpListener);
    }
  }

  private isHoveringRightBorder(event: MouseEvent): boolean {
    const boundingRect = this.el.nativeElement.getBoundingClientRect();
    const offset = 5;
    return event.clientX >= boundingRect.right - offset;
  }

  private isHoveringBottomBorder(event: MouseEvent): boolean {
    const boundingRect = this.el.nativeElement.getBoundingClientRect();
    const offset = 5;
    return event.clientY >= boundingRect.bottom - offset;
  }

}
