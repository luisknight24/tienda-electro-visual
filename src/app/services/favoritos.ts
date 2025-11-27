import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'; // Para la notificación
import { Producto } from './productos';

@Injectable({
  providedIn: 'root',
})
export class Favoritos {
  private _snackBar = inject(MatSnackBar);

  // Mantenemos el Set interno para lógica rápida
  private favoritosIds = new Set<number>();

  // 1. NUEVO: Creamos un Observable que emita el Set de IDs
  private _ids = new BehaviorSubject<Set<number>>(new Set());
  ids$ = this._ids.asObservable(); // Las tarjetas se suscribirán a esto

  // Observable para la cantidad (Navbar)
  private _cantidad = new BehaviorSubject<number>(0);
  cantidad$ = this._cantidad.asObservable();

  // Esta función sigue sirviendo para chequeos puntuales
  esFavorito(id: number): boolean {
    return this.favoritosIds.has(id);
  }

  toggleFavorito(producto: Producto) {
    if (this.favoritosIds.has(producto.id)) {
      this.favoritosIds.delete(producto.id);
      this.mostrarNotificacion(`💔 Eliminado de favoritos: ${producto.nombre}`);
    } else {
      this.favoritosIds.add(producto.id);
      this.mostrarNotificacion(`❤️ Agregado a favoritos: ${producto.nombre}`);
    }

    // 2. ACTUALIZACIÓN CRÍTICA:
    // Creamos una COPIA del Set para que Angular detecte que es un objeto nuevo
    const nuevoSet = new Set(this.favoritosIds);

    // Emitimos el nuevo set a todos los suscriptores (Tarjetas)
    this._ids.next(nuevoSet);

    // Emitimos la cantidad (Navbar)
    this._cantidad.next(this.favoritosIds.size);
  }

  private mostrarNotificacion(mensaje: string) {
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
