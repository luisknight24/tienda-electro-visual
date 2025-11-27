import { Component, Inject } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Producto } from '../../services/productos';

@Component({
  selector: 'app-detalle-producto',
  imports: [CommonModule, CurrencyPipe, UpperCasePipe, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto {
  esFavorito: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DetalleProducto>,
    @Inject(MAT_DIALOG_DATA) public producto: Producto
  ) { }

  cerrar(): void {
    this.dialogRef.close();
  }

  toggleFavorito(): void {
    this.esFavorito = !this.esFavorito;
    // Aquí podrías llamar a un servicio para guardar la preferencia
  }
}
