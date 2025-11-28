import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Usuario {
  nombre: string;
  email: string;
  direccion: string;
  telefono: string;
  password?: string;
  avatarUrl?: string; // Opcional para la foto
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // Usuario simulado (null = no logueado)
  private _usuarioActual = new BehaviorSubject<Usuario | null>(null);
  usuario$ = this._usuarioActual.asObservable(); // Observable para escuchar cambios

  constructor() {
    // Simulamos que al recargar la página revisa si hay alguien (opcional)
    // this._usuarioActual.next({ nombre: 'Juan Perez', email: 'juan@test.com', ... });
  }

  // Método para Iniciar Sesión (Simulado)
  login(email: string, pass: string): boolean {
    // Aquí validarías con backend. Simulamos éxito:
    const usuarioSimulado: Usuario = {
      nombre: 'Cliente Demo',
      email: email,
      direccion: 'Av. 27 de Noviembre',
      telefono: '0991234567',
      avatarUrl: 'https://placehold.co/100x100?text=JD'
    };
    this._usuarioActual.next(usuarioSimulado);
    return true;
  }

  // Método de Registro (Simulado)
  registro(datos: Usuario) {
    // Guardamos los datos que vienen del formulario
    this._usuarioActual.next(datos);
  }

  // Cerrar Sesión
  logout() {
    this._usuarioActual.next(null);
  }

  // Actualizar datos desde el perfil
  actualizarPerfil(datos: Usuario) {
    this._usuarioActual.next(datos);
  }

  obtenerUsuarioActual(): Usuario | null {
    return this._usuarioActual.value;
  }
}
