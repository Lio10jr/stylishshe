import { Component, Input, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  
  @Input() menu!: string;
  isAuth: boolean = false;

  constructor( private servSesion: SesionService){}
  
  ngOnInit() {
    if (localStorage.getItem('user')) this.isAuth = true;
  }

  async salir() {
    this.servSesion.cerrarSesion();
  }
}
