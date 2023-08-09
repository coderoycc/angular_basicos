import { Component } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent  {

  img = new Promise((resolve, reject) => {
    resolve('https://www.nationalgeographic.com.es/medio/2023/06/01/the-bottle-tree-portal_8aba9f36_230601093631_800x800.jpg');
    reject('#');
  });

  constructor() { }


}
