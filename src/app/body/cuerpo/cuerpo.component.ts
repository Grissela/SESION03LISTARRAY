import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  arraycurso=['Java'];
  curso(name:String){
    console.log(this.arraycurso.push(String(name)));
  }


}
