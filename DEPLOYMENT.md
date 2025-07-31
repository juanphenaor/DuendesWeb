# Duendes Rugby Club Website

## Deployment to GitHub Pages

Este proyecto está configurado para ser desplegado automáticamente en GitHub Pages.

### Configuración realizada:

1. **Dependencias instaladas:**
   - `gh-pages` como dependencia de desarrollo

2. **package.json configurado:**
   - `homepage`: URL de GitHub Pages
   - Scripts `predeploy` y `deploy` añadidos

3. **GitHub Actions Workflow:**
   - Deployment automático en pushes a la rama main/master
   - Archivo: `.github/workflows/deploy.yml`

4. **Routing para SPA:**
   - Archivo `404.html` para manejar rutas del lado del cliente
   - Script en `index.html` para convertir URLs

### Pasos para el deployment:

#### Opción 1: Deployment Automático (Recomendado)
1. Haz push de tus cambios a la rama main o master
2. GitHub Actions ejecutará automáticamente el build y deployment
3. El sitio estará disponible en: `https://juanphenaor.github.io/DuendesWeb`

#### Opción 2: Deployment Manual
```bash
npm run deploy
```

### Configuración de GitHub Pages:

1. Ve a tu repositorio en GitHub
2. Settings > Pages
3. Source: "GitHub Actions"
4. El workflow se ejecutará automáticamente

### URLs del sitio:
- **Producción:** https://juanphenaor.github.io/DuendesWeb
- **Desarrollo:** http://localhost:3000

### Scripts disponibles:

- `npm start` - Ejecuta la app en modo desarrollo
- `npm run build` - Construye la app para producción
- `npm run deploy` - Despliega manualmente a GitHub Pages
- `npm test` - Ejecuta las pruebas

### Notas importantes:

- El sitio usa React Router, configurado para trabajar con GitHub Pages
- Las rutas funcionan correctamente gracias al archivo 404.html
- El `basename` se configura automáticamente según el entorno
- Los archivos estáticos (imágenes, etc.) deben estar en la carpeta `public`

### Estructura de rutas:

- `/` - Página de inicio
- `/nosotros` - Acerca del club
- `/galeria` - Galería de fotos
- `/contacto` - Información de contacto
- `/inscripcion` - Formulario de inscripción

### Troubleshooting:

Si las rutas no funcionan después del deployment:
1. Verifica que GitHub Pages esté configurado para usar "GitHub Actions"
2. Asegúrate de que el workflow tiene permisos de escritura en Pages
3. Verifica que el `homepage` en package.json sea correcto

¡Listo para producción! 🚀
