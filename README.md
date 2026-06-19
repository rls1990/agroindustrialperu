# Agroindustrial Peru

Landing page construida con Next.js para una marca de frutas y agroindustria.

La página está organizada como una sola vista con navegación por anclas:

- `#inicio`
- `#productos`
- `#nosotros`
- `#clientes`
- `#contacto`

El header hace scroll animado entre secciones y el link activo cambia de color
según la sección visible.

## Estructura

```txt
app/
  layout.tsx
  page.tsx
  globals.css

components/
  layout/
    Header/
    Footer/
  sections/
    Hero/
    Productos/
    Nosotros/
    Clientes/
    Contacto/
  icons/

data/
  navigation.ts
  products.ts

public/
  images/
```

## Componentes principales

### `components/layout/Header/`

- `Header`: barra superior fija con navegación principal.
- `HeaderBrand`: logo/texto de marca con scroll animado al inicio.
- `HeaderNav`: navegación por anclas con estado activo por scroll.
- `HeaderMobileButton`: botón móvil para abrir el menú.
- `MobileMenu`: menú lateral para pantallas pequeñas.

### `components/layout/Footer/`

- `Footer`: pie de página con redes sociales y copyright.

### `components/sections/`

- `Hero`: primera pantalla con texto principal y carrusel.
- `Productos`: cards de productos con datos desde `data/products.ts`.
- `Nosotros`: descripción de la empresa.
- `Clientes`: bloque de clientes con carrusel de logos.
- `Contacto`: tarjetas de contacto y formulario visual.

### `components/icons/`

Iconos SVG reutilizables para botones, listas y redes sociales.

## Datos

La información está separada del JSX para mantener los componentes limpios:

- `data/navigation.ts`: links del nav, footer y WhatsApp.
- `data/products.ts`: catálogo de productos, títulos, colores y detalles.

## Comandos

```bash
npm run dev
npm run build
npm run lint
```

## Notas de implementación

- El layout usa `app/layout.tsx` para el header y footer globales.
- `app/page.tsx` orquesta todas las secciones de la landing.
- El scroll del nav está animado y ajustado para no quedar tapado por el header sticky.
- `Nosotros` y `Clientes` ocupan todo el ancho visual de la pantalla.

