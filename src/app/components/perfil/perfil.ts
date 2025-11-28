import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Para ngModel
import { Auth, Usuario } from '../../services/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from "@angular/router";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, Header, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  private router = inject(Router);

  // Objeto local para editar
  datosUsuario: Usuario = {
    nombre: '', email: '', direccion: '', telefono: ''
  };

  private authService = inject(Auth);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    const u = this.authService.obtenerUsuarioActual();
    if (u) {
      // Creamos copia para no modificar directo hasta guardar
      this.datosUsuario = { ...u };
    }
  }

  guardarCambios() {
    this.authService.actualizarPerfil(this.datosUsuario);
    this.snackBar.open('Datos actualizados correctamente', 'OK', { duration: 3000 });
    this.router.navigate(['/inicio']);
  }
}