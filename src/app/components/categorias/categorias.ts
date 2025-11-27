import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';
import { Producto } from '../../services/productos';
import { Productos } from '../../services/productos';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule, Header, TarjetaProducto, MatButtonModule, MatIcon, MatRippleModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias implements OnInit {
  productosFiltrados: Producto[] = [];
  categorias: string[] = [];
  categoriaSeleccionada: string = 'Todas';

  // Mapa de íconos para darle vida visual a cada categoría
  iconosCategoria: any = {
    'Linea Blanca': 'kitchen',
    'Cocina': 'soup_kitchen',
    'TV': 'tv',
    'Climatización': 'ac_unit',
    'Pequeños': 'coffee_maker',
    'Todas': 'apps' // Ícono para "Ver todo"
  };

  private productoService = inject(Productos);

  ngOnInit(): void {
    // 1. Obtener categorías disponibles
    this.categorias = ['Todas', ...this.productoService.obtenerCategoriasUnicas()];

    // 2. Cargar todos los productos al inicio
    this.filtrar('Todas');
  }

  filtrar(categoria: string) {
    this.categoriaSeleccionada = categoria;

    const todos = this.productoService.obtenerTodos();

    if (categoria === 'Todas') {
      this.productosFiltrados = todos;
    } else {
      this.productosFiltrados = todos.filter(p => p.categoria === categoria);
    }
  }

  // Método auxiliar para obtener el ícono (si no existe, usa uno genérico)
  getIcono(cat: string): string {
    return this.iconosCategoria[cat] || 'category';
  }
}