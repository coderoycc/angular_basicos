import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit{

  @Input() bgColor: string ="red";
  @Input() textColor: string ="black";
  @Input() width: string ="4";
  

  constructor(private el: ElementRef<HTMLButtonElement>) { }

  ngOnInit(): void {
    this.setColor();
    this.setWidth();
  }
  setColor(){
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.color = this.textColor;
  }
  setWidth(){
    this.el.nativeElement.style.cursor = "pointer";
    this.el.nativeElement.style.margin = "0.5rem";
    this.el.nativeElement.style.padding = "0.5rem";
    this.el.nativeElement.style.borderRadius = "0.5rem";
    this.el.nativeElement.style.width = this.width + "rem";
  }
}
