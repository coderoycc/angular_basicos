import { Component } from '@angular/core';
import { Observable, filter, interval } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  miIntevalo: Observable<number> = interval(1000);
  constructor(){
  }
  ngOnInit(){
    this.miIntevalo
      .pipe(filter((x) => x%2===0))
      .subscribe(value =>{console.log(value)})
  }
}

