import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

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

    this.paisService.buscarPais(termino)
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
