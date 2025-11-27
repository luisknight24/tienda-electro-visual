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

  categoria: string; // 'Linea Blanca', 'Cocina', 'TV', 'Climatización', 'Pequeños'
  precioOriginal?: number; // Solo si está en oferta (el precio anterior)
}

@Injectable({
  providedIn: 'root',
})
export class Productos {
  private listaProductos: Producto[] = [
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
      ],
      categoria: 'Linea Blanca',
      precioOriginal: 1000
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
      ],
      categoria: 'Linea Blanca'
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
      ],
      categoria: 'TV'
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
      ],
      categoria: 'Climatización'
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
      ],
      categoria: 'Cocina'
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
      ],
      categoria: 'Cocina'
    },
    {
      id: 7,
      nombre: 'Secadora a Gas',
      descripcion: 'Carga frontal 20kg, sensor de humedad y ciclo antiarrugas.',
      precio: 550,
      imagenUrl: '/img/secadora-gas.jpg',
      sku: 'SEC-007-GAS',
      eficiencia: 'A+',
      garantia: '1 Año',
      caracteristicas: [
        'Sensor Dry',
        'Tambor de acero inoxidable',
        '5 niveles de temperatura',
        'Luz interior'
      ],
      categoria: 'Linea Blanca',
      precioOriginal: 650
    },
    {
      id: 8,
      nombre: 'Lavavajillas 12 Cubiertos',
      descripcion: 'Panel táctil oculto, acero inoxidable y 6 programas de lavado.',
      precio: 480,
      imagenUrl: '/img/lavavajillas.jpg',
      sku: 'LAV-008-INOX',
      eficiencia: 'A++',
      garantia: '2 Años',
      caracteristicas: [
        'Inicio diferido',
        'Media carga',
        'Silencioso (48dB)',
        'Cesta superior ajustable'
      ],
      categoria: 'Linea Blanca'
    },
    {
      id: 9,
      nombre: 'Congelador Horizontal',
      descripcion: '250 Litros, función dual (congela/enfría), cerradura con llave.',
      precio: 320,
      imagenUrl: '/img/congelador.jpg',
      sku: 'CON-009-HOR',
      eficiencia: 'A',
      garantia: '3 Años en compresor',
      caracteristicas: [
        'Interior de aluminio',
        'Ruedas de desplazamiento',
        'Drenaje frontal',
        'Control de temperatura externo'
      ],
      categoria: 'Linea Blanca',
      precioOriginal: 400
    },
    {
      id: 10,
      nombre: 'Centro de Lavado',
      descripcion: 'Torre lavadora y secadora a gas, optimiza espacio, 20kg.',
      precio: 1100,
      imagenUrl: '/img/centro-lavado.jpg',
      sku: 'CEN-010-TOR',
      eficiencia: 'A+',
      garantia: '10 Años en motor',
      caracteristicas: [
        'Ciclos rápidos',
        'Dispensador automático',
        'Controles intuitivos',
        'Ahorro de espacio'
      ],
      categoria: 'Linea Blanca',
      precioOriginal: 1350
    },
    {
      id: 11,
      nombre: 'Cocina 6 Hornillas',
      descripcion: 'Encendido eléctrico, horno con grill y quemadores triple llama.',
      precio: 420,
      imagenUrl: '/img/cocina-6h.png',
      sku: 'COC-011-6H',
      eficiencia: 'B',
      garantia: '1 Año',
      caracteristicas: [
        'Quemadores sellados',
        'Parrillas de hierro fundido',
        'Vidrio panorámico en horno',
        'Timer mecánico'
      ],
      categoria: 'Cocina',
      precioOriginal: 500
    },
    {
      id: 12,
      nombre: 'Campana Extractora',
      descripcion: '90cm, acero inoxidable, filtros de carbón activado.',
      precio: 150,
      imagenUrl: '/img/campana.jpg',
      sku: 'CAM-012-EXT',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        '3 velocidades',
        'Iluminación LED',
        'Filtros lavables',
        'Doble función (extractora/purificadora)'
      ],
      categoria: 'Cocina'
    },
    {
      id: 13,
      nombre: 'Horno Empotrable',
      descripcion: 'Eléctrico, convección, acabado espejo y panel touch.',
      precio: 380,
      imagenUrl: '/img/horno-emp.jpg',
      sku: 'HOR-013-EMP',
      eficiencia: 'A',
      garantia: '2 Años',
      caracteristicas: [
        'Sistema de convección',
        'Timer digital',
        'Bloqueo de seguridad',
        'Bandeja recoge grasas'
      ],
      categoria: 'Cocina',
      precioOriginal: 450
    },
    {
      id: 14,
      nombre: 'Encimera a Inducción',
      descripcion: '4 zonas de cocción, vidrio vitrocerámico negro, control táctil.',
      precio: 290,
      imagenUrl: '/img/encimera.jpg',
      sku: 'ENC-014-IND',
      eficiencia: 'A++',
      garantia: '2 Años',
      caracteristicas: [
        'Detector de ollas',
        'Indicador de calor residual',
        'Temporizador independiente',
        'Boost (calentamiento rápido)'
      ],
      categoria: 'Cocina',
      precioOriginal: 350
    },
    {
      id: 15,
      nombre: 'Soundbar 5.1',
      descripcion: 'Barra de sonido con subwoofer inalámbrico y sonido envolvente.',
      precio: 220,
      imagenUrl: '/img/soundbar.jpg',
      sku: 'SND-015-51',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        'Dolby Digital',
        'Conexión Bluetooth 5.0',
        'Entrada HDMI ARC',
        'Modo Cine/Música'
      ],
      categoria: 'Audio'
    },
    {
      id: 16,
      nombre: 'TV OLED 65"',
      descripcion: 'Negros perfectos, contraste infinito, ideal para gaming.',
      precio: 1450,
      imagenUrl: '/img/tv-oled.jpg',
      sku: 'TV-016-OLED',
      eficiencia: 'A',
      garantia: '3 Años panel',
      caracteristicas: [
        '120Hz nativos',
        'HDMI 2.1',
        'Procesador IA',
        'Dolby Vision & Atmos'
      ],
      categoria: 'TV',
      precioOriginal: 1800
    },
    {
      id: 17,
      nombre: 'Proyector Full HD',
      descripcion: '3000 lúmenes, portátil, conexión HDMI y USB.',
      precio: 190,
      imagenUrl: '/img/proyector.jpg',
      sku: 'PRO-017-FHD',
      eficiencia: 'B',
      garantia: '1 Año',
      caracteristicas: [
        'Resolución nativa 1080p',
        'Corrección trapezoidal',
        'Altavoz integrado',
        'Vida útil 30,000 horas'
      ],
      categoria: 'TV'
    },
    {
      id: 18,
      nombre: 'Parlante Bluetooth',
      descripcion: 'Resistente al agua IPX7, batería de 12 horas, sonido 360.',
      precio: 85,
      imagenUrl: '/img/parlante.jpeg',
      sku: 'SPK-018-BT',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        'Waterproof IPX7',
        'PartyBoost',
        'Carga USB-C',
        'Graves profundos'
      ],
      categoria: 'Audio',
      precioOriginal: 110
    },
    {
      id: 19,
      nombre: 'Licuadora Industrial',
      descripcion: 'Motor de alta potencia 2HP, vaso de tritan irrompible.',
      precio: 130,
      imagenUrl: '/img/licuadora.jpg',
      sku: 'LIC-019-IND',
      eficiencia: 'A',
      garantia: '2 Años motor',
      caracteristicas: [
        'Cuchillas de acero japonés',
        'Velocidad variable',
        'Función pulso',
        'Protección sobrecalentamiento'
      ],
      categoria: 'Cocina',
      precioOriginal: 160
    },
    {
      id: 20,
      nombre: 'Freidora de Aire',
      descripcion: '5.5 Litros, digital, cocina sin aceite, fácil limpieza.',
      precio: 95,
      imagenUrl: '/img/freidora.jpg',
      sku: 'AIR-020-FRY',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        '8 programas preestablecidos',
        'Cesta antiadherente',
        'Apagado automático',
        'Pantalla LED táctil'
      ],
      categoria: 'Cocina',
      precioOriginal: 120
    },
    {
      id: 21,
      nombre: 'Batidora Pedestal',
      descripcion: 'Bowl de acero inoxidable 5L, acción planetaria, incluye ganchos.',
      precio: 160,
      imagenUrl: '/img/batidora.jpg',
      sku: 'BAT-021-PED',
      eficiencia: 'A',
      garantia: '2 Años',
      caracteristicas: [
        '10 velocidades',
        'Cabezal inclinable',
        'Incluye batidor plano, globo y gancho',
        'Protector anti-salpicaduras'
      ],
      categoria: 'Cocina'
    },
    {
      id: 22,
      nombre: 'Olla Arrocera',
      descripcion: 'Multiusos 1.8L, función sofrito y vaporera externa.',
      precio: 45,
      imagenUrl: '/img/arrocera.jpg',
      sku: 'OLL-022-ARR',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        'Recubrimiento antiadherente',
        'Mantiene caliente',
        'Tapa de vidrio templado',
        'Incluye taza y cuchara'
      ],
      categoria: 'Cocina'
    },
    {
      id: 23,
      nombre: 'Plancha a Vapor',
      descripcion: 'Base de cerámica, golpe de vapor vertical, auto limpieza.',
      precio: 35,
      imagenUrl: '/img/plancha.jpg',
      sku: 'PLA-023-VAP',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        'Anti-goteo',
        'Cable giratorio 360°',
        'Tanque 300ml',
        'Punta de precisión'
      ],
      categoria: 'Linea Blanca'
    },
    {
      id: 24,
      nombre: 'Aspiradora Robot',
      descripcion: 'Navegación inteligente, barre, aspira y trapea, control app.',
      precio: 250,
      imagenUrl: '/img/aspiradora.jpg',
      sku: 'ASP-024-ROB',
      eficiencia: 'A+',
      garantia: '1 Año',
      caracteristicas: [
        'Mapeo de habitaciones',
        'Retorno automático a base',
        'Sensores anti-caída',
        'Compatible con Alexa/Google'
      ],
      categoria: 'Linea Blanca',
      precioOriginal: 320
    },
    {
      id: 25,
      nombre: 'Ventilador Torre',
      descripcion: 'Diseño delgado, control remoto, oscilación amplia, temporizador.',
      precio: 60,
      imagenUrl: '/img/ventilador.jpg',
      sku: 'VEN-025-TWR',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        '3 modos de viento',
        'Silencioso',
        'Asa de transporte',
        'Pantalla LED temperatura'
      ],
      categoria: 'Climatización'
    },
    {
      id: 26,
      nombre: 'Calefactor Eléctrico',
      descripcion: 'Cerámico, portátil, termostato ajustable, protección vuelco.',
      precio: 40,
      imagenUrl: '/img/calefactor.jpg',
      sku: 'CAL-026-ELE',
      eficiencia: 'B',
      garantia: '1 Año',
      caracteristicas: [
        'Calentamiento rápido',
        'Oscilación 70°',
        'Protección sobrecalentamiento',
        'Asa fría al tacto'
      ],
      categoria: 'Climatización'
    },
    {
      id: 27,
      nombre: 'Deshumidificador',
      descripcion: 'Compacto, 10L/día, ideal para prevenir moho y humedad.',
      precio: 140,
      imagenUrl: '/img/deshumidificador.jpg',
      sku: 'DES-027-10L',
      eficiencia: 'A',
      garantia: '2 Años',
      caracteristicas: [
        'Sensor de humedad',
        'Drenaje continuo opcional',
        'Filtro lavable',
        'Silencioso'
      ],
      categoria: 'Climatización',
      precioOriginal: 180
    },
    {
      id: 28,
      nombre: 'Purificador de Aire',
      descripcion: 'Filtro HEPA H13, elimina 99.9% de alérgenos y polvo.',
      precio: 110,
      imagenUrl: '/img/purificador.jpg',
      sku: 'PUR-028-AIR',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        'Sensor de calidad de aire',
        'Modo noche',
        'Indicador cambio filtro',
        '3 velocidades'
      ],
      categoria: 'Climatización',
      precioOriginal: 140
    },
    {
      id: 29,
      nombre: 'Waflera Doble',
      descripcion: 'Estilo belga, rotación 180° para cocción uniforme.',
      precio: 55,
      imagenUrl: '/img/waflera.jpeg',
      sku: 'WAF-029-DBL',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        'Placas antiadherentes',
        'Luces indicadoras',
        'Mango frío',
        'Bandeja de goteo'
      ],
      categoria: 'Cocina'
    },
    {
      id: 30,
      nombre: 'Sanduchera Grill',
      descripcion: 'Placas tipo parrilla, apertura 180°, acero inoxidable.',
      precio: 40,
      imagenUrl: '/img/sanduchera.jpg',
      sku: 'SAN-030-GRL',
      eficiencia: 'A',
      garantia: '1 Año',
      caracteristicas: [
        'Superficie antiadherente',
        'Ajuste de altura',
        'Recipiente para grasa',
        'Cierre de seguridad'
      ],
      categoria: 'Cocina'
    }
  ];

  constructor() { }

  obtenerTodos(): Producto[] {
    return this.listaProductos;
  }

  obtenerDestacados(): Producto[] {
    return this.listaProductos.slice(0, 8);
  }

  obtenerOfertas(): Producto[] {
    return this.listaProductos.filter(p => p.precioOriginal);
  }

  obtenerCategoriasUnicas(): string[] {
    // 1. Mapeamos para obtener solo los strings de categoría
    const categorias = this.listaProductos.map(p => p.categoria);
    // 2. Usamos Set para eliminar duplicados y lo convertimos a Array
    return [...new Set(categorias)];
  }

  obtenerPorCategoria(cat: string): Producto[] {
    return this.listaProductos.filter(p => p.categoria === cat);
  }

  obtenerPorId(id: number): Producto | undefined {
    return this.listaProductos.find(p => p.id === id);
  }
}
