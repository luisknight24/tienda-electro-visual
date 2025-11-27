import { Component, OnInit, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';
import { Producto, Productos } from '../../services/productos';
import { Favoritos } from '../../services/favoritos';


@Component({
  selector: 'app-inicio',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule, TarjetaProducto, MatBadgeModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  electrodomesticos: any[] = [];
  cantidadFavoritos: number = 0; // Variable para guardar el número

  private _productosService = inject(Productos);
  private _favoritosService = inject(Favoritos); // Inyectamos servicio

  ngOnInit(): void {
    this.cargarProductos();

    // Nos suscribimos al contador: cada vez que cambie, actualizamos la variable
    this._favoritosService.cantidad$.subscribe(cant => {
      this.cantidadFavoritos = cant;
    });
  }

  cargarProductos(): void {
    this.electrodomesticos = this._productosService.obtenerTodos();
  }

  verFavoritos() {
    console.log("Ir a favoritos...");
  }
}
