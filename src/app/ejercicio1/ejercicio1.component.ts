import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public edad1 = 0;
  public edad2 = 0;
  public prom = 0;
  public suma = 0;

  public CalcularPromedio():void{
    this.edad1 = parseInt((<HTMLInputElement>document.getElementById("edad1")).value);
    this.edad2 = parseInt((<HTMLInputElement>document.getElementById("edad2")).value);
    this.prom = (this.edad1 + this.edad2) / 2;
    this.suma = this.edad1 + this.edad2;
    
  }

  public Limpiar():void{    
    (<HTMLInputElement>document.getElementById("edad1")).value = "";
    (<HTMLInputElement>document.getElementById("edad2")).value = "";
    (<HTMLInputElement>document.getElementById("prom")).value = "";
    (<HTMLInputElement>document.getElementById("suma")).value = "";
  }

}
