import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';
import { Producto } from '../../services/productos';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-catalogo',
  imports: [Header, TarjetaProducto, CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {
  todosLosProductos: Producto[] = [];
  private productoService = inject(Productos);

  ngOnInit(): void {
    // Pedimos TODOS (los 30)
    this.todosLosProductos = this.productoService.obtenerTodos();
  }
}
