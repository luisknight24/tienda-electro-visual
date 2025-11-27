import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { DetalleProducto } from '../detalle-producto/detalle-producto';
import { Producto } from '../../services/productos';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CurrencyPipe, UpperCasePipe, CommonModule, MatDialogModule],
  templateUrl: './tarjeta-producto.html',
  styleUrl: './tarjeta-producto.css',
})
export class TarjetaProducto {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
  @Input() imagenUrl: string = '';
  @Input() producto!: Producto;

  // Inyección del servicio de Dialog
  constructor(private dialog: MatDialog) { }

  abrirDetalle() {
    // Verificamos por seguridad que dialog exista
    if (this.dialog) {
      this.dialog.open(DetalleProducto, {
        data: this.producto,
        width: '800px',
        maxWidth: '95vw',
        maxHeight: '90vh',
        autoFocus: false
      });
    } else {
      console.error('El servicio MatDialog no se ha cargado correctamente.');
    }
  }
}
