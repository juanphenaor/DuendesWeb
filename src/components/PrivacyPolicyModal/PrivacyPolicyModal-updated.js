import React from 'react';
import Modal from '../Modal/Modal';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const titleStyle = {
    fontFamily: '"Montserrat", "Nunito Sans", "Inter", "Segoe UI", sans-serif',
    fontWeight: '600'
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Política de Privacidad - Duendes Rugby Club"
      maxWidth="max-w-4xl"
    >
      <div className="prose prose-lg max-w-none">
        <div className="text-sm text-gray-700 mb-6" style={{ fontFamily: '"Inter", sans-serif' }}>
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            1. Información que Recopilamos
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              En Duendes Rugby Club recopilamos información personal cuando usted:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Se registra como jugador o socio del club</li>
              <li>Participa en eventos, entrenamientos o competiciones</li>
              <li>Se suscribe a nuestro boletín informativo</li>
              <li>Nos contacta a través de nuestros formularios web</li>
              <li>Interactúa con nuestras redes sociales</li>
            </ul>
            <p>
              La información puede incluir: nombre, edad, dirección, teléfono, email, 
              información médica relevante para la práctica deportiva, fotografías y videos 
              de eventos deportivos.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            2. Uso de la Información
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>Utilizamos su información personal para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Administrar su membresía y participación en el club</li>
              <li>Organizar entrenamientos, partidos y eventos</li>
              <li>Comunicar información importante del club</li>
              <li>Garantizar la seguridad durante las actividades deportivas</li>
              <li>Cumplir con requisitos legales y reglamentarios del deporte</li>
              <li>Promover las actividades del club en medios y redes sociales</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            3. Compartir Información
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Podemos compartir su información con:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Federaciones y organismos deportivos oficiales</li>
              <li>Servicios médicos de emergencia cuando sea necesario</li>
              <li>Otros clubes para la organización de competiciones</li>
              <li>Proveedores de servicios que nos ayudan a operar el club</li>
            </ul>
            <p>
              <strong>No vendemos</strong> su información personal a terceros para fines comerciales.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            4. Protección de Datos
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Implementamos medidas de seguridad apropiadas para proteger su información personal 
              contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Encriptación de datos sensibles</li>
              <li>Acceso restringido a información personal</li>
              <li>Capacitación regular del personal en protección de datos</li>
              <li>Revisiones periódicas de nuestras políticas de seguridad</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            5. Sus Derechos
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>Usted tiene derecho a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acceder a su información personal</li>
              <li>Corregir información incorrecta o incompleta</li>
              <li>Solicitar la eliminación de su información</li>
              <li>Limitar el procesamiento de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
              <li>Presentar una queja ante la autoridad de protección de datos</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            6. Retención de Datos
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Mantenemos su información personal solo durante el tiempo necesario para 
              cumplir con los propósitos descritos en esta política, a menos que la ley 
              requiera un período de retención más largo.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            7. Cambios en esta Política
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Podemos actualizar esta política de privacidad ocasionalmente. 
              Le notificaremos sobre cambios significativos publicando la nueva 
              política en nuestro sitio web con una fecha de actualización revisada.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            8. Contacto
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Si tiene preguntas sobre esta política de privacidad, puede contactarnos:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
              <p><strong>Email:</strong> privacidad@duendesrugby.com</p>
              <p><strong>Teléfono:</strong> +57 (XXX) XXX-XXXX</p>
              <p><strong>Dirección:</strong> [Dirección del Club]</p>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default PrivacyPolicyModal;
