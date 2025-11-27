import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';
import { Favoritos } from '../../services/favoritos';
import { Productos } from '../../services/productos';
import { Producto } from '../../services/productos';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule, Header, TarjetaProducto, MatButtonModule, MatIconModule],
  templateUrl: './favoritoss.html',
  styleUrl: './favoritoss.css',
})
export class Favoritoss implements OnInit {
  misFavoritos: Producto[] = [];

  private favoritosService = inject(Favoritos);
  private productosService = inject(Productos);
  private router = inject(Router);

  ngOnInit(): void {
    // Nos suscribimos a los IDs. Cada vez que cambien (ej. al borrar uno),
    // recalculamos la lista 'misFavoritos'.
    this.favoritosService.ids$.subscribe(idsSet => {
      const todos = this.productosService.obtenerTodos();
      this.misFavoritos = todos.filter(prod => idsSet.has(prod.id));
    });
  }

  irAlCatalogo() {
    this.router.navigate(['/inicio']);
  }
}
