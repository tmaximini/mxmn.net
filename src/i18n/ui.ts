export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Meta
    'meta.title': 'mxmn technology — Ingeniería de Software en Valencia',
    'meta.description': 'Desarrollamos plataformas empresariales, aplicaciones móviles y soluciones con IA. Sistemas de producción que hacen funcionar negocios.',

    // Nav
    'nav.services': 'Soluciones',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',

    // Hero
    'hero.label': 'ERP · IA · E-Commerce · Integraciones',
    'hero.title': 'Sistemas que hacen funcionar negocios',
    'hero.subtitle': 'Diseñamos y construimos plataformas empresariales, soluciones con inteligencia artificial y sistemas de gestión a medida. Software de producción, no plantillas.',
    'hero.cta.primary': 'Hablemos de su proyecto',
    'hero.cta.secondary': 'Nuestras soluciones',

    // Services
    'services.label': 'Soluciones',
    'services.title': 'Lo que construimos',
    'services.subtitle': 'Sistemas a medida que resuelven problemas reales de negocio.',

    'services.platforms.title': 'Plataformas Empresariales',
    'services.platforms.description': 'ERP, intranets y sistemas de lógica de negocio diseñados para escalar con su empresa.',
    'services.mobile.title': 'Aplicaciones Móviles',
    'services.mobile.description': 'Apps nativas y multiplataforma para iOS y Android, integradas con sus sistemas existentes.',
    'services.management.title': 'Sistemas de Gestión',
    'services.management.description': 'Gestión de pedidos, inventario y automatización de flujos de trabajo operativos.',
    'services.commerce.title': 'Comercio Digital',
    'services.commerce.description': 'Plataformas e-commerce, portales B2B e integraciones de pago a medida.',
    'services.ai.title': 'Soluciones con IA',
    'services.ai.description': 'Automatización inteligente, pipelines de datos e integración de modelos de lenguaje en sus procesos.',
    'services.integrations.title': 'Integraciones & APIs',
    'services.integrations.description': 'Conexión entre sistemas, APIs REST y GraphQL, y automatización de flujos entre plataformas.',

    'services.platforms.detail': 'Diseñamos e implementamos plataformas empresariales completas: ERPs adaptados a su operativa, intranets que centralizan información y procesos, y sistemas de lógica de negocio que automatizan las reglas específicas de su empresa. Arquitectura pensada para crecer con usted.',
    'services.mobile.detail': 'Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android. Desde apps internas para equipos de campo hasta productos digitales orientados al cliente final, siempre integradas con sus sistemas backend existentes.',
    'services.management.detail': 'Construimos sistemas de gestión operativa a medida: gestión de pedidos, control de inventario, planificación de recursos y automatización de flujos de trabajo. Soluciones que eliminan procesos manuales y reducen errores operativos.',
    'services.commerce.detail': 'Implementamos plataformas de comercio digital completas: tiendas online B2C, portales B2B con catálogos y precios personalizados, pasarelas de pago integradas y conexión con ERPs y sistemas logísticos.',
    'services.ai.detail': 'Integramos inteligencia artificial en sus procesos de negocio: automatización inteligente de tareas, pipelines de procesamiento de datos, integración de modelos de lenguaje (LLM) y sistemas de análisis predictivo adaptados a sus datos.',
    'services.integrations.detail': 'Conectamos sus sistemas entre sí y con el exterior: diseño e implementación de APIs REST y GraphQL, integraciones con servicios de terceros, middleware de sincronización de datos y automatización de flujos entre plataformas.',

    'services.page.title': 'Nuestras soluciones',
    'services.page.subtitle': 'Capacidades de ingeniería para cada fase de su negocio digital.',
    'services.page.cta': 'Hablemos de su proyecto',

    // Clients
    'clients.label': 'Nuestro equipo ha colaborado con',

    // About
    'about.label': 'Nosotros',
    'about.title': 'Tecnología que sostiene operaciones reales',
    'about.description': 'mxmn technology es una empresa de ingeniería de software con sede en Valencia. No hacemos páginas web — construimos los sistemas sobre los que empresas operan cada día.',
    'about.point1': 'Más de 10 años de experiencia',
    'about.point2': 'Arquitectura de sistemas complejos',
    'about.point3': 'Equipos senior full-stack',
    'about.point4': 'Operaciones y soporte continuo',
    'about.point5': 'Clientes en todo el mundo',
    'about.point6': 'Optimización de procesos y productividad',

    'about.stat1.value': '10+',
    'about.stat1.label': 'Años de experiencia',
    'about.stat2.value': '50+',
    'about.stat2.label': 'Sistemas en producción',
    'about.stat3.value': 'Enterprise',
    'about.stat3.label': 'Arquitectura escalable',
    'about.stat4.value': 'Valencia',
    'about.stat4.label': 'Avda. Burjassot 11',

    // Contact
    'contact.label': 'Contacto',
    'contact.title': 'Hablemos de su próximo proyecto',
    'contact.subtitle': 'Cuéntenos qué necesita. Le respondemos en menos de 24 horas.',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.company': 'Empresa',
    'contact.message': 'Cuéntenos sobre su proyecto',
    'contact.submit': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': 'Mensaje enviado. Le responderemos pronto.',
    'contact.error': 'Error al enviar. Inténtelo de nuevo o escríbanos a info@mxmn.net.',
    'contact.info.title': 'Información de contacto',
    'contact.info.address': 'Avda. Burjassot 11, 46009 Valencia',
    'contact.info.email': 'info@mxmn.net',
    'contact.info.map': 'Ver en Google Maps',

    // Footer
    'footer.description': 'Sistemas de producción para empresas.',
    'footer.services': 'Soluciones',
    'footer.company': 'Empresa',
    'footer.tools': 'Herramientas gratuitas',
    'footer.tools.invoice': 'Generador de facturas',
    'footer.legal': 'Legal',
    'footer.legal.notice': 'Aviso legal',
    'footer.legal.privacy': 'Privacidad',
    'footer.legal.cookies': 'Cookies',
    'footer.copyright': '© 2026 mxmn technology SL. Todos los derechos reservados.',
  },
  en: {
    // Meta
    'meta.title': 'mxmn technology — Software Engineering in Valencia',
    'meta.description': 'We build enterprise platforms, mobile applications, and AI-powered solutions. Production systems that run businesses.',

    // Nav
    'nav.services': 'Solutions',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's Talk",

    // Hero
    'hero.label': 'ERP · AI · E-Commerce · Integrations',
    'hero.title': 'Systems that run businesses',
    'hero.subtitle': 'We design and build enterprise platforms, AI-powered solutions, and custom management systems. Production software, not templates.',
    'hero.cta.primary': "Let's talk about your project",
    'hero.cta.secondary': 'Our solutions',

    // Services
    'services.label': 'Solutions',
    'services.title': 'What we build',
    'services.subtitle': 'Custom systems that solve real business problems.',

    'services.platforms.title': 'Enterprise Platforms',
    'services.platforms.description': 'ERP, intranets, and custom business logic systems designed to scale with your company.',
    'services.mobile.title': 'Mobile Applications',
    'services.mobile.description': 'Native and cross-platform apps for iOS and Android, integrated with your existing systems.',
    'services.management.title': 'Management Systems',
    'services.management.description': 'Order management, inventory tracking, and operational workflow automation.',
    'services.commerce.title': 'Digital Commerce',
    'services.commerce.description': 'E-commerce platforms, B2B portals, and custom payment integrations.',
    'services.ai.title': 'AI-Powered Solutions',
    'services.ai.description': 'Intelligent automation, data pipelines, and language model integration into your processes.',
    'services.integrations.title': 'Integrations & APIs',
    'services.integrations.description': 'System interconnection, REST and GraphQL APIs, and cross-platform workflow automation.',

    'services.platforms.detail': 'We design and implement complete enterprise platforms: ERPs tailored to your operations, intranets that centralize information and processes, and business logic systems that automate your company-specific rules. Architecture built to scale with you.',
    'services.mobile.detail': 'We develop native and cross-platform mobile applications for iOS and Android. From internal apps for field teams to customer-facing digital products, always integrated with your existing backend systems.',
    'services.management.detail': 'We build custom operational management systems: order management, inventory control, resource planning, and workflow automation. Solutions that eliminate manual processes and reduce operational errors.',
    'services.commerce.detail': 'We implement complete digital commerce platforms: B2C online stores, B2B portals with custom catalogs and pricing, integrated payment gateways, and connections to ERPs and logistics systems.',
    'services.ai.detail': 'We integrate artificial intelligence into your business processes: intelligent task automation, data processing pipelines, language model (LLM) integration, and predictive analytics systems tailored to your data.',
    'services.integrations.detail': 'We connect your systems to each other and the outside world: REST and GraphQL API design and implementation, third-party service integrations, data synchronization middleware, and cross-platform workflow automation.',

    'services.page.title': 'Our solutions',
    'services.page.subtitle': 'Engineering capabilities for every phase of your digital business.',
    'services.page.cta': "Let's talk about your project",

    // Clients
    'clients.label': 'Our team has worked with',

    // About
    'about.label': 'About',
    'about.title': 'Technology that sustains real operations',
    'about.description': "mxmn technology is a software engineering company based in Valencia. We don't make websites — we build the systems businesses run on every day.",
    'about.point1': '10+ years of experience',
    'about.point2': 'Complex systems architecture',
    'about.point3': 'Senior full-stack teams',
    'about.point4': 'Ongoing operations & support',
    'about.point5': 'Worldwide clients',
    'about.point6': 'Process & productivity optimization',

    'about.stat1.value': '10+',
    'about.stat1.label': 'Years of experience',
    'about.stat2.value': '50+',
    'about.stat2.label': 'Production systems',
    'about.stat3.value': 'Enterprise',
    'about.stat3.label': 'Scalable architecture',
    'about.stat4.value': 'Valencia',
    'about.stat4.label': 'Avda. Burjassot 11',

    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's discuss your next project",
    'contact.subtitle': 'Tell us what you need. We respond within 24 hours.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.message': 'Tell us about your project',
    'contact.submit': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent. We\'ll get back to you soon.',
    'contact.error': 'Failed to send. Please try again or email info@mxmn.net.',
    'contact.info.title': 'Contact information',
    'contact.info.address': 'Avda. Burjassot 11, 46009 Valencia',
    'contact.info.email': 'info@mxmn.net',
    'contact.info.map': 'View on Google Maps',

    // Footer
    'footer.description': 'Production systems for businesses.',
    'footer.services': 'Solutions',
    'footer.company': 'Company',
    'footer.tools': 'Free tools',
    'footer.tools.invoice': 'Invoice generator',
    'footer.legal': 'Legal',
    'footer.legal.notice': 'Legal notice',
    'footer.legal.privacy': 'Privacy',
    'footer.legal.cookies': 'Cookies',
    'footer.copyright': '© 2026 mxmn technology SL. All rights reserved.',
  },
} as const;
