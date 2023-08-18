import { Component } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent{
  subscriptor: Subscription | null = null
  
  x: number = 0
  y: number = 0
  ngOnInit(){
    const event = fromEvent<MouseEvent>(document.querySelector("#area")!, "mousemove"); 
    this.subscriptor = event.subscribe((ev) => {
      this.x = ev.clientX
      this.y = ev.clientY
    })
  }
  ngOnDestroy(){
    this.subscriptor?.unsubscribe()
  }
}
