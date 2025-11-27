import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { DetalleProducto } from '../detalle-producto/detalle-producto';
import { Producto } from '../../services/productos';
import { Favoritos } from '../../services/favoritos';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

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

  // Variable local reactiva
  esFavorito: boolean = false;
  private sub!: Subscription;

  // Inyección del servicio de Dialog
  constructor(
    private dialog: MatDialog,
    private favoritosService: Favoritos,
    private cd: ChangeDetectorRef // 2. INYECTAR EL DETECTOR DE CAMBIOS
  ) { }

  ngOnInit(): void {
    // Nos suscribimos a los cambios de la lista global
    this.sub = this.favoritosService.ids$.subscribe(ids => {
      // Actualizamos la variable local
      this.esFavorito = ids.has(this.producto.id);

      // 3. LA SOLUCIÓN: FORZAR LA DETECCIÓN DE CAMBIOS
      // Esto le dice a Angular: "Oye, aunque nadie me hizo clic a mí directamente, 
      // mis datos cambiaron, así que repíntame ahora mismo".
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

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

  toggleFav(event: Event) {
    event.stopPropagation();
    this.favoritosService.toggleFavorito(this.producto);
    // No hace falta actualizar nada aquí manualmente, 
    // la suscripción de arriba se encargará de todo gracias al markForCheck().
  }
}
