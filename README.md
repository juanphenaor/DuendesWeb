# Duendes Rugby Club - Sitio Web

Un sitio web estático moderno y responsivo para el Duendes Rugby Club, construido con React.js y Tailwind CSS.

## 🏉 Características

- **Diseño responsivo**: Optimizado para móviles, tablets y escritorio
- **Estética deportiva**: Colores y tipografías inspiradas en el rugby
- **Navegación suave**: Scroll suave entre secciones
- **Galería interactiva**: Lightbox para imágenes y videos
- **Formularios funcionales**: Validación en tiempo real
- **Redes sociales flotantes**: Acceso rápido a redes sociales
- **Totalmente estático**: Fácil de desplegar en cualquier hosting

## 🎨 Paleta de Colores

Basada en el logo del club:
- **Azul principal**: #0ea5e9 (Primary 500)
- **Amarillo/Naranja**: #fbbf24 (Secondary 400)
- **Negro/Gris oscuro**: #0f172a (Dark 900)
- **Blanco**: #ffffff
- **Grises**: Variaciones del gris para backgrounds y texto

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona o descarga el proyecto
2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre tu navegador en `http://localhost:3000`

### Comandos disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm eject`: Eyecta la configuración (¡irreversible!)

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Footer/         # Pie de página
│   ├── Hero/           # Sección hero de la página principal
│   ├── Lightbox/       # Visualizador de imágenes/videos
│   ├── Navbar/         # Barra de navegación
│   ├── NewsCard/       # Tarjeta de noticia
│   ├── NewsModal/      # Modal para mostrar noticias completas
│   └── SocialMediaFloat/ # Redes sociales flotantes
├── pages/              # Páginas principales
│   ├── Home.js         # Página de inicio (noticias)
│   ├── About.js        # Página "Nosotros"
│   ├── Gallery.js      # Galería de fotos y videos
│   ├── Contact.js      # Formulario de contacto
│   └── Registration.js # Formulario de inscripción
├── App.js              # Componente principal
├── index.js            # Punto de entrada
└── index.css           # Estilos globales y Tailwind
```

## 🎯 Secciones del Sitio

### 1. Inicio (Noticias)
- Hero section con información del club
- Grid de noticias con imágenes
- Modal para leer noticias completas

### 2. Nosotros
- Historia del club
- Categorías disponibles
- Valores del club
- Línea de tiempo de logros

### 3. Galería
- Filtros por categoría (partidos, entrenamientos, eventos)
- Grid responsivo de imágenes y videos
- Lightbox para visualización completa
- Navegación con teclado

### 4. Contacto
- Información de contacto completa
- Formulario con validación
- Mapa de ubicación (placeholder)
- Información de transporte

### 5. Inscripción
- Formulario completo de inscripción
- Validación en tiempo real
- Cálculo automático de edad
- Información de categorías y precios

## 🛠 Tecnologías Utilizadas

- **React.js 18**: Framework principal
- **Tailwind CSS**: Framework de estilos
- **React Router DOM**: Navegación
- **PostCSS & Autoprefixer**: Procesamiento de CSS

## 📱 Responsive Design

El sitio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Escritorio**: 1024px+

## 🚀 Despliegue

### Netlify

1. Construye el proyecto:
```bash
npm run build
```

2. Sube la carpeta `build` a Netlify

### Vercel

1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente que es un proyecto React
3. Despliega automáticamente

### Hosting tradicional

1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `build` a tu servidor web

## 🔧 Personalización

### Cambiar colores
Edita el archivo `tailwind.config.js` para modificar la paleta de colores.

### Añadir contenido
- **Noticias**: Modifica el array `newsData` en `src/pages/Home.js`
- **Galería**: Modifica el array `mediaData` en `src/pages/Gallery.js`
- **Información de contacto**: Edita `src/pages/Contact.js` y `src/components/Footer/Footer.js`

### Cambiar tipografías
Modifica las fuentes en `src/index.css` y actualiza `tailwind.config.js`.

## 📞 Soporte

Para cualquier consulta sobre el desarrollo o modificación del sitio web, contacta con el desarrollador.

## 📝 Licencia

Este proyecto ha sido desarrollado específicamente para el Duendes Rugby Club.

---

*Desarrollado con ❤️ para la familia rugbier de los Duendes*
