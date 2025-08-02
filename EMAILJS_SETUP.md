# 📧 Configuración de EmailJS para Duendes Rugby Club

## ✅ Pasos completados:
- ✅ Instalada librería EmailJS
- ✅ Actualizada barra de navegación (solo Nosotros, Galería, Contacto)
- ✅ Eliminado enlace de Inscripción 
- ✅ Configurado formulario para envío de emails

## 🔧 Configuración pendiente de EmailJS:

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita con el email: `corporacionduendesrc@gmail.com`

### 2. Configurar servicio de email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service" 
3. Selecciona "Gmail"
4. Conecta la cuenta `corporacionduendesrc@gmail.com`
5. Copia el **Service ID** (ejemplo: `service_abc123`)

### 3. Crear template de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa este contenido:

**Asunto del template:**
```
Nuevo mensaje de contacto - {{subject}}
```

**Cuerpo del template:**
```
Nuevo mensaje recibido desde el sitio web de Duendes Rugby Club:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{from_phone}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto del sitio web.
Para responder, usa el email: {{reply_to}}
```

4. Guarda el template y copia el **Template ID** (ejemplo: `template_xyz789`)

### 4. Obtener clave pública
1. Ve a "Account" > "API Keys"
2. Copia la **Public Key** (ejemplo: `user_ABC123xyz`)

### 5. Actualizar configuración
Edita el archivo `src/config/emailConfig.js` y reemplaza:

```javascript
export const emailConfig = {
  serviceID: 'tu_service_id_aqui',     // Del paso 2
  templateID: 'tu_template_id_aqui',   // Del paso 3  
  publicKey: 'tu_public_key_aqui',     // Del paso 4
};
```

### 6. Probar el formulario
Una vez configurado, el formulario enviará emails automáticamente a `corporacionduendesrc@gmail.com`

## 🎯 Funcionalidades implementadas:

### Navegación:
- **Icono del club**: Navega al inicio
- **Menú**: Solo "Nosotros", "Galería", "Contacto"
- **Eliminado**: Enlace de "Inscripción"

### Formulario de contacto:
- **Envío real de emails**: A `corporacionduendesrc@gmail.com`
- **Validación completa**: Campos obligatorios y formatos
- **Mensajes de estado**: Éxito y error
- **Datos incluidos**: Nombre, email, teléfono, asunto, mensaje

## 🚀 Para activar:
1. Completa la configuración de EmailJS (pasos 1-5)
2. Reinicia el servidor de desarrollo
3. ¡El formulario estará listo para recibir mensajes reales!

## 📱 Plan gratuito de EmailJS:
- 200 emails por mes gratis
- Perfecto para el volumen esperado del club
- Sin necesidad de backend propio
