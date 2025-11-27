import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';
import { Producto } from '../../services/productos';
import { Productos } from '../../services/productos';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule, MatButtonModule, RouterLink, Header, TarjetaProducto],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas implements OnInit {
  productosOferta: Producto[] = [];
  private productosService = inject(Productos);
  private router = inject(Router);

  ngOnInit(): void {
    // Filtramos solo los que tienen precioOriginal definido
    this.productosOferta = this.productosService.obtenerOfertas();
  }

  irAlCatalogo() {
    this.router.navigate(['/catalogo']);
  }
}
