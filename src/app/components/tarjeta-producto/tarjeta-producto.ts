import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CurrencyPipe, UpperCasePipe],
  templateUrl: './tarjeta-producto.html',
  styleUrl: './tarjeta-producto.css',
})
export class TarjetaProducto {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
  @Input() imagenUrl: string = '';
}
