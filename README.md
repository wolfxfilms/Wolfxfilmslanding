# WolfxFilms · Landing Page

Landing page cinematográfica para **WolfxFilms** (Carlos Jimenez, Director / DP), construida con **Astro 5 + React 19**, estilizado con estética Dark Cinema, y preparada para despliegue en **Vercel** con base de datos en **Supabase**.

---

## 🚀 Tecnologías

- **Framework**: [Astro 5](https://astro.build/) (Modo Static con arquitectura de islas de alto rendimiento)
- **UI & Componentes Interactivos**: [React 19](https://react.dev/)
- **Estilos**: Dark Cinema CSS modular con variables CSS, animaciones conic beam, gradientes hairline y soporte para `prefers-reduced-motion`
- **Base de Datos**: [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- **Hosting**: [Vercel](https://vercel.com/) (Detección nativa de Astro, `vercel.json` optimizado para caché de video)
- **Internacionalización (i18n)**: Soporte completo en **Español (ES)** e **Inglés (EN)** con conmutación en tiempo real

---

## 🎬 Características y Secciones

1. **Hero Cinematográfico**: Video en loop (`hero.mp4`), secuencia de intro (`intro.mp4`) con botón de saltar, destellos de luz sobre Medellín, badge en vivo con indicador REC parpadeante y botones interactivos con haz de luz giratorio (Beam Button).
2. **Métricas de Impacto**: 2 ángulos de cámara, 4K con corrección de color, entrega en bruto en 48h, 4-6 clips verticales por edición.
3. **Comparador Interactivo de Cámaras**: Slider interactivo para arrastrar y comparar la calidad de una Webcam de portátil (720p) vs. Cámara de Cine (4K).
4. **Trabajo Seleccionado**: Muestra de episodios y vlogs dirigidos con miniaturas en video interactivo y enlaces a YouTube.
5. **Testimonios en Video**: Videos verticales en formato selfie de clientes (Jared Curry, Pavlo) con reproducción previa en bucle silencioso y botón para reproducir con audio completo.
6. **Dos Ángulos de Cine**: Cobertura A-Cam (50mm) y B-Cam (85mm) con cámaras aprobadas por Netflix.
7. **Cómo Funciona (3 Pasos)**:
   - Paso 1: Montaje del set (tu espacio convertido en estudio)
   - Paso 2: Grabación a dos cámaras y b-roll
   - Paso 3: Entrega en 48h (archivos 4K y clips listos para publicar)
8. **Galería En el Set**: Bento grid con planos BTS, tomas 9:16 para redes, monitor de rodaje y detalles b-roll.
9. **Precios y Paquetes**:
   - **Captura**: $1,000 / sesión
   - **Captura + Edición**: $2,000 / sesión (Recomendado)
   - **Serie**: $6,500 / mes (Ahorra $1,500/mes)
   - Botón interactivo que selecciona el paquete y hace scroll suave a la sección de reserva.
10. **Para Quién Es**: Founders y marcas personales, Podcasts, Empresas.
11. **Sobre el Director**: Perfil de Carlos Jimenez (Director / DP), formación cinematográfica y créditos en Panamá, Colombia, Brasil y EE. UU.
12. **Preguntas Frecuentes (FAQ)**: Acordeón interactivo con respuestas a dudas clave.
13. **Caja de Reserva y Captura de Leads**:
    - **Pestaña 1**: Generador dinámico de mensaje para WhatsApp o DM de Instagram con botón de copia con 1 clic.
    - **Pestaña 2**: Formulario directo de solicitud conectado a **Supabase** para registrar leads en la base de datos.
14. **Footer**: Enlaces de Instagram `@wolfxfilms` y especificaciones técnicas.

---

## 🛠️ Instalación y Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar la compilación de producción
npm run preview
```

El servidor local estará disponible en `http://localhost:4321`.

---

## 🗄️ Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com/).
2. Ve al **SQL Editor** en el panel de Supabase y ejecuta el archivo [`supabase-schema.sql`](./supabase-schema.sql):
   ```sql
   create table if not exists public.leads (
     id uuid primary key default gen_random_uuid(),
     name text not null,
     email text not null,
     phone_or_handle text,
     package_tier text,
     message text,
     language text default 'en',
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );

   alter table public.leads enable row level security;

   create policy "Allow anonymous inserts to leads"
   on public.leads for insert to anon with check (true);
   ```
3. Copia tus credenciales en el archivo `.env`:
   ```env
   PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
   ```

---

## ☁️ Despliegue en Vercel

1. Sube este repositorio a **GitHub**.
2. Entra a [Vercel](https://vercel.com/), haz clic en **Add New... > Project** e importa el repositorio.
3. Vercel detectará automáticamente **Astro**.
4. En **Environment Variables**, añade:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
5. Haz clic en **Deploy**. ¡Listo!

---

## 📁 Estructura del Proyecto

```
├── public/                 # Archivos estáticos públicos (videos, imágenes, favicon)
│   ├── favicon.svg
│   └── img/                # Videos mp4 y fotos optimizadas
├── src/
│   ├── components/         # Componentes React interactivos
│   │   ├── AboutDirector.tsx
│   │   ├── BookingBox.tsx
│   │   ├── ComparisonSlider.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Navbar.tsx
│   │   ├── Pricing.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── SetGallery.tsx
│   │   ├── Stats.tsx
│   │   ├── TargetAudience.tsx
│   │   ├── Testimonials.tsx
│   │   └── TwoAngles.tsx
│   ├── data/               # Diccionarios de idiomas y datos de portafolio
│   │   ├── portfolio.ts
│   │   └── translations.ts
│   ├── layouts/
│   │   └── Layout.astro    # Shell HTML, meta tags SEO, Open Graph y Schema JSON-LD
│   ├── lib/
│   │   ├── store.ts        # Estado de idioma y selección de paquete sincronizado
│   │   └── supabase.ts     # Cliente Supabase y método submitLead()
│   ├── pages/
│   │   └── index.astro     # Página principal Astro con arquitectura de islas
│   └── styles/
│       └── global.css      # Sistema de diseño Dark Cinema
├── supabase-schema.sql     # Script SQL para crear la tabla de leads en Supabase
├── vercel.json             # Reglas de caché y headers para Vercel
├── astro.config.mjs        # Configuración de Astro con integración de React
└── package.json
```
