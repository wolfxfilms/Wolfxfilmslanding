export type Language = 'en' | 'es';

export interface TranslationData {
  navShows: string;
  navHow: string;
  navRates: string;
  navAbout: string;
  navFaq: string;
  instagram: string;
  skip: string;
  h1Line1: string;
  h1Line2: string;
  h1Line3: string;
  heroP: string;
  heroCap: string;
  booking: string;
  cta: string;
  seeRates: string;
  st1: string;
  st2: string;
  st3: string;
  st4: string;
  cmpH: string;
  cmpHint: string;
  cmpP: string;
  tagWeb: string;
  tagCinema: string;
  showsH: string;
  showsP: string;
  watch: string;
  role: string;
  anglesH: string;
  anglesP: string;
  howH: string;
  howP: string;
  chipCam: string;
  chipAngles: string;
  chipAudio: string;
  chipLight: string;
  chipDel: string;
  notifTitle: string;
  notif: string;
  step1: string;
  step2: string;
  step3: string;
  s1h: string;
  s1p: string;
  s2h: string;
  s2p: string;
  s3h: string;
  s3p: string;
  setH: string;
  capBts: string;
  capVert: string;
  capMon: string;
  capDet: string;
  ratesLabel: string;
  ratesH: string;
  ratesP: string;
  perEp: string;
  perMo: string;
  choose: string;
  recommended: string;
  save: string;
  t1: string;
  t1p: string;
  t1a: string;
  t1b: string;
  t1c: string;
  t1d2: string;
  t1e: string;
  t2: string;
  t2p: string;
  t2a: string;
  t2b: string;
  t2c: string;
  t2e: string;
  t3: string;
  t3p: string;
  t3a: string;
  t3b: string;
  t3c: string;
  t3e: string;
  t3f: string;
  t3g: string;
  tiersFoot: string;
  fitH: string;
  icp1h: string;
  icp1p: string;
  icp2h: string;
  icp2p: string;
  icp3h: string;
  icp3p: string;
  icpNote: string;
  aboutLabel: string;
  portraitCap: string;
  about1: string;
  about2: string;
  about3: string;
  bioK1: string;
  bioV1: string;
  bioK2: string;
  bioV2: string;
  bioK3: string;
  bioV3: string;
  faqH: string;
  q1: string; a1: string;
  q2: string; a2: string;
  q3: string; a3: string;
  q4: string; a4: string;
  q5: string; a5: string;
  q7: string; a7: string;
  q8: string; a8: string;
  testiH: string;
  testiP: string;
  playSound: string;
  bookH: string;
  bookP: string;
  msgLabel: string;
  copy: string;
  copied: string;
  copyFail: string;
  igDm: string;
  sendWhatsapp: string;
  directLeadTitle: string;
  directLeadSubtitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  submitLead: string;
  leadSubmitting: string;
  leadSuccess: string;
  leadError: string;
  footerRights: string;
  footerSpecs: string;
  msg: (tierName: string) => string;
}

export const translations: Record<Language, TranslationData> = {
  en: {
    navShows: "Work",
    navHow: "How it works",
    navRates: "Pricing",
    navAbout: "About",
    navFaq: "FAQ",
    instagram: "Instagram",
    skip: "Skip intro",
    h1Line1: "Your brand",
    h1Line2: "should look as good",
    h1Line3: "as your business.",
    heroP: "Cinematic video for founders, podcasts and brands. Directed, not just filmed.",
    heroCap: "Cinematic production for founders, podcasts and brands · Medellín",
    booking: "Now booking in Medellín · Limited sessions",
    cta: "Book your first shoot",
    seeRates: "See pricing",
    st1: "Camera angles",
    st2: "Color graded",
    st3: "Raw file delivery",
    st4: "Vertical clips with every edit",
    cmpH: "Cinema quality for your Brand.",
    cmpHint: "Drag across the frame.",
    cmpP: "A lot of great conversations are still recorded on a laptop webcam. Drag across the frame to see what shaped light, broadcast audio and a cinema camera do to the same moment.",
    tagWeb: "Laptop webcam · 720p",
    tagCinema: "Cinema camera · 4K",
    showsH: "Selected work.",
    showsP: "Vlogs, episodes and brand pieces I directed and shot for founders and creators.",
    watch: "Watch on YouTube →",
    role: "Director · DP",
    anglesH: "Two angles. Every moment covered.",
    anglesP: "Netflix Approved cinema line cameras on every shoot.",
    howH: "One session. Three steps.",
    howP: "You show up. I handle the rest, from the first light to the final export.",
    chipCam: "Netflix Approved Cinema line cameras",
    chipAngles: "Two angles",
    chipAudio: "Lav + mixer",
    chipLight: "Multi-point light",
    chipDel: "48h delivery",
    notifTitle: "WolfxFilms",
    notif: "Your episode is ready · 4K + 6 clips",
    step1: "Step 1",
    step2: "Step 2",
    step3: "Step 3",
    s1h: "I turn your space into a set",
    s1p: "I bring cinema-grade cameras, lighting and audio to your home, office or venue, and shape the room until it looks like a studio.",
    s2h: "You talk, I direct",
    s2p: "Two angles roll the whole time while I direct the frame, the light and the pacing. B-roll is captured in the same session.",
    s3h: "You get your files",
    s3p: "Raw 4K files within 48 hours. Edited videos and clips on a timeline we agree before the shoot.",
    setH: "Your space, turned into a set.",
    capBts: "Setup · two bodies",
    capVert: "9:16 · social clip",
    capMon: "On-set monitor",
    capDet: "B-roll · detail",
    ratesLabel: "Pricing",
    ratesH: "Choose how much I take off your plate.",
    ratesP: "In US dollars, per production session. A session can be a podcast recording, a brand shoot (YouTube channel, VSL, etc.) or a batch of social media content (ads, short form).",
    perEp: "/ session",
    perMo: "/ month",
    choose: "Choose",
    recommended: "Recommended",
    save: "Save $1,500 / month",
    t1: "Capture",
    t1p: "Cinematic footage your editor will love working with.",
    t1a: "Two cinema-line cameras, 4K",
    t1b: "Lighting and audio setup",
    t1c: "Color graded raw footage",
    t1d2: "B-roll and cutaway reel",
    t1e: "Delivery within 48 hours",
    t2: "Capture + Edit",
    t2p: "I shoot it and hand you a finished video.",
    t2a: "Everything in Capture",
    t2b: "Edited long-form video (episode, vlog or brand film)",
    t2c: "4 to 6 vertical clips for social",
    t2e: "Audio cleanup and mastering",
    t3: "Series",
    t3p: "Your content, produced every month, with strategy built in.",
    t3a: "4 production sessions per month",
    t3b: "Everything in Capture + Edit",
    t3c: "Third camera angle included",
    t3e: "Thumbnails and titles",
    t3f: "Monthly content strategy session",
    t3g: "Priority scheduling",
    tiersFoot: "USD · Series has a 3-month minimum · Third angle on Capture and Capture + Edit quoted per session",
    fitH: "Who I work with.",
    icp1h: "Founders and personal brands",
    icp1p: "You want to show up online like the expert you are. Talking-head series, founder stories and social content that looks as premium as your offer.",
    icp2h: "Podcasts",
    icp2p: "Launching a show or upgrading one. Two-angle sessions in your space, with the edit and clips ready to publish.",
    icp3h: "Companies",
    icp3p: "Brand films, team and product videos, event coverage. One director from concept to final export.",
    icpNote: "Need a quick, low-budget recording? A studio rental will serve you better.",
    aboutLabel: "Behind the camera",
    portraitCap: "Carlos Jimenez · Director / DP",
    about1: "Born and raised in Panama. Trained as a film director. Now shooting out of Medellín.",
    about2: "I hold a degree in film direction and have spent my career behind the camera across Panama, Colombia, Brazil and the United States: short films, a long list of music videos, and documentaries I directed and shot as DP.",
    about3: "Today I direct content for founders, entrepreneurs, artists and companies. As a content director, I plan what you film around what your audience actually watches, so every frame serves the story and the results.",
    bioK1: "Worked in",
    bioV1: "Panama · Colombia · Brazil · USA",
    bioK2: "Credits",
    bioV2: "Music videos · Short films · Documentaries · Brand content",
    bioK3: "Roles",
    bioV3: "Director · Director of photography · Content director",
    faqH: "Questions? Answered.",
    q1: "Where do we record?",
    a1: "In your space: home, office or venue. The setup is mobile, so there is no studio to rent or travel to.",
    q2: "Do I need my own editor?",
    a2: "With Capture, yes: you get graded raw footage and b-roll for your editor. With Capture + Edit or Series, I deliver the finished video and clips.",
    q3: "How fast is delivery?",
    a3: "Raw files within 48 hours. Same-day delivery when the schedule allows.",
    q4: "How does Series work?",
    a4: "Four production sessions a month, fully produced, with a monthly strategy session to plan topics, titles and clips. It runs on a 3-month minimum so your content has time to build momentum.",
    q5: "How do I book my first shoot?",
    a5: "Send me a message on Instagram or WhatsApp with what you want to create. I'll reply with a quote and the kit list, and a deposit locks your date.",
    q7: "Do you shoot in English and Spanish?",
    a7: "Yes. I direct in both, so you can record in the language your audience speaks.",
    q8: "What equipment do you use?",
    a8: "Cinema-grade cameras, lenses, lighting and broadcast audio. You'll get the full kit list with your quote.",
    testiH: "In their words.",
    testiP: "Founders and creators I've worked with, talking about the experience.",
    playSound: "Play with sound",
    bookH: "Let's make you look as good as your business.",
    bookP: "Pick a package, copy the message, and send it to Carlos on WhatsApp or Instagram.",
    msgLabel: "Your message",
    copy: "Copy message",
    copied: "Copied. Paste it into WhatsApp or Instagram.",
    copyFail: "Selected. Press Cmd/Ctrl + C to copy.",
    igDm: "Open Instagram DM",
    sendWhatsapp: "Chat on WhatsApp",
    directLeadTitle: "Or send a direct booking request",
    directLeadSubtitle: "We will reach out to you within 24 hours.",
    namePlaceholder: "Your name / Company",
    emailPlaceholder: "Your email address",
    phonePlaceholder: "WhatsApp / Instagram handle",
    submitLead: "Send Booking Request",
    leadSubmitting: "Sending...",
    leadSuccess: "Request received! We will contact you shortly.",
    leadError: "Could not send. Please message us on WhatsApp or Instagram.",
    footerRights: "WolfxFilms · Medellín, Colombia",
    footerSpecs: "Cinema-grade · 4K · 48h",
    msg: (tier) => `Hi Carlos, I saw the Wolf X Films page and I'm interested in the ${tier} package. Here's what I'm working on: `
  },
  es: {
    navShows: "Trabajo",
    navHow: "Cómo funciona",
    navRates: "Precios",
    navAbout: "Sobre mí",
    navFaq: "Preguntas",
    instagram: "Instagram",
    skip: "Saltar intro",
    h1Line1: "Tu marca",
    h1Line2: "debería verse tan bien",
    h1Line3: "como tu negocio.",
    heroP: "Video cinematográfico para founders, podcasts y marcas. Dirigido, no solo grabado.",
    heroCap: "Producción cinematográfica para founders, podcasts y marcas · Medellín",
    booking: "Agenda abierta en Medellín · Sesiones limitadas",
    cta: "Reserva tu primera sesión",
    seeRates: "Ver precios",
    st1: "Ángulos de cámara",
    st2: "Con corrección de color",
    st3: "Entrega de material en bruto",
    st4: "Clips verticales con cada edición",
    cmpH: "Calidad de cine para tu marca.",
    cmpHint: "Arrastra sobre la imagen.",
    cmpP: "Muchas grandes conversaciones todavía se graban con la cámara del portátil. Arrastra sobre la imagen para ver lo que la luz trabajada, el audio profesional y una cámara de cine le hacen al mismo momento.",
    tagWeb: "Cámara del portátil · 720p",
    tagCinema: "Cámara de cine · 4K",
    showsH: "Trabajo seleccionado.",
    showsP: "Vlogs, episodios y piezas de marca que dirigí y grabé para founders y creadores.",
    watch: "Ver en YouTube →",
    role: "Director · DP",
    anglesH: "Dos ángulos. Cada momento cubierto.",
    anglesP: "Cámaras de línea cine aprobadas por Netflix en cada rodaje.",
    howH: "Una sesión. Tres pasos.",
    howP: "Tú llegas. Yo me encargo del resto, desde la primera luz hasta la exportación final.",
    chipCam: "Cámaras de línea cine aprobadas por Netflix",
    chipAngles: "Dos ángulos",
    chipAudio: "Solapa + mezclador",
    chipLight: "Luz de varios puntos",
    chipDel: "Entrega en 48h",
    notifTitle: "WolfxFilms",
    notif: "Tu episodio está listo · 4K + 6 clips",
    step1: "Paso 1",
    step2: "Paso 2",
    step3: "Paso 3",
    s1h: "Convierto tu espacio en un set",
    s1p: "Llevo cámaras de nivel cine, luz y audio a tu casa, oficina o venue, y trabajo el espacio hasta que se vea como un estudio.",
    s2h: "Tú hablas, yo dirijo",
    s2p: "Dos ángulos graban todo el tiempo mientras dirijo el encuadre, la luz y el ritmo. El b-roll se graba en la misma sesión.",
    s3h: "Recibes tu material",
    s3p: "Archivos 4K en bruto en 48 horas. Videos editados y clips en el plazo que acordemos antes del rodaje.",
    setH: "Tu espacio, convertido en set.",
    capBts: "Montaje · dos cámaras",
    capVert: "9:16 · clip para redes",
    capMon: "Monitor en set",
    capDet: "B-roll · detalle",
    ratesLabel: "Precios",
    ratesH: "Elige cuánto quieres delegarme.",
    ratesP: "En dólares, por sesión de producción. Una sesión puede ser la grabación de un podcast, un rodaje de marca (canal de YouTube, VSL, etc.) o un lote de contenido para redes (anuncios, formato corto).",
    perEp: "/ sesión",
    perMo: "/ mes",
    choose: "Elegir",
    recommended: "Recomendado",
    save: "Ahorra $1.500 / mes",
    t1: "Captura",
    t1p: "Material cinematográfico con el que tu editor va a disfrutar trabajar.",
    t1a: "Dos cámaras de línea cine, 4K",
    t1b: "Montaje de luz y audio",
    t1c: "Material en bruto con corrección de color",
    t1d2: "Reel de b-roll y recursos",
    t1e: "Entrega en 48 horas",
    t2: "Captura + Edición",
    t2p: "Lo grabo y te entrego un video terminado.",
    t2a: "Todo lo de Captura",
    t2b: "Video largo editado (episodio, vlog o pieza de marca)",
    t2c: "De 4 a 6 clips verticales para redes",
    t2e: "Limpieza y masterización de audio",
    t3: "Serie",
    t3p: "Tu contenido, producido cada mes, con estrategia incluida.",
    t3a: "4 sesiones de producción al mes",
    t3b: "Todo lo de Captura + Edición",
    t3c: "Tercer ángulo de cámara incluido",
    t3e: "Miniaturas y títulos",
    t3f: "Sesión mensual de estrategia de contenido",
    t3g: "Prioridad en la agenda",
    tiersFoot: "USD · Serie con mínimo de 3 meses · Tercer ángulo en Captura y Captura + Edición se cotiza por sesión",
    fitH: "Con quién trabajo.",
    icp1h: "Founders y marcas personales",
    icp1p: "Quieres mostrarte en internet como el experto que eres. Series a cámara, historias de founder y contenido para redes que se ve tan premium como tu oferta.",
    icp2h: "Podcasts",
    icp2p: "Lanzando un show o mejorando uno. Sesiones a dos ángulos en tu espacio, con la edición y los clips listos para publicar.",
    icp3h: "Empresas",
    icp3p: "Piezas de marca, videos de equipo y de producto, cobertura de eventos. Un solo director desde la idea hasta la exportación final.",
    icpNote: "¿Necesitas una grabación rápida y de bajo presupuesto? Un estudio de alquiler te servirá mejor.",
    aboutLabel: "Detrás de la cámara",
    portraitCap: "Carlos Jimenez · Director / DP",
    about1: "Panameño de nacimiento. Formado como director de cine. Hoy grabando desde Medellín.",
    about2: "Soy graduado en dirección de cine y he trabajado detrás de cámara en Panamá, Colombia, Brasil y Estados Unidos: cortometrajes, una larga lista de videos musicales y documentales que he dirigido y fotografiado como DP.",
    about3: "Hoy dirijo contenido para founders, emprendedores, artistas y empresas. Como director de contenido, planeo lo que grabas según lo que tu audiencia realmente ve, para que cada encuadre sirva a la historia y a los resultados.",
    bioK1: "He trabajado en",
    bioV1: "Panamá · Colombia · Brasil · EE. UU.",
    bioK2: "Créditos",
    bioV2: "Videos musicales · Cortometrajes · Documentales · Contenido de marca",
    bioK3: "Roles",
    bioV3: "Director · Director de fotografía · Director de contenido",
    faqH: "¿Preguntas? Respondidas.",
    q1: "¿Dónde grabamos?",
    a1: "En tu espacio: casa, oficina o venue. El montaje es móvil, así que no hay estudio que alquilar ni a dónde ir.",
    q2: "¿Necesito mi propio editor?",
    a2: "Con Captura, sí: recibes el material en bruto con color y el b-roll para tu editor. Con Captura + Edición o Serie, entrego el video terminado y los clips.",
    q3: "¿Qué tan rápida es la entrega?",
    a3: "Archivos en bruto en 48 horas. El mismo día cuando la agenda lo permite.",
    q4: "¿Cómo funciona Serie?",
    a4: "Cuatro sesiones de producción al mes, totalmente producidas, con una sesión mensual de estrategia para planear temas, títulos y clips. Tiene un mínimo de 3 meses para que tu contenido tome impulso.",
    q5: "¿Cómo reservo mi primera sesión?",
    a5: "Escríbeme por Instagram o WhatsApp con lo que quieres crear. Te respondo con una cotización y la lista de equipo, y un depósito asegura tu fecha.",
    q7: "¿Grabas en inglés y en español?",
    a7: "Sí. Dirijo en ambos idiomas, así que puedes grabar en el idioma que habla tu audiencia.",
    q8: "¿Qué equipo usas?",
    a8: "Cámaras, lentes, luces y audio de nivel cine. Recibes la lista completa de equipo con tu cotización.",
    testiH: "En sus palabras.",
    testiP: "Founders y creadores con los que he trabajado, contando su experiencia.",
    playSound: "Reproducir con sonido",
    bookH: "Hagamos que te veas tan bien como tu negocio.",
    bookP: "Elige un paquete, copia el mensaje y envíaselo a Carlos por Instagram @wolfxfilms o WhatsApp.",
    msgLabel: "Tu mensaje",
    copy: "Copiar mensaje",
    copied: "Copiado. Pégalo en WhatsApp o Instagram.",
    copyFail: "Seleccionado. Presiona Cmd/Ctrl + C para copiar.",
    igDm: "Abrir DM de Instagram",
    sendWhatsapp: "Hablar por WhatsApp",
    directLeadTitle: "O envía una solicitud de reserva directa",
    directLeadSubtitle: "Te responderemos en menos de 24 horas.",
    namePlaceholder: "Tu nombre / Empresa",
    emailPlaceholder: "Tu correo electrónico",
    phonePlaceholder: "WhatsApp / Instagram",
    submitLead: "Enviar Solicitud",
    leadSubmitting: "Enviando...",
    leadSuccess: "¡Solicitud recibida! Te contactaremos a la brevedad.",
    leadError: "No se pudo enviar. Por favor contáctanos por WhatsApp o Instagram.",
    footerRights: "WolfxFilms · Medellín, Colombia",
    footerSpecs: "Nivel cine · 4K · 48h",
    msg: (tier) => `Hola Carlos, vi la página de Wolf X Films y me interesa el paquete ${tier}. Esto es en lo que estoy trabajando: `
  }
};
