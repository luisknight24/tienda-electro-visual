import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class Productos {
  private listaElectrodomesticos: Producto[] = [
    {
      id: 1,
      nombre: 'Refrigeradora Silver',
      descripcion: 'No Frost, 400 Litros, panel digital y ahorro de energía.',
      precio: 850,
      imagenUrl: 'https://placehold.co/300x300?text=Refrigeradora'
    },
    {
      id: 2,
      nombre: 'Lavadora Carga Frontal',
      descripcion: '18kg, tecnología inverter, ciclos de vapor.',
      precio: 620,
      imagenUrl: 'https://placehold.co/300x300?text=Lavadora'
    },
    {
      id: 3,
      nombre: 'Televisor 4K 55"',
      descripcion: 'Smart TV, pantalla QLED, control por voz integrado.',
      precio: 450,
      imagenUrl: 'https://placehold.co/300x300?text=Smart+TV'
    },
    {
      id: 4,
      nombre: 'Aire Acondicionado',
      descripcion: '12000 BTU, silencioso, modo eco y wifi.',
      precio: 350,
      imagenUrl: 'https://placehold.co/300x300?text=Aire+Acond'
    },
    {
      id: 5,
      nombre: 'Cafetera Expresso',
      descripcion: 'Automática, espumador de leche y molinillo.',
      precio: 120,
      imagenUrl: 'https://placehold.co/300x300?text=Cafetera'
    },
    {
      id: 6,
      nombre: 'Horno Microondas',
      descripcion: 'Con grill, descongelado rápido y cerámica interior. Permite cocinar alimentos rápidamente, combinando potencia con eficiencia.',
      precio: 180,
      imagenUrl: 'https://placehold.co/300x300?text=Microondas'
    }
  ];

  constructor() { }

  obtenerTodos(): Producto[] {
    return this.listaElectrodomesticos;
  }

  obtenerPorId(id: number): Producto | undefined {
    return this.listaElectrodomesticos.find(p => p.id === id);
  }
}
