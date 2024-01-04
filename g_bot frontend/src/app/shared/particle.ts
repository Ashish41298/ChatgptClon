export class Particle {
     x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  angle: number;
  speed: number;
  color: string;
  opacity: number;

 public constructor(private ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {

    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.baseX = this.x;
    this.baseY = this.y;
    this.radius = Math.random() * 6 + 1;
    this.angle = Math.random() * Math.PI * 1;
    this.speed = Math.random() * 0.03 + 0.02;
    const middleThreshold = canvasHeight / 3;
    const bottomThreshold = canvasHeight - middleThreshold;
    if (this.y < middleThreshold) {
      this.color = '#1D3A64';
    } else if (this.y >= middleThreshold && this.y < bottomThreshold) {
      this.color = 'white';
    } else {
      this.color = '#DF844E';
    }
    this.opacity = 1;
  }

  update(): void {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.opacity -= 0.005;
    if (this.opacity <= 0) {
       this.opacity = 1;
      this.reset();
    }
    this.draw();
  }

  draw(): void {
    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.shadowColor = this.color;
    this.ctx.shadowBlur = 10;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  reset(): void {
    this.x = this.baseX;
    this.y = this.baseY;
    this.angle = Math.random() * Math.PI * 2;
  }

}
