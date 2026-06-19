# Agroindustrial Peru

Landing page en Next.js para una prueba tecnica enfocada en una marca de frutas/agroindustria.

## Estructura base

La idea es separar la pagina en bloques faciles de mantener:

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
    About/
    Products/
    Benefits/
    Gallery/
    Contact/
  ui/
    Button/
    Container/
    SectionTitle/

data/
  navigation.ts
  products.ts

lib/
  utils.ts

public/
  images/
  icons/
```

## Para que sirve cada carpeta

### `app/`
Contiene la estructura principal de Next.js:

- `layout.tsx`: layout global de la app.
- `page.tsx`: pagina principal de la landing.
- `globals.css`: estilos globales y variables base.

### `components/layout/`
Componentes de estructura general.

- `Header`: barra superior de navegacion.
- `Footer`: pie de pagina con enlaces y datos de contacto.

### `components/sections/`
Secciones grandes de la landing, una por bloque visual.

- `Hero`: primera pantalla, titulo principal y llamada a la accion.
- `About`: descripcion de la empresa o propuesta de valor.
- `Products`: lista de productos o categorias.
- `Benefits`: ventajas o diferenciadores.
- `Gallery`: imagenes o composicion visual.
- `Contact`: formulario o datos de contacto.

### `components/ui/`
Piezas reutilizables pequenas.

- `Button`: boton principal o secundario.
- `Container`: wrapper para alinear el contenido.
- `SectionTitle`: titulo reutilizable para secciones.

### `data/`
Contenido estatico separado del JSX.

Esto ayuda a mantener los componentes limpios y facilita editar textos o listas sin tocar la estructura.

### `lib/`
Funciones auxiliares y utilidades compartidas.

### `public/`
Archivos estaticos accesibles desde la app, como imagenes e iconos.

## Orden recomendado para construir la landing

1. `Header`
2. `Hero`
3. `About`
4. `Products`
5. `Benefits`
6. `Gallery`
7. `Contact`
8. `Footer`

## Comandos utiles

```bash
npm run dev
npm run build
npm run lint
```

## Nota

Esta estructura esta pensada para crecer sin desordenarse. Si la landing termina siendo pequena, puedes usar solo:

```txt
app/
components/
data/
public/
```
