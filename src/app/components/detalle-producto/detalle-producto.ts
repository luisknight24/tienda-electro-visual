import { Component, Inject } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Producto } from '../../services/productos';
import { Favoritos } from '../../services/favoritos';

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
    @Inject(MAT_DIALOG_DATA) public producto: Producto,
    public favoritosService: Favoritos // <--- Inyectar servicio
  ) { }

  cerrar(): void {
    this.dialogRef.close();
  }

  toggleFavorito(): void {
    this.favoritosService.toggleFavorito(this.producto);
  }
}
