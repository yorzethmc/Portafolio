const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const profileLinks = {
  email: 'yorzeth.info@gmail.com',
  whatsapp: '50688292124',
  linkedin: 'https://www.linkedin.com/in/yorzeth/?locale=es',
  github: 'https://github.com/yorzethmc',
  cv: publicAsset('documents/erick-yorzeth-masis-cavero-cv.pdf'),
  etqScriptCertificate: publicAsset('documents/certificates/etqscript-certificate.pdf'),
};

export const githubUsername = 'yorzethmc';

export const content = {
  en: {
    navItems: [
      { label: 'Value', href: '#value' },
      { label: 'Cases', href: '#success-cases' },
      { label: 'Skills', href: '#skills' },
      { label: 'Live proof', href: '#live-proof' },
      { label: 'Contact', href: '#contact' },
    ],
    themeLabels: { dark: 'Dark', light: 'Light', language: 'ES' },
    heroPhrases: [
      'QMS Automation Developer',
      'ETQ Reliance Developer',
      'Business Systems Engineer',
      'Software Developer',
      'Automation Specialist',
    ],
    hero: {
      eyebrow: 'Costa Rica | Remote-ready | Nearshore-friendly',
      name: 'Yorzeth Masis',
      lead:
        'Senior Quality Systems Development Technician, Software Engineering student, ETQ Reliance specialist, and full-stack systems integration builder.',
      primaryCta: 'Explore real work',
      secondaryCta: 'Contact me',
      cvCta: 'Download CV',
    },
    value: {
      eyebrow: 'Profile positioning',
      title: 'A practical engineer for automation, support, and software delivery.',
      body:
        'I currently work as a Senior Quality Systems Development Technician at a regulated medical device company while studying Software Engineering. I can support ETQ Reliance, build controlled scripts, automate business processes, troubleshoot production issues, and develop web-based internal tools.',
      cards: [
        { metric: '~4 years', title: 'Technology, support, and systems experience' },
        { metric: '~1.5 years', title: 'ETQ Reliance and QMS automation' },
        { metric: '3 years', title: 'Programming and scripting practice' },
        { metric: '$25/hr', title: 'Target remote / contract rate' },
      ],
      availability: 'Available for remote, nearshore, contract, support, automation, and software development roles.',
      photoHint: 'Click the portrait for a tiny hidden surprise.',
    },
    languages: {
      eyebrow: 'Languages',
      title: 'Communication coverage',
      items: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'B2+ / professional working proficiency' },
        { name: 'Portuguese', level: 'A2.1 / basic conversational' },
      ],
    },
    experience: {
      eyebrow: 'Experience path',
      title: 'A support-to-engineering path with regulated-systems ownership.',
      items: [
        {
          company: 'Regulated medical device company',
          role: 'Senior Quality Systems Development Technician',
          period: 'Apr 2025 - Present',
          focus: 'ETQ Reliance NXG administration, ETQScript automation, QMS integrations, validation support, and platform lifecycle work.',
          proof: [
            'Technical administration and continuous improvement of ETQ Reliance NXG.',
            'ETQScript business logic, automated rules, custom fields, and controlled task profiles.',
            'Workday / Workato / SCIM provisioning support and integration troubleshooting.',
            'Platform upgrade and validation support, including SRS, server sizing, software testing statements, and AWS deployment coordination.',
            'Root-cause analysis across Production, Validation, and Development environments.',
          ],
        },
        {
          company: 'Auxis',
          role: 'Retail Application Support Analyst',
          period: 'Jun 2023 - Apr 2025',
          focus: 'Enterprise application support, retail systems operations, device configuration, network support, and deployment troubleshooting.',
          proof: [
            'Supported business-critical mobile, desktop, and backend-adjacent retail applications.',
            'Worked with static IP setup, Meraki firewall rules, monitoring, troubleshooting, and release support.',
            'Created documentation and automation that improved ticket-handling efficiency.',
          ],
        },
        {
          company: 'Concentrix',
          role: 'Chat Technical Support Specialist',
          period: 'Mar 2023 - May 2023',
          focus: 'Real-time technical support for mobile devices, software issues, service concerns, and case documentation.',
          proof: [
            'Resolved technical issues through live chat with precision and customer empathy.',
            'Built early discipline around troubleshooting structure, communication, and case ownership.',
          ],
        },
        {
          company: 'Earlier operations and coordination roles',
          role: 'Customer experience, project coordination, and administrative operations',
          period: '2020 - 2023',
          focus: 'Front-line service, documentation control, client communication, coordination, and operational problem solving.',
          proof: [
            'Built communication, ownership, documentation, and process-coordination skills before moving deeper into technical systems.',
          ],
        },
      ],
    },
    success: {
      eyebrow: 'Real-life success cases',
      title: 'Production scripts and controlled migrations that reduce manual work.',
      intro:
        'These are public-safe summaries of real ETQ/QMS automation work. Some scripts run today in production; the migration work was a controlled one-time execution to avoid hours of manual re-entry.',
      viewDetails: 'View technical breakdown',
      hideDetails: 'Hide technical breakdown',
      challenge: 'Challenge',
      solution: 'Solution',
      impact: 'Impact',
      cases: [
        {
          title: 'Global Role-Based Training Sync',
          eyebrow: 'Recurring production automation',
          summary:
            'Synchronizes missing Training Groups on Employee Profiles based on security-group membership and site applicability.',
          challenge:
            'Training groups had to be synchronized across active Employee Profiles while avoiding over-assignment from administrative, Reader, Designer, and cross-site inheritance paths.',
          solution:
            'Built an additive-only global sync with site rollout switches, DAO-first eligibility, nested effective membership expansion, bridge-group exclusions, site consistency filtering, and open-only-when-missing behavior.',
          impact:
            'Development evidence: 560 active Employee Profile location rows evaluated, 556 skipped as already current, 4 profiles updated, 13 Training Group instances added, 0 errors, 1.581 seconds runtime.',
          metrics: ['560 evaluated', '13 assignments', '0 errors'],
        },
        {
          title: 'Auto Create Training Assignments',
          eyebrow: 'Recurring production automation',
          summary:
            'Creates training assignments from Course Profile applicability while preventing duplicate assignment by controlled source revision.',
          challenge:
            'Course Profiles needed automatic assignment creation based on applicability rules, while preventing reassignment when the same source document number and revision already had a non-voided assignment.',
          solution:
            'Extended assignment logic with source number/revision detection from linked Document Control records, fallback source fields, DAO duplicate checks, and source-aware reassignment protection.',
          impact:
            'Reduced manual review for training assignment creation and added a stronger guardrail against duplicate assignments tied to the same controlled source revision.',
          metrics: ['revision-aware', 'duplicate guardrail', 'less manual review'],
        },
        {
          title: 'Legacy Hardcopy Distribution Migration',
          eyebrow: 'One-time controlled migration',
          summary:
            'Migrated legacy hardcopy distribution data into a new form structure with duplicate prevention and final execution evidence.',
          challenge:
            'Legacy hardcopy distribution data had to be migrated into a new form/subform structure without creating duplicates or opening unnecessary documents in mass loops.',
          solution:
            'Designed a DAO-first migration with SQL eligibility filters, keyword caching, configuration validation, duplicate fail-closed behavior, immediate pre-create recheck, stage timing, and final reporting.',
          impact:
            'Prepared for an estimated 6,813-document population, with document-level traceability, status counts, stage timing, duplicate metrics, and final execution evidence.',
          metrics: ['6,813 estimated docs', 'fail-closed', 'audit report'],
        },
        {
          title: 'Draft Document Aging and Void Reporting',
          eyebrow: 'Controlled diagnostic/reporting task',
          summary:
            'Generates evidence for aged or voided draft records without modifying data, opening documents, or routing records.',
          challenge:
            'Document Control needed controlled visibility into draft or voided records around due-date aging without blindly opening, editing, routing, or restoring documents.',
          solution:
            'Created diagnostic/reporting scripts using due date as the baseline, configurable date windows, DAO-driven selection, minimal logging, multi-recipient email summaries, and no-data-modification report modes.',
          impact:
            'Improved operational evidence by listing affected documents, phase distribution, timing, and execution context before any corrective action.',
          metrics: ['report-only', 'email summary', 'no data edits'],
        },
        {
          title: 'Costa Rica Onboarding Group Assignment',
          eyebrow: 'Targeted recurring support automation',
          summary:
            'Assigns onboarding Training Groups safely by checking existing multi-value field entries before saving profiles.',
          challenge:
            'Costa Rica onboarding training needed a safe way to assign the correct Training Group to eligible Employee Profiles without duplicating multi-value field entries.',
          solution:
            'Built a controlled task that resolves the Training Group ID through DAO, checks existing values, appends only when missing, saves the profile, and closes the document to protect server resources.',
          impact:
            'Reduced manual training-group maintenance and created a safer repeatable pattern for targeted onboarding assignment updates.',
          metrics: ['idempotent', 'safe close', 'multi-value safe'],
        },
        {
          title: 'Locker Management System',
          eyebrow: 'Internal software project',
          summary:
            'Digital system concept for multi-building locker operations with SSO, SQL Server backend logic, and traceability.',
          challenge:
            'A multi-building internal operation needed digital access control, clear records, and a simple experience for internal users.',
          solution:
            'Led the design of a system with SSO, SQL Server backend logic, digital forms, and an operational traceability structure.',
          impact:
            'Reduced dependency on manual tracking, improved locker-state visibility, and created an extensible foundation for internal operations.',
          metrics: ['SSO', 'SQL Server', 'forms'],
        },
      ],
    },
    skills: {
      eyebrow: 'Skills and tools',
      title: 'Strongest technical signals',
      levels: [
        { name: 'ETQ Reliance NXG', level: 'Advanced', note: 'Admin, Training, Document Control, task profiles, validated environments.' },
        { name: 'ETQScript / Jython', level: 'Advanced', note: 'Production scripts, DAO-first logic, logs, limits, save/close controls.' },
        { name: 'SQL Server / Oracle SQL', level: 'Advanced', note: 'Eligibility filters, duplicate checks, reporting, data analysis.' },
        { name: 'JavaScript / React', level: 'Intermediate+', note: 'Interactive UI, forms, dashboards, portfolio and university projects.' },
        { name: 'Node.js / REST APIs', level: 'Intermediate', note: 'Backend flows, integrations, Postman testing, internal tools.' },
        { name: 'Python / PowerShell', level: 'Intermediate', note: 'Automation, analysis, utilities, logs, local productivity scripts.' },
        { name: 'Workato / SCIM', level: 'Working knowledge', note: 'Provisioning support, integration troubleshooting, identity flows.' },
        { name: 'C# / .NET / Azure DevOps', level: 'Learning / working knowledge', note: 'Software engineering studies and project exposure.' },
      ],
    },
    liveProof: {
      eyebrow: 'Live proof',
      title: 'Public signals and quick checks',
      githubTitle: 'GitHub activity',
      githubLoading: 'Loading public repositories...',
      githubEmpty: 'No public repositories available yet.',
      githubError: 'GitHub data is temporarily unavailable.',
      timeTitle: 'Current time in Costa Rica',
      cv: 'Download CV',
      certificates: 'View certificates',
      email: 'Email me',
      whatsapp: 'WhatsApp me',
      university: 'University and portfolio projects are being curated here as public-safe examples.',
    },
    etqGuide: {
      eyebrow: 'Second GitHub project',
      title: 'ETQScript Field Guide',
      intro:
        'A public knowledge base about ETQScript limitations, DAO usage, controlled migrations, data handling, validation evidence, and production-safe patterns.',
      notes: [
        'No mass in-memory filtering when SQL or DAO can determine eligibility.',
        'Open documents only when they are actually going to be modified.',
        'Recheck critical conditions immediately before creating dependent records.',
        'Every production script should leave evidence, counts, errors, and total runtime.',
      ],
      cta: 'View ETQScript project',
    },
    certifications: {
      eyebrow: 'Credentials',
      title: 'ETQ Reliance certifications',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about automation, ETQ support, or software work.',
      body:
        'Remote and nearshore-friendly from Costa Rica. Open to contract, specialized support, automation, QMS/ETQ, QA, and software development opportunities.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      messagePlaceholder: 'Tell me what you are building or hiring for.',
      sendEmail: 'Send email',
      whatsapp: 'Start WhatsApp chat',
    },
    easterEgg: {
      title: 'Tiny systems break',
      body: 'Original conga-style beat. No copyrighted audio, just a tiny celebration loop.',
      close: 'Back to portfolio',
    },
  },
  es: {
    navItems: [
      { label: 'Valor', href: '#value' },
      { label: 'Casos', href: '#success-cases' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Prueba viva', href: '#live-proof' },
      { label: 'Contacto', href: '#contact' },
    ],
    themeLabels: { dark: 'Oscuro', light: 'Claro', language: 'EN' },
    heroPhrases: [
      'Desarrollador de automatizaciones QMS',
      'Desarrollador ETQ Reliance',
      'Business Systems Engineer',
      'Desarrollador de software',
      'Especialista en automatizacion',
    ],
    hero: {
      eyebrow: 'Costa Rica | Remoto | Nearshore',
      name: 'Yorzeth Masis',
      lead:
        'Senior Quality Systems Development Technician, estudiante de Ingenieria de Software, especialista ETQ Reliance y constructor de integraciones full-stack.',
      primaryCta: 'Ver trabajo real',
      secondaryCta: 'Contactarme',
      cvCta: 'Descargar CV',
    },
    value: {
      eyebrow: 'Posicionamiento profesional',
      title: 'Un perfil practico para automatizacion, soporte y desarrollo de software.',
      body:
        'Actualmente trabajo como Senior Quality Systems Development Technician en una empresa regulada de dispositivos medicos mientras estudio Ingenieria de Software. Puedo dar soporte ETQ Reliance, construir scripts controlados, automatizar procesos, diagnosticar problemas productivos y desarrollar herramientas web internas.',
      cards: [
        { metric: '~4 anos', title: 'Experiencia en tecnologia, soporte y sistemas' },
        { metric: '~1.5 anos', title: 'ETQ Reliance y automatizacion QMS' },
        { metric: '3 anos', title: 'Programacion y scripting' },
        { metric: '$25/hora', title: 'Tarifa objetivo remota / contrato' },
      ],
      availability: 'Disponible para remoto, nearshore, contrato, soporte, automatizacion y desarrollo de software.',
      photoHint: 'Toca la foto para una pequena sorpresa oculta.',
    },
    languages: {
      eyebrow: 'Idiomas',
      title: 'Cobertura de comunicacion',
      items: [
        { name: 'Espanol', level: 'Nativo' },
        { name: 'Ingles', level: 'B2+ / competencia profesional' },
        { name: 'Portugues', level: 'A2.1 / conversacional basico' },
      ],
    },
    experience: {
      eyebrow: 'Ruta de experiencia',
      title: 'Un camino de soporte a ingenieria con ownership en sistemas regulados.',
      items: [
        {
          company: 'Empresa regulada de dispositivos medicos',
          role: 'Senior Quality Systems Development Technician',
          period: 'Abr 2025 - Presente',
          focus: 'Administracion ETQ Reliance NXG, automatizacion ETQScript, integraciones QMS, soporte de validacion y ciclo de vida de plataforma.',
          proof: [
            'Administracion tecnica y mejora continua de ETQ Reliance NXG.',
            'Logica ETQScript, reglas automatizadas, campos custom y task profiles controlados.',
            'Soporte Workday / Workato / SCIM y troubleshooting de integraciones.',
            'Soporte de upgrades y validacion, incluyendo SRS, server sizing, software testing statements y coordinacion AWS.',
            'Root-cause analysis en Production, Validation y Development.',
          ],
        },
        {
          company: 'Auxis',
          role: 'Retail Application Support Analyst',
          period: 'Jun 2023 - Abr 2025',
          focus: 'Soporte de aplicaciones empresariales, operaciones retail, configuracion de dispositivos, soporte de red y troubleshooting de despliegues.',
          proof: [
            'Soporte a aplicaciones criticas en mobile, desktop y entornos relacionados a backend.',
            'Trabajo con IP estatica, reglas Meraki, monitoreo, troubleshooting y soporte de releases.',
            'Documentacion y automatizaciones que mejoraron eficiencia de manejo de tickets.',
          ],
        },
        {
          company: 'Concentrix',
          role: 'Chat Technical Support Specialist',
          period: 'Mar 2023 - May 2023',
          focus: 'Soporte tecnico en tiempo real para dispositivos moviles, problemas de software, servicio y documentacion de casos.',
          proof: [
            'Resolucion de problemas tecnicos por chat con precision y empatia.',
            'Base temprana de troubleshooting estructurado, comunicacion y ownership de casos.',
          ],
        },
        {
          company: 'Roles previos de operaciones y coordinacion',
          role: 'Customer experience, project coordination, and administrative operations',
          period: '2020 - 2023',
          focus: 'Servicio al cliente, control documental, comunicacion con clientes, coordinacion y resolucion operativa.',
          proof: [
            'Desarrollo de comunicacion, ownership, documentacion y coordinacion de procesos antes de profundizar en sistemas tecnicos.',
          ],
        },
      ],
    },
    success: {
      eyebrow: 'Casos reales',
      title: 'Scripts productivos y migraciones controladas que reducen trabajo manual.',
      intro:
        'Estos son resumenes publicos y seguros de trabajo real en ETQ/QMS. Algunos scripts corren hoy en produccion; la migracion fue una ejecucion controlada de una sola vez para evitar horas de trabajo manual.',
      viewDetails: 'Ver desglose tecnico',
      hideDetails: 'Ocultar desglose tecnico',
      challenge: 'Reto',
      solution: 'Solucion',
      impact: 'Impacto',
      cases: [
        {
          title: 'Sincronizacion global de entrenamiento por rol',
          eyebrow: 'Automatizacion recurrente en produccion',
          summary:
            'Sincroniza Training Groups faltantes en Employee Profiles segun membresia de grupos de seguridad y aplicabilidad por sitio.',
          challenge:
            'Los Training Groups debian sincronizarse evitando sobreasignacion por grupos administrativos, Reader, Designer o herencia entre sitios.',
          solution:
            'Construccion de sincronizacion solo aditiva con switches por sitio, elegibilidad DAO-first, expansion de membresia efectiva, exclusiones de grupos puente, filtro de consistencia por sitio y apertura solo cuando faltan valores.',
          impact:
            'Evidencia en Development: 560 filas de ubicacion evaluadas, 556 omitidas por estar actualizadas, 4 perfiles actualizados, 13 instancias agregadas, 0 errores, 1.581 segundos.',
          metrics: ['560 evaluados', '13 asignaciones', '0 errores'],
        },
        {
          title: 'Creacion automatica de Training Assignments',
          eyebrow: 'Automatizacion recurrente',
          summary:
            'Crea assignments desde Course Profiles segun reglas de aplicabilidad y evita duplicados por numero/revision de documento controlado.',
          challenge:
            'Se necesitaba crear assignments automaticamente evitando reasignar cuando ya existia uno no voided para la misma fuente y revision.',
          solution:
            'Extension de logica con deteccion de source number/revision desde Document Control, fallback a campos fuente, checks DAO de duplicado y proteccion source-aware.',
          impact:
            'Menos revision manual y una barrera mas fuerte contra duplicados ligados a la misma revision controlada.',
          metrics: ['revision-aware', 'duplicate guardrail', 'menos revision manual'],
        },
        {
          title: 'Migracion legacy de Hardcopy Distribution',
          eyebrow: 'Migracion controlada de una sola vez',
          summary:
            'Migro datos legacy de hardcopy distribution a una nueva estructura de formulario con prevencion de duplicados y evidencia final.',
          challenge:
            'Los datos legacy debian migrarse a una nueva estructura sin duplicados y sin abrir documentos innecesarios en loops masivos.',
          solution:
            'Diseno DAO-first con filtros SQL, cache de keywords, validacion de configuracion, fail-closed en duplicados, recheck antes de crear, timing por etapa y reporte final.',
          impact:
            'Preparado para una poblacion estimada de 6,813 documentos, con trazabilidad por documento, conteos, metricas de duplicado y evidencia final.',
          metrics: ['6,813 docs estimados', 'fail-closed', 'audit report'],
        },
        {
          title: 'Aging y reporte de Draft/Void documents',
          eyebrow: 'Diagnostico controlado',
          summary:
            'Genera evidencia de documentos draft o voided sin modificar datos, abrir documentos o rutear registros.',
          challenge:
            'Document Control necesitaba visibilidad sobre registros vencidos o voided sin ejecutar cambios a ciegas.',
          solution:
            'Scripts de diagnostico/reporte usando due date como base, ventanas configurables, seleccion DAO, logs minimos, emails multi-recipient y modo sin modificacion de datos.',
          impact:
            'Mejor evidencia operacional: documentos afectados, distribucion por fase, timing y contexto antes de cualquier correccion.',
          metrics: ['solo reporte', 'email summary', 'sin editar datos'],
        },
        {
          title: 'Asignacion de onboarding Costa Rica',
          eyebrow: 'Automatizacion controlada de soporte',
          summary:
            'Asigna Training Groups de onboarding validando valores existentes antes de guardar perfiles.',
          challenge:
            'Onboarding Costa Rica necesitaba asignar el grupo correcto sin duplicar entradas en campos multi-value.',
          solution:
            'Tarea controlada que resuelve el ID por DAO, valida valores existentes, agrega solo si falta, guarda y cierra el documento.',
          impact:
            'Menos mantenimiento manual y patron seguro para actualizaciones repetibles de onboarding.',
          metrics: ['idempotente', 'safe close', 'multi-value safe'],
        },
        {
          title: 'Locker Management System',
          eyebrow: 'Proyecto interno de software',
          summary:
            'Sistema digital para operacion multi-building con SSO, logica backend SQL Server y trazabilidad.',
          challenge:
            'Un proceso operativo multi-building necesitaba control digital, registros claros y experiencia simple.',
          solution:
            'Diseno de sistema con SSO, backend SQL Server, formularios digitales y estructura de trazabilidad operativa.',
          impact:
            'Menos tracking manual, mejor visibilidad del estado de lockers y base extensible para operaciones internas.',
          metrics: ['SSO', 'SQL Server', 'forms'],
        },
      ],
    },
    skills: {
      eyebrow: 'Habilidades y herramientas',
      title: 'Senales tecnicas principales',
      levels: [
        { name: 'ETQ Reliance NXG', level: 'Avanzado', note: 'Admin, Training, Document Control, task profiles y ambientes validados.' },
        { name: 'ETQScript / Jython', level: 'Avanzado', note: 'Scripts productivos, DAO-first, logs, limites y save/close controlado.' },
        { name: 'SQL Server / Oracle SQL', level: 'Avanzado', note: 'Filtros de elegibilidad, duplicados, reportes y analisis de datos.' },
        { name: 'JavaScript / React', level: 'Intermedio+', note: 'UI interactiva, formularios, dashboards, portafolio y proyectos universitarios.' },
        { name: 'Node.js / REST APIs', level: 'Intermedio', note: 'Backend, integraciones, Postman e internal tools.' },
        { name: 'Python / PowerShell', level: 'Intermedio', note: 'Automatizacion, analisis, utilidades, logs y productividad local.' },
        { name: 'Workato / SCIM', level: 'Conocimiento practico', note: 'Soporte de provisioning, troubleshooting de integraciones e identidad.' },
        { name: 'C# / .NET / Azure DevOps', level: 'Aprendiendo / practico', note: 'Estudios de software engineering y exposicion en proyectos.' },
      ],
    },
    liveProof: {
      eyebrow: 'Prueba viva',
      title: 'Senales publicas y accesos rapidos',
      githubTitle: 'Actividad de GitHub',
      githubLoading: 'Cargando repositorios publicos...',
      githubEmpty: 'Todavia no hay repositorios publicos disponibles.',
      githubError: 'GitHub no esta disponible temporalmente.',
      timeTitle: 'Hora actual en Costa Rica',
      cv: 'Descargar CV',
      certificates: 'Ver certificados',
      email: 'Enviar email',
      whatsapp: 'Escribir por WhatsApp',
      university: 'Proyectos universitarios y de portafolio se estan curando aqui como ejemplos publicos seguros.',
    },
    etqGuide: {
      eyebrow: 'Segundo proyecto GitHub',
      title: 'ETQScript Field Guide',
      intro:
        'Base publica de conocimiento sobre limitaciones de ETQScript, uso de DAO, migraciones controladas, manejo de datos, evidencia de validacion y patrones seguros para produccion.',
      notes: [
        'No hacer filtros masivos en memoria cuando SQL o DAO puede decidir elegibilidad.',
        'Abrir documentos solo cuando realmente se van a modificar.',
        'Revalidar condiciones criticas inmediatamente antes de crear registros dependientes.',
        'Todo script productivo debe dejar evidencia, conteos, errores y tiempo total.',
      ],
      cta: 'Ver proyecto ETQScript',
    },
    certifications: {
      eyebrow: 'Credenciales',
      title: 'Certificaciones ETQ Reliance',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos de automatizacion, soporte ETQ o desarrollo de software.',
      body:
        'Disponible remoto y nearshore desde Costa Rica. Abierto a contrato, soporte especializado, automatizacion, QMS/ETQ, QA y desarrollo de software.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Cuéntame que estas construyendo o contratando.',
      sendEmail: 'Enviar email',
      whatsapp: 'Abrir WhatsApp',
    },
    easterEgg: {
      title: 'Mini descanso del sistema',
      body: 'Ritmo original estilo conga. Sin audio con copyright, solo una celebracion pequena.',
      close: 'Volver al portafolio',
    },
  },
};

export const certifications = [
  {
    name: 'ETQScript Certificate',
    provider: 'ETQ Reliance',
    href: publicAsset('documents/certificates/etqscript-certificate.pdf'),
  },
  {
    name: 'ETQ Reliance Promotion',
    provider: 'ETQ Reliance',
    href: publicAsset('documents/certificates/etq-reliance-promotion.pdf'),
  },
  {
    name: 'ETQ Validation',
    provider: 'ETQ Reliance',
    href: publicAsset('documents/certificates/etq-validation.pdf'),
  },
  {
    name: 'Milestone EIGHT Administrator',
    provider: 'ETQ Reliance',
    href: publicAsset('documents/certificates/milestone-eight-administrator.pdf'),
  },
  {
    name: 'Milestone NINE Basic Designer',
    provider: 'ETQ Reliance',
    href: publicAsset('documents/certificates/milestone-nine-basic-designer.pdf'),
  },
];
