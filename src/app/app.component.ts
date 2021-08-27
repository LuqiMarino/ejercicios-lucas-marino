import { Component } from '@angular/core';
import { Usuario } from './Clases/usuario';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marino Lucas';
  myUsuario:Usuario;  

  constructor(private router:RouterModule){
    this.myUsuario = new Usuario();
    this.myUsuario.nombre = "Lucas";
    this.myUsuario.apellido = "Marino";
  }

  Saludar(){
    this.title = 'Lucas Marino';
  }

  IrAEjercicio1(){
    // this.routes
    // this.router.navigate(['/user_invitation']
  }

  
}
