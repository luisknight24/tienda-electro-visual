import { Component, Inject } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Producto } from '../../services/productos';
import { Favoritos } from '../../services/favoritos';

@Component({
  selector: 'app-detalle-producto',
  imports: [CommonModule, CurrencyPipe, UpperCasePipe, MatDialogModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto {
  // Opciones de meses
  plazos: number[] = [3, 6, 9, 12, 18, 24];
  plazoSeleccionado: number = 3; // Por defecto 3 meses
  valorCuota: number = 0;
  totalFinal: number = 0;

  esFavorito: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DetalleProducto>,
    @Inject(MAT_DIALOG_DATA) public producto: Producto,
    public favoritosService: Favoritos
  ) {
    // Calcular la cuota inicial apenas se abre el modal
    this.calcularCuota(this.plazoSeleccionado);
  }

  cerrar(): void {
    this.dialogRef.close();
  }

  toggleFavorito(): void {
    this.favoritosService.toggleFavorito(this.producto);
  }

  // 3. LÓGICA DE CRÉDITO
  calcularCuota(meses: number) {
    this.plazoSeleccionado = meses;

    // Tasa de interés mensual (1.5% = 0.015)
    const interesMensual = 0.015;

    // El interés aumenta según la cantidad de meses
    // Fórmula: Precio * (1 + (Interes * Meses))
    const factorInteres = 1 + (interesMensual * meses);

    this.totalFinal = this.producto.precio * factorInteres;
    this.valorCuota = this.totalFinal / meses;
  }
}
