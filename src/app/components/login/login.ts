import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Variables para guardar lo que el usuario escribe
  credenciales = {
    email: '',
    password: ''
  };

  private router = inject(Router);
  private authService = inject(Auth); // Inyectamos el servicio
  private snackBar = inject(MatSnackBar); // Para mostrar mensaje de error o éxito

  ingresar() {
    // Validamos que haya escrito algo (básico)
    if (this.credenciales.email && this.credenciales.password) {

      // Llamamos al servicio (que tiene el usuario "falso" dentro)
      const exito = this.authService.login(this.credenciales.email, this.credenciales.password);

      if (exito) {
        // Si fue exitoso, vamos al inicio
        this.router.navigate(['/inicio']);
      }
    } else {
      this.mostrarError("Por favor completa los campos");
    }
  }

  private mostrarError(msg: string) {
    // Necesitas MatSnackBarModule importado en app.config o en este componente si lo usas
    // Si no quieres complicarte, usa un alert() simple por ahora:
    alert(msg);
  }
}
