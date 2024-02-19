import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';

const routes: Routes = [
  { path: '', component: BuscadorComponent },
  { path: 'detalles/:id', component: DetallesPeliculaComponent },
  // otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }