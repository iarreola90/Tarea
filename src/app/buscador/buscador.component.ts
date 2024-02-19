import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TmdbService } from '../tmdb.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  searchControl = new FormControl();
  resultados: any;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(query => this.tmdbService.buscarPeliculas(query))
    ).subscribe(result => this.resultados = result);
  }
}
