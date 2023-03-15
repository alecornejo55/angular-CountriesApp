import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string;
  hayError: boolean;
  paises: Country[];
  constructor( private paisService: PaisService) {
    this.termino = '';
    this.hayError = false;
    this.paises = [];
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe({
        next: (paises) => {
          this.paises = paises;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      })
  }
  sugerencias( termino: string) {
    this.hayError = false;
    // TODO: sugerencias
  }
}
