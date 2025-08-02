// Configuración de EmailJS para Duendes Rugby Club
// Instrucciones de configuración:

/*
PASOS PARA CONFIGURAR EMAILJS:

1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
2. Crea un nuevo servicio de email:
   - Selecciona Gmail como proveedor
   - Conecta tu cuenta corporacionduendesrc@gmail.com
   
3. Crea un template de email con estas variables:
   - {{from_name}} - Nombre del remitente
   - {{from_email}} - Email del remitente  
   - {{from_phone}} - Teléfono del remitente
   - {{subject}} - Asunto del mensaje
   - {{message}} - Mensaje principal
   - {{to_email}} - Email de destino (corporacionduendesrc@gmail.com)
   - {{reply_to}} - Email para responder

4. Copia los IDs y la clave pública aquí:
*/

export const emailConfig = {
  serviceID: 'service_f0ve9z8', // Reemplaza con tu Service ID real de EmailJS
  templateID: 'template_32ishz8', // Template ID ya configurado
  publicKey: 'suKLlpDqw_9DQUPBP', // Public Key ya configurado
};

// Template corporativo actual en EmailJS:
/*
Asunto: 🏉 Nueva consulta: {{inquiry_subject}} - Duendes Rugby Club

Variables disponibles:
- {{contact_name}} - Nombre completo del contacto
- {{contact_email}} - Email del contacto
- {{contact_phone}} - Teléfono del contacto
- {{contact_date}} - Fecha y hora completa
- {{inquiry_subject}} - Asunto de la consulta
- {{inquiry_message}} - Mensaje principal

El template HTML incluye diseño corporativo formal con:
- Header con gradiente y logo corporativo
- Secciones organizadas y profesionales
- Información de contacto en tabla
- Acciones recomendadas para el administrador
- Botón de respuesta automática
- Footer corporativo con información del club
*/
