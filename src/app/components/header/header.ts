import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Importante para navegar
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { Favoritos } from '../../services/favoritos';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cantidadFavoritos: number = 0;
  private favoritosService = inject(Favoritos);
  private router = inject(Router);

  ngOnInit(): void {
    // Escuchamos el contador global
    this.favoritosService.cantidad$.subscribe(cant => {
      this.cantidadFavoritos = cant;
    });
  }

  irAInicio() {
    this.router.navigate(['/inicio']);
  }

  irAFavoritos() {
    this.router.navigate(['/favoritoss']);
  }

  irAOfertas() {
    this.router.navigate(['/ofertas']);
  }

  irACategorias() {
    this.router.navigate(['/categorias']);
  }

  irACatalogo() {
    this.router.navigate(['/catalogo']);
  }
}
