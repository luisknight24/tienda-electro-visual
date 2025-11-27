import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;

  // --- Nuevos campos para el detalle ---
  caracteristicas?: string[];
  eficiencia?: string;
  garantia?: string;
  sku?: string;
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
      imagenUrl: '/img/refrigeradora.jpg',

      sku: 'REF-001-SL',
      eficiencia: 'A++',
      garantia: '10 Años en compresor',
      caracteristicas: [
        'Sistema Multi Air Flow',
        'Dispensador de agua y hielo',
        'Conectividad Wi-Fi con App',
        'Iluminación LED panorámica'
      ]
    },
    {
      id: 2,
      nombre: 'Lavadora Carga Frontal',
      descripcion: '18kg, tecnología inverter, ciclos de vapor.',
      precio: 620,
      imagenUrl: '/img/lavadora.jpg',

      sku: 'LAV-002-INV',
      eficiencia: 'A+++',
      garantia: '10 Años en motor',
      caracteristicas: [
        'Tecnología AI DD (Inteligencia Artificial)',
        'Ciclo de lavado a vapor (Steam)',
        'Puerta de vidrio templado',
        'Diagnóstico inteligente (Smart Diagnosis)'
      ]
    },
    {
      id: 3,
      nombre: 'Televisor 4K 55"',
      descripcion: 'Smart TV, pantalla QLED, control por voz integrado.',
      precio: 450,
      imagenUrl: '/img/televisor.jpg',

      sku: 'TV-003-QLED',
      eficiencia: 'A',
      garantia: '5 Años en pantalla',
      caracteristicas: [
        'Pantalla QLED 4K 55"',
        'Control por voz integrado',
        'Smart TV con sistema de streaming',
        'Iluminación LED panorámica'
      ]
    },
    {
      id: 4,
      nombre: 'Aire Acondicionado',
      descripcion: '12000 BTU, silencioso, modo eco y wifi.',
      precio: 350,
      imagenUrl: '/img/aire.jpg',

      sku: 'AIR-004-12K',
      eficiencia: 'A',
      garantia: '5 Años en compresor',
      caracteristicas: [
        '12000 BTU',
        'Silencioso',
        'Modo Eco',
        'Conectividad Wi-Fi'
      ]
    },
    {
      id: 5,
      nombre: 'Cafetera Expresso',
      descripcion: 'Automática, espumador de leche y molinillo.',
      precio: 120,
      imagenUrl: '/img/cafetera.jpg',

      sku: 'CAF-005-AUT',
      eficiencia: 'A',
      garantia: '2 Años en motor',
      caracteristicas: [
        'Automática',
        'Espumador de leche',
        'Molinillo',
        'Conectividad Wi-Fi'
      ]
    },
    {
      id: 6,
      nombre: 'Horno Microondas',
      descripcion: 'Con grill, descongelado rápido y cerámica interior. Permite cocinar alimentos rápidamente, combinando potencia con eficiencia.',
      precio: 180,
      imagenUrl: '/img/microondas.jpg',

      sku: 'MIC-006-GRILL',
      eficiencia: 'A',
      garantia: '2 Años en motor',
      caracteristicas: [
        'Con Grill',
        'Descongelado rápido',
        'Cerámica interior',
        'Conectividad Wi-Fi'
      ]
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
