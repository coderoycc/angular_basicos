import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css']
})
export class CustomContainerComponent implements OnInit {

  // Inyectamos el servicio DarkModeService
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  get dark(){
    return this.darkModeService.dark;
  }
  changeMode(){
    this.darkModeService.changeMode();
  }
}
