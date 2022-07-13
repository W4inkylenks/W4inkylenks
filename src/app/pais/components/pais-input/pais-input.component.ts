import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() ph: string = '';
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 

  debouncer: Subject<string> = new Subject(); // subject es un Observable de rx

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300) // no emite el subscribe hasta q el observable debouncer deje de emitir valores por los proximos 300 milisegundos
    )
    .subscribe( valor => {
      this.onDebounce.emit( valor )
    })
  }

  buscar() {
    this.onEnter.emit( this.termino )
  }
  
  teclaPresionada() {
    
    this.debouncer.next( this.termino );
  }
}
