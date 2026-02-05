// ============================================
// CONSTIVAL - Services Data
// ============================================

export interface ServiceStep {
  number: number;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  accionistas: string;
  price: number;
  popular?: boolean;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  steps?: ServiceStep[];
  pricing?: PricingPlan[];
}

export interface Requirement {
  id: string;
  title: string;
  description: string;
  icon: string;
  required: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// ============================================
// Constitución de SAS - Pasos del Proceso
// ============================================

export const sasConstitutionSteps: ServiceStep[] = [
  {
    number: 1,
    title: "Asesoría Inicial",
    description: "Reunión de consultoría para entender tu modelo de negocio y definir la estructura societaria ideal."
  },
  {
    number: 2,
    title: "Reserva de Denominación",
    description: "Gestionamos la reserva del nombre de tu empresa ante la Superintendencia de Compañías."
  },
  {
    number: 3,
    title: "Elaboración de Estatutos",
    description: "Redactamos los estatutos sociales personalizados según tus necesidades específicas."
  },
  {
    number: 4,
    title: "Revisión y Aprobación",
    description: "Te enviamos los documentos para tu revisión y realizamos los ajustes necesarios."
  },
  {
    number: 5,
    title: "Firma Electrónica",
    description: "Firmamos el contrato social con certificados electrónicos de manera 100% remota."
  },
  {
    number: 6,
    title: "Inscripción en Registro Mercantil",
    description: "Tramitamos la inscripción ante el Registro Mercantil y obtenemos la escritura."
  },
  {
    number: 7,
    title: "Obtención del RUC",
    description: "Gestionamos la obtención del RUC ante el SRI con tus actividades económicas."
  },
  {
    number: 8,
    title: "Entrega de Documentos",
    description: "Te entregamos toda la documentación legal: escritura, nombramientos y RUC."
  }
];

// ============================================
// Planes de Precios - Constitución de SAS
// ============================================

export const sasPricingPlans: PricingPlan[] = [
  {
    id: "plan-1",
    name: "Emprendedor",
    accionistas: "1 Accionista",
    price: 149,
    features: [
      "Constitución completa de SAS",
      "Estatutos personalizados",
      "Reserva de denominación",
      "Inscripción en Registro Mercantil",
      "Obtención de RUC",
      "Nombramiento de Gerente",
      "Asesoría inicial incluida",
      "Soporte por WhatsApp"
    ]
  },
  {
    id: "plan-2",
    name: "Startup",
    accionistas: "2-3 Accionistas",
    price: 199,
    popular: true,
    features: [
      "Todo lo del plan Emprendedor",
      "Pacto de accionistas básico",
      "Definición de participaciones",
      "Acta de junta constitutiva",
      "Nombramiento de Presidente",
      "Asesoría en estructura societaria",
      "Revisión de estatutos ilimitada",
      "Soporte prioritario"
    ]
  },
  {
    id: "plan-3",
    name: "Crecimiento",
    accionistas: "4-6 Accionistas",
    price: 249,
    features: [
      "Todo lo del plan Startup",
      "Pacto de accionistas completo",
      "Cláusulas de vesting",
      "Estructura de gobernanza",
      "Documento de inversión",
      "Asesoría fiscal inicial",
      "Acuerdos de confidencialidad",
      "Llamada de seguimiento"
    ]
  },
  {
    id: "plan-4",
    name: "Enterprise",
    accionistas: "7+ Accionistas",
    price: 349,
    features: [
      "Todo lo del plan Crecimiento",
      "Estructura compleja de gobernanza",
      "Múltiples clases de acciones",
      "Derechos de voto diferenciados",
      "Asesoría legal continua (30 días)",
      "Revisión de contratos comerciales",
      "Onboarding de socios",
      "Soporte VIP dedicado"
    ]
  }
];

// ============================================
// Requisitos para Constitución de SAS
// ============================================

export const sasRequirements: Requirement[] = [
  {
    id: "req-1",
    title: "Firma Electrónica (.p12)",
    description: "Certificado de firma electrónica vigente emitido por el Registro Civil, Security Data u otra entidad certificadora autorizada.",
    icon: "key-round",
    required: true
  },
  {
    id: "req-2",
    title: "Cédula de Identidad",
    description: "Copia a color de la cédula de ciudadanía de todos los accionistas. Para extranjeros: pasaporte y visa vigente.",
    icon: "id-card",
    required: true
  },
  {
    id: "req-3",
    title: "Correo Electrónico",
    description: "Correo electrónico personal de cada accionista para recibir notificaciones del proceso.",
    icon: "mail",
    required: true
  },
  {
    id: "req-4",
    title: "Planilla de Servicios Básicos",
    description: "Planilla de luz, agua o teléfono (máximo 3 meses de antigüedad) del domicilio de la empresa.",
    icon: "file-text",
    required: true
  },
  {
    id: "req-5",
    title: "Nombre de la Empresa",
    description: "Tres opciones de nombre para tu empresa. Verificamos disponibilidad y reservamos el aprobado.",
    icon: "building-2",
    required: true
  },
  {
    id: "req-6",
    title: "Objeto Social",
    description: "Descripción de las actividades que realizará tu empresa. Te ayudamos a redactarlo correctamente.",
    icon: "briefcase",
    required: true
  }
];

// ============================================
// Preguntas Frecuentes (FAQs)
// ============================================

export const sasFAQs: FAQ[] = [
  {
    id: "faq-1",
    question: "¿Cuánto cuesta realmente constituir una SAS en Ecuador?",
    answer: "El costo total incluye nuestros honorarios ($149-$399 + IVA según el número de accionistas) más las tasas gubernamentales (aproximadamente $80-120). No hay costos ocultos. El precio final depende únicamente del número de accionistas. Ofrecemos el mejor precio del mercado con servicio premium.",
    category: "dinero"
  },
  {
    id: "faq-2",
    question: "¿Cuál es la diferencia entre tener RUC personal y una empresa constituida?",
    answer: "Con RUC personal (RIMPE), respondes con tu patrimonio personal ante cualquier deuda o problema legal. Con una SAS, tu responsabilidad se limita al capital aportado, proteges tus bienes personales, puedes tener socios, emitir facturas como empresa y acceder a mejores oportunidades de negocio y financiamiento.",
    category: "estructura"
  },
  {
    id: "faq-3",
    question: "¿Cuánto voy a pagar de impuestos con mi SAS?",
    answer: "Las SAS pagan Impuesto a la Renta del 25% sobre las utilidades (no sobre ingresos). Si reinviertes las utilidades, puedes reducir hasta 10 puntos. También pagas IVA (12%) que cobras a tus clientes. Te asesoramos para optimizar tu carga tributaria legalmente desde el inicio.",
    category: "impuestos"
  },
  {
    id: "faq-4",
    question: "¿Cuánto tiempo toma constituir una SAS en Ecuador?",
    answer: "El proceso completo toma entre 3 a 5 días hábiles una vez que tengas todos los requisitos listos. El trámite es 100% electrónico gracias al sistema de la Superintendencia de Compañías, eliminando la necesidad de notarías y trámites presenciales.",
    category: "tiempo"
  },
  {
    id: "faq-5",
    question: "¿Necesito tener dinero en el banco para constituir la SAS?",
    answer: "No. A diferencia de otros tipos de compañías, la SAS no requiere capital mínimo ni depósito bancario previo. El capital puede ser simbólico ($1) y no necesitas demostrar solvencia económica para constituirla.",
    category: "dinero"
  },
  {
    id: "faq-6",
    question: "¿Puedo ser el único dueño de una SAS?",
    answer: "Sí. La SAS es el único tipo de sociedad en Ecuador que permite tener un solo accionista. Puedes ser dueño, gerente y presidente al mismo tiempo, manteniendo el control total de tu empresa.",
    category: "estructura"
  },
  {
    id: "faq-7",
    question: "¿Qué pasa si mi SAS no genera ingresos los primeros meses?",
    answer: "Si tu SAS no tiene actividad económica, solo debes presentar declaraciones en cero al SRI (mensuales de IVA y anual de Renta). No hay multas por no generar ingresos. Te recomendamos mantener la contabilidad al día para evitar problemas futuros.",
    category: "operacion"
  },
  {
    id: "faq-8",
    question: "¿Cómo puedo agregar socios a mi SAS después de constituirla?",
    answer: "Es muy sencillo. Puedes aumentar el capital y emitir nuevas acciones, o los accionistas existentes pueden vender parte de sus acciones. Nosotros gestionamos todo el proceso de reforma de estatutos e inscripción. El costo es menor que la constitución inicial.",
    category: "estructura"
  }
];

// ============================================
// Otros Servicios
// ============================================

export const allServices: Service[] = [
  {
    id: "constitucion-sas",
    title: "Constitución de SAS",
    slug: "crear-sas-ecuador",
    shortDescription: "Constituye tu Sociedad por Acciones Simplificada en 3-5 días de forma 100% digital.",
    longDescription: "La SAS es la estructura societaria más flexible y moderna del Ecuador. Permite un solo accionista, no requiere capital mínimo y se constituye completamente en línea.",
    icon: "building-2",
    steps: sasConstitutionSteps,
    pricing: sasPricingPlans
  },
  {
    id: "reformas-estatutarias",
    title: "Reformas Estatutarias",
    slug: "reformas-estatutos",
    shortDescription: "Modifica los estatutos de tu empresa: objeto social, domicilio, capital y más.",
    longDescription: "Actualizamos los estatutos de tu compañía para reflejar cambios en el objeto social, domicilio, aumento de capital, cambio de denominación y cualquier otra modificación legal.",
    icon: "file-edit",
    steps: [
      { number: 1, title: "Cambio de Objeto Social", description: "Ampliación o modificación de actividades económicas." },
      { number: 2, title: "Cambio de Domicilio", description: "Traslado de la sede legal a otra ciudad o dirección." },
      { number: 3, title: "Aumento de Capital", description: "Incremento del capital social para nuevas inversiones." },
      { number: 4, title: "Cambio de Denominación", description: "Modificación del nombre comercial de la empresa." }
    ]
  },
  {
    id: "nombramientos",
    title: "Nombramientos",
    slug: "nombramientos",
    shortDescription: "Gestiona renovaciones, cambios y renuncias de administradores de tu compañía.",
    longDescription: "Tramitamos todo tipo de nombramientos societarios: renovación de gerente, cambio de representante legal, renuncia de administradores e inscripción de nuevos directivos.",
    icon: "user-check",
    steps: [
      { number: 1, title: "Renovación de Gerente", description: "Extensión del período del gerente actual." },
      { number: 2, title: "Cambio de Representante Legal", description: "Designación de un nuevo gerente o presidente." },
      { number: 3, title: "Renuncia de Administrador", description: "Formalización de la salida de un directivo." }
    ]
  },
  {
    id: "transferencia-acciones",
    title: "Transferencia de Acciones",
    slug: "transferencia-acciones",
    shortDescription: "Compra, venta o cesión de acciones entre accionistas o a terceros.",
    longDescription: "Facilitamos la transferencia de participaciones societarias con todos los requisitos legales, incluyendo valoración, contratos de compraventa y actualización del libro de accionistas.",
    icon: "arrow-right-left"
  }
];

// ============================================
// Navigation Items
// ============================================

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export const navigationItems: NavItem[] = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Precios", href: "/crear-sas-ecuador#precios" },
  { label: "Requisitos", href: "/crear-sas-ecuador#requisitos" },
  { label: "FAQ", href: "/crear-sas-ecuador#faq" },
];

export const ctaButton: NavItem = {
  label: "Iniciar SAS",
  href: "/crear-sas-ecuador",
  isButton: true
};
