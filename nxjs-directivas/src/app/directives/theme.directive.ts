import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[darkTheme]'
})
export class ThemeDirective implements OnInit{

  private htmlElement: ElementRef<HTMLDivElement>;
  constructor(private el: ElementRef<HTMLDivElement>) {
    // Directiva que solo aplica a elementos DIV
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setBackground();
    this.setTextColor();
  }

  setBackground(){
    this.htmlElement.nativeElement.style.backgroundColor = '#333';
  }

  setTextColor(){
    this.htmlElement.nativeElement.style.color = 'snow';
  }
}
