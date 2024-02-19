import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey: string = '30abebc2aac721e8308297e181b4d9b1';
  private baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  buscarPeliculas(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`);
  }

  obtenerDetallesPelicula(id: string) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
}