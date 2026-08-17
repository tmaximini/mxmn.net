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
    'meta.description': 'Plataformas empresariales, agentes de IA y sistemas de gestión a medida. Software de producción que hace funcionar negocios — desde Valencia.',
    'meta.solutions.title': 'Soluciones — mxmn technology',
    'meta.solutions.description': 'Plataformas empresariales, apps móviles, IA, comercio digital, integraciones y sistemas de gestión a medida.',

    // Nav
    'nav.services': 'Soluciones',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',

    // Hero
    'hero.meta': 'mxmn technology — est. 2016 — valencia',
    'hero.title.pre': 'Software que',
    'hero.title.accent': 'trabaja',
    'hero.title.post': 'por su negocio.',
    'hero.subtitle': 'Plataformas empresariales, agentes de IA y sistemas de gestión — diseñados, construidos y operados por ingenieros senior. Sin plantillas. Sin humo.',
    'hero.cta.primary': 'Hablemos de su proyecto',
    'hero.cta.secondary': 'Qué construimos',
    'hero.label': 'ERP · Agentes de IA · E-Commerce · Integraciones',

    // Services
    'services.label': 'Qué hacemos',
    'services.title': 'Seis cosas que hacemos bien',
    'services.subtitle': 'Sistemas a medida, en producción, con resultados medibles.',

    'services.platforms.title': 'Plataformas Empresariales',
    'services.platforms.description': 'ERPs, intranets y lógica de negocio adaptados a cómo trabaja su empresa — no al revés.',
    'services.mobile.title': 'Aplicaciones Móviles',
    'services.mobile.description': 'Apps nativas y multiplataforma para iOS y Android, de la idea al App Store.',
    'services.management.title': 'Sistemas de Gestión',
    'services.management.description': 'Pedidos, inventario y flujos operativos automatizados. Adiós al Excel.',
    'services.commerce.title': 'Comercio Digital',
    'services.commerce.description': 'Tiendas B2C, portales B2B y pagos conectados a su ERP.',
    'services.ai.title': 'Soluciones con IA',
    'services.ai.description': 'Agentes y automatización con LLMs integrados en sus procesos — en producción, con resultados medidos.',
    'services.integrations.title': 'Integraciones & APIs',
    'services.integrations.description': 'APIs REST y GraphQL, middleware y sincronización: sus sistemas, por fin hablando entre sí.',

    'services.platforms.detail': 'Diseñamos e implementamos plataformas empresariales completas: ERPs adaptados a su operativa, intranets que centralizan información y procesos, y sistemas de lógica de negocio que automatizan las reglas específicas de su empresa. Arquitectura pensada para crecer con usted.',
    'services.mobile.detail': 'Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android. Desde apps internas para equipos de campo hasta productos digitales orientados al cliente final, siempre integradas con sus sistemas backend existentes.',
    'services.management.detail': 'Construimos sistemas de gestión operativa a medida: gestión de pedidos, control de inventario, planificación de recursos y automatización de flujos de trabajo. Soluciones que eliminan procesos manuales y reducen errores operativos.',
    'services.commerce.detail': 'Implementamos plataformas de comercio digital completas: tiendas online B2C, portales B2B con catálogos y precios personalizados, pasarelas de pago integradas y conexión con ERPs y sistemas logísticos.',
    'services.ai.detail': 'Integramos inteligencia artificial en sus procesos de negocio: automatización inteligente de tareas, pipelines de procesamiento de datos, integración de modelos de lenguaje (LLM) y sistemas de análisis predictivo adaptados a sus datos.',
    'services.integrations.detail': 'Conectamos sus sistemas entre sí y con el exterior: diseño e implementación de APIs REST y GraphQL, integraciones con servicios de terceros, middleware de sincronización de datos y automatización de flujos entre plataformas.',

    'services.page.title': 'Nuestras soluciones',
    'services.page.subtitle': 'Capacidades de ingeniería para cada fase de su negocio digital.',
    'services.page.cta': 'Hablemos de su proyecto',

    // Results
    'results.label': 'Resultados',
    'results.title': 'Números, no promesas.',
    'results.stat1.value': '75%',
    'results.stat1.label': 'de tickets de soporte resueltos por IA sin intervención humana',
    'results.stat2.value': '95%',
    'results.stat2.label': 'de ahorro en el coste por conversación de soporte',
    'results.stat3.value': '10x',
    'results.stat3.label': 'de escalado en usuarios concurrentes en una plataforma de vídeo en directo',
    'results.stat4.value': '15+',
    'results.stat4.label': 'años construyendo sistemas en producción',

    // Clients
    'clients.label': 'Empresas con las que ha trabajado nuestro equipo',

    // About
    'about.label': 'Nosotros',
    'about.title': 'No hacemos páginas web. Construimos sistemas.',
    'about.description': 'mxmn technology es una empresa de ingeniería de software con sede en Valencia. Construimos los sistemas sobre los que las empresas operan cada día — y nos quedamos a mantenerlos.',
    'about.point1': 'Más de 15 años de experiencia',
    'about.point2': 'Ingenieros senior, sin intermediarios',
    'about.point3': 'IA en producción, no en demos',
    'about.point4': 'Clientes en Europa y América',
    'about.point5': 'Soporte y operación continuos',
    'about.point6': 'Del primer boceto al mantenimiento',

    // Contact
    'contact.label': 'Contacto',
    'contact.title': 'Cuéntenos su proyecto',
    'contact.subtitle': 'Sin compromiso. Respondemos en menos de 24 horas.',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.company': 'Empresa',
    'contact.message': '¿Qué necesita construir?',
    'contact.submit': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': 'Mensaje enviado. Le responderemos pronto.',
    'contact.error': 'Error al enviar. Inténtelo de nuevo o escríbanos a info@mxmn.net.',
    'contact.info.title': 'Información de contacto',
    'contact.info.address': 'Avda. Burjassot 11, 46009 Valencia',
    'contact.info.email': 'info@mxmn.net',
    'contact.info.map': 'Ver en Google Maps',

    // Footer
    'footer.description': 'Software que trabaja por su negocio.',
    'footer.services': 'Soluciones',
    'footer.company': 'Empresa',
    'footer.tools': 'Herramientas gratuitas',
    'footer.tools.invoice': 'Generador de facturas',
    'footer.tools.morningpages': 'Morning Pages',
    'footer.legal': 'Legal',
    'footer.legal.notice': 'Aviso legal',
    'footer.legal.privacy': 'Privacidad',
    'footer.legal.cookies': 'Cookies',
    'footer.copyright': '© 2026 mxmn technology SL. Todos los derechos reservados.',
  },
  en: {
    // Meta
    'meta.title': 'mxmn technology — Software Engineering in Valencia',
    'meta.description': 'Enterprise platforms, AI agents, and custom management systems. Production software that runs businesses — from Valencia.',
    'meta.solutions.title': 'Solutions — mxmn technology',
    'meta.solutions.description': 'Enterprise platforms, mobile apps, AI, digital commerce, integrations, and custom management systems.',

    // Nav
    'nav.services': 'Solutions',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's Talk",

    // Hero
    'hero.meta': 'mxmn technology — est. 2016 — valencia',
    'hero.title.pre': 'Software that',
    'hero.title.accent': 'works',
    'hero.title.post': 'for your business.',
    'hero.subtitle': 'Enterprise platforms, AI agents, and management systems — designed, built, and operated by senior engineers. No templates. No vaporware.',
    'hero.cta.primary': "Let's talk about your project",
    'hero.cta.secondary': 'What we build',
    'hero.label': 'ERP · AI Agents · E-Commerce · Integrations',

    // Services
    'services.label': 'What we do',
    'services.title': 'Six things we do well',
    'services.subtitle': 'Custom systems, in production, with measurable results.',

    'services.platforms.title': 'Enterprise Platforms',
    'services.platforms.description': 'ERPs, intranets, and business logic shaped around how your company works — not the other way around.',
    'services.mobile.title': 'Mobile Applications',
    'services.mobile.description': 'Native and cross-platform apps for iOS and Android, from idea to App Store.',
    'services.management.title': 'Management Systems',
    'services.management.description': 'Order management, inventory, and automated operations. Goodbye, spreadsheets.',
    'services.commerce.title': 'Digital Commerce',
    'services.commerce.description': 'B2C stores, B2B portals, and payments wired into your ERP.',
    'services.ai.title': 'AI-Powered Solutions',
    'services.ai.description': 'LLM agents and automation built into your processes — in production, with measured results.',
    'services.integrations.title': 'Integrations & APIs',
    'services.integrations.description': 'REST and GraphQL APIs, middleware, and sync: your systems finally talking to each other.',

    'services.platforms.detail': 'We design and implement complete enterprise platforms: ERPs tailored to your operations, intranets that centralize information and processes, and business logic systems that automate your company-specific rules. Architecture built to scale with you.',
    'services.mobile.detail': 'We develop native and cross-platform mobile applications for iOS and Android. From internal apps for field teams to customer-facing digital products, always integrated with your existing backend systems.',
    'services.management.detail': 'We build custom operational management systems: order management, inventory control, resource planning, and workflow automation. Solutions that eliminate manual processes and reduce operational errors.',
    'services.commerce.detail': 'We implement complete digital commerce platforms: B2C online stores, B2B portals with custom catalogs and pricing, integrated payment gateways, and connections to ERPs and logistics systems.',
    'services.ai.detail': 'We integrate artificial intelligence into your business processes: intelligent task automation, data processing pipelines, language model (LLM) integration, and predictive analytics systems tailored to your data.',
    'services.integrations.detail': 'We connect your systems to each other and the outside world: REST and GraphQL API design and implementation, third-party service integrations, data synchronization middleware, and cross-platform workflow automation.',

    'services.page.title': 'Our solutions',
    'services.page.subtitle': 'Engineering capabilities for every phase of your digital business.',
    'services.page.cta': "Let's talk about your project",

    // Results
    'results.label': 'Results',
    'results.title': 'Numbers, not promises.',
    'results.stat1.value': '75%',
    'results.stat1.label': 'of support tickets resolved by AI with no human in the loop',
    'results.stat2.value': '95%',
    'results.stat2.label': 'savings in support cost per conversation',
    'results.stat3.value': '10x',
    'results.stat3.label': 'scaling of concurrent users on a live-video platform',
    'results.stat4.value': '15+',
    'results.stat4.label': 'years building production systems',

    // Clients
    'clients.label': 'Companies our team has worked with',

    // About
    'about.label': 'About',
    'about.title': "We don't build websites. We build systems.",
    'about.description': 'mxmn technology is a software engineering company based in Valencia. We build the systems businesses run on every day — and we stick around to keep them running.',
    'about.point1': '15+ years of experience',
    'about.point2': 'Senior engineers, no middlemen',
    'about.point3': 'AI in production, not in demos',
    'about.point4': 'Clients across Europe and the Americas',
    'about.point5': 'Ongoing operations & support',
    'about.point6': 'From first sketch to maintenance',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Tell us about your project',
    'contact.subtitle': 'No strings attached. We reply within 24 hours.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.message': 'What do you need built?',
    'contact.submit': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent. We\'ll get back to you soon.',
    'contact.error': 'Failed to send. Please try again or email info@mxmn.net.',
    'contact.info.title': 'Contact information',
    'contact.info.address': 'Avda. Burjassot 11, 46009 Valencia',
    'contact.info.email': 'info@mxmn.net',
    'contact.info.map': 'View on Google Maps',

    // Footer
    'footer.description': 'Software that works for your business.',
    'footer.services': 'Solutions',
    'footer.company': 'Company',
    'footer.tools': 'Free tools',
    'footer.tools.invoice': 'Invoice generator',
    'footer.tools.morningpages': 'Morning Pages',
    'footer.legal': 'Legal',
    'footer.legal.notice': 'Legal notice',
    'footer.legal.privacy': 'Privacy',
    'footer.legal.cookies': 'Cookies',
    'footer.copyright': '© 2026 mxmn technology SL. All rights reserved.',
  },
} as const;
