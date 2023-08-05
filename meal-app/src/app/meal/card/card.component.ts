import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() info: any = {strMealThumb: ''};

  constructor (){
    console.log(this.info);
  }

  ngOnInit(): void {
    // console.log(this.info);
  }
}
