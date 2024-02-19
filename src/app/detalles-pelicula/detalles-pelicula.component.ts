import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {
  pelicula: any;

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private cd: ChangeDetectorRef
  ) { }

  // En detalles-pelicula.component.ts
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tmdbService.obtenerDetallesPelicula(id).subscribe(pelicula => {
        this.pelicula = pelicula;
        this.cd.detectChanges(); // Forzar la detección de cambios
      });
    }
  }
}
