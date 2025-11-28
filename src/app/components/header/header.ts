import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Importante para navegar
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { Favoritos } from '../../services/favoritos';
import { MatMenuModule } from '@angular/material/menu'; // <--- IMPORTANTE
import { Auth, Usuario } from '../../services/auth';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule, MatMenuModule, MatDividerModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  usuario: Usuario | null = null;
  cantidadFavoritos: number = 0;
  private favoritosService = inject(Favoritos);
  private router = inject(Router);
  private authService = inject(Auth);

  ngOnInit(): void {
    // Escuchamos el contador global
    this.favoritosService.cantidad$.subscribe(cant => {
      this.cantidadFavoritos = cant;

      // Nos suscribimos al estado del usuario
      this.authService.usuario$.subscribe(u => {
        this.usuario = u;
      });
    });
  }

  //Lógica inteligente para el ícono
  manejarClickUsuario() {
    if (!this.usuario) {
      this.router.navigate(['/login']);
    }
    // Si hay usuario, el trigger del menú en el HTML se encarga solo
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  irAPerfil() {
    this.router.navigate(['/perfil']);
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
