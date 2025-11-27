import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';
import { Producto, Productos } from '../../services/productos';


@Component({
  selector: 'app-inicio',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule, TarjetaProducto],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  // Variable para almacenar los datos que vendrán del servicio
  electrodomesticos: Producto[] = [];

  constructor(private _productosService: Productos) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    // Llamamos al método del servicio
    this.electrodomesticos = this._productosService.obtenerTodos();
  }

  verFavoritos() {
    console.log("Navegando a la lista de deseos...");
  }
}
