import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-error',
  templateUrl: './mensaje-error.component.html',
  styleUrls: ['./mensaje-error.component.css']
})
export class MensajeErrorComponent implements OnInit {

  constructor() { }
  @Input("mensajeError") mensajeError:string = "";
  ngOnInit(): void {
  }

}
