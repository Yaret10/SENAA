export interface EquipmentPage {
  slug: string;
  name: string;
  image: string;
  summary: string;
  headline: string;
  introduction: string;
  importance: string;
  benefits: { title: string; description: string }[];
  maintenance: string[];
  warningSigns: string[];
  closing: string;
}

export const EQUIPMENT_PAGES: EquipmentPage[] = [
  {
    slug: 'cocinas',
    name: 'Cocinas',
    image: '/images/Cocina2.png',
    summary: 'Diagnóstico, reparación y mantenimiento para una combustión segura y eficiente.',
    headline: 'Cuida tu cocina y cocina con tranquilidad',
    introduction: 'Revisamos cocinas que presentan fallas y realizamos mantenimiento preventivo para conservar su funcionamiento diario.',
    importance: 'Con el uso, los quemadores y conductos pueden acumular grasa o residuos. Una revisión ayuda a detectar conexiones deterioradas, mejorar la llama y reducir problemas de encendido antes de que afecten tu rutina.',
    benefits: [
      { title: 'Uso más seguro', description: 'La revisión de conexiones y la combustión permite detectar condiciones que requieren atención.' },
      { title: 'Mejor rendimiento', description: 'Quemadores limpios y bien regulados distribuyen mejor el calor.' },
      { title: 'Menos reparaciones imprevistas', description: 'Atender señales tempranas evita que una falla pequeña avance.' }
    ],
    maintenance: ['Inspección visual de conexiones y componentes', 'Limpieza de quemadores y zonas accesibles', 'Revisión del encendido y de la calidad de la llama', 'Prueba final de funcionamiento'],
    warningSigns: ['Olor a gas o llama amarilla', 'Quemadores que no encienden o se apagan', 'Calor irregular y hollín', 'Perillas o encendido que fallan'],
    closing: 'Si percibes olor a gas, cierra la llave de paso si es seguro hacerlo, ventila el lugar y solicita asistencia especializada.'
  },
  {
    slug: 'refrigeradoras',
    name: 'Refrigeradoras',
    image: '/images/Refri.webp',
    summary: 'Evita pérdida de frío, consumo excesivo y daños en el compresor.',
    headline: 'Protege tus alimentos y la vida útil de tu refrigeradora',
    introduction: 'Diagnosticamos fallas de enfriamiento y cuidamos los componentes que permiten mantener una temperatura estable.',
    importance: 'Cuando la ventilación, los sellos o los componentes de enfriamiento no trabajan bien, el equipo puede esforzarse más y consumir más energía. Revisarlo a tiempo ayuda a conservar los alimentos y a detectar fallas antes de que lleguen al compresor.',
    benefits: [
      { title: 'Temperatura estable', description: 'Un funcionamiento adecuado ayuda a mantener los alimentos en mejores condiciones.' },
      { title: 'Consumo controlado', description: 'Evitar esfuerzos innecesarios puede reducir el gasto eléctrico.' },
      { title: 'Cuidado del compresor', description: 'Detectar anomalías pronto reduce el riesgo de daños mayores.' }
    ],
    maintenance: ['Revisión de temperatura y ciclos de trabajo', 'Inspección de empaques y cierre de puertas', 'Limpieza de zonas de ventilación accesibles', 'Comprobación de drenaje y funcionamiento general'],
    warningSigns: ['No enfría de forma uniforme', 'Acumula hielo o agua', 'Emite ruidos nuevos', 'El motor trabaja casi sin detenerse'],
    closing: 'Si la refrigeradora deja de enfriar, evita abrirla repetidamente y solicita un diagnóstico para proteger tus alimentos.'
  },
  {
    slug: 'lavadoras',
    name: 'Lavadoras',
    image: '/images/lavadora.webp',
    summary: 'Atendemos fugas, vibraciones y fallas de bomba, motor o centrifugado.',
    headline: 'Mantén tu lavadora eficiente en cada ciclo',
    introduction: 'Reparamos averías y revisamos las piezas que intervienen en el llenado, lavado, drenaje y centrifugado.',
    importance: 'Los residuos de detergente, las obstrucciones y el desgaste pueden causar mal olor, fugas y vibraciones. Un mantenimiento periódico permite encontrar estas señales temprano y ayuda a conservar el desempeño del equipo.',
    benefits: [
      { title: 'Lavado consistente', description: 'El agua circula y drena como debe durante el ciclo.' },
      { title: 'Menos fugas', description: 'La revisión de mangueras y conexiones detecta pérdidas de agua.' },
      { title: 'Menor desgaste', description: 'Atender vibraciones evita exigir de más a piezas móviles.' }
    ],
    maintenance: ['Inspección de mangueras, conexiones y desagüe', 'Limpieza de filtros y zonas accesibles', 'Revisión de vibraciones y nivelación', 'Prueba de lavado, drenaje y centrifugado'],
    warningSigns: ['Deja agua al terminar', 'Vibra o golpea más de lo normal', 'Presenta fugas o malos olores', 'No centrifuga o detiene el ciclo'],
    closing: 'Si observas una fuga, cierra el suministro de agua y desconecta el equipo si puedes hacerlo de manera segura.'
  },
  {
    slug: 'lavasecas',
    name: 'Lavasecas',
    image: '/images/lavasecas.webp',
    summary: 'Mantenimiento para un lavado y secado eficiente, sin sobrecalentamiento.',
    headline: 'Cuida las dos funciones de tu lavaseca',
    introduction: 'Evaluamos el lavado y el secado como un sistema completo para que el equipo trabaje con buen rendimiento.',
    importance: 'Las lavasecas combinan agua, movimiento y calor en un solo aparato. La acumulación de pelusa o residuos y los problemas de ventilación pueden alargar los ciclos y exigir sus componentes. Revisar ambos procesos ayuda a detectar fallas antes de que se agraven.',
    benefits: [
      { title: 'Ciclos más eficientes', description: 'El equipo puede lavar y secar sin prolongar innecesariamente el tiempo de uso.' },
      { title: 'Control del calor', description: 'Una revisión ayuda a detectar temperaturas o ventilación anormales.' },
      { title: 'Cuidado de sensores', description: 'Identificar fallas de lectura evita ciclos incompletos o repetidos.' }
    ],
    maintenance: ['Revisión de filtros y zonas accesibles de ventilación', 'Inspección de mangueras y drenaje', 'Comprobación de sensores y controles', 'Prueba de ciclos de lavado y secado'],
    warningSigns: ['La ropa sale demasiado húmeda', 'Los ciclos tardan más de lo habitual', 'Aparece olor a quemado o calor excesivo', 'El equipo muestra errores frecuentes'],
    closing: 'Si notas olor a quemado o sobrecalentamiento, detén el uso del equipo y solicita una revisión.'
  },
  {
    slug: 'termas',
    name: 'Termas',
    image: '/images/termas.webp',
    summary: 'Revisión eléctrica, control de sarro, fugas y correcto calentamiento.',
    headline: 'Agua caliente con funcionamiento confiable',
    introduction: 'Revisamos y mantenemos termas para detectar fugas, acumulación de sarro y fallas de calentamiento.',
    importance: 'Los minerales del agua se pueden acumular con el tiempo y reducir el rendimiento. También conviene vigilar conexiones y controles eléctricos. Una revisión profesional ayuda a mantener una temperatura adecuada y a identificar condiciones que necesiten reparación.',
    benefits: [
      { title: 'Calentamiento estable', description: 'El equipo responde mejor a la temperatura esperada.' },
      { title: 'Menos pérdida de energía', description: 'Identificar acumulación de sarro y fallas ayuda a evitar esfuerzo adicional.' },
      { title: 'Uso más seguro', description: 'Las conexiones y controles reciben una revisión técnica.' }
    ],
    maintenance: ['Inspección de conexiones de agua y electricidad', 'Evaluación de sarro y componentes internos según el modelo', 'Revisión de controles y temperatura', 'Prueba de calentamiento y posibles fugas'],
    warningSigns: ['El agua tarda más en calentar', 'La temperatura cambia bruscamente', 'Hay goteo, humedad o ruidos', 'Se activa la protección eléctrica'],
    closing: 'Ante una fuga o una falla eléctrica, evita manipular la terma y solicita una revisión especializada.'
  }
];
