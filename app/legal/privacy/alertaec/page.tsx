export default function Page() {
  return (
    <main style={{maxWidth: 880, margin: "40px auto", padding: "0 16px", lineHeight: 1.6}}>
      <h1>Política de Privacidad de AlertaEC</h1>
      <p><strong>Última actualización:</strong> 24 de agosto de 2025</p>
      <p><strong>Responsable:</strong> Quenux (Ecuador) · <strong>Contacto:</strong> quenux@quenux.app</p>

      <p>
        AlertaEC permite visualizar zonas peligrosas, recibir alertas y reportar incidentes.
        Respetamos tu privacidad.
      </p>

      <h2>Datos que tratamos</h2>
      <ul>
        <li><strong>Ubicación (precisa/aproximada):</strong> para centrar el mapa y activar notificaciones locales de proximidad.</li>
        <li><strong>Contenido opcional de reportes:</strong> texto e imágenes que envías (se publica solo si es aprobado por un administrador).</li>
        <li><strong>Identificadores de notificaciones:</strong> token FCM para enviarte alertas.</li>
        <li><strong>Datos técnicos anónimos:</strong> diagnósticos/errores para mejorar la app (p. ej., Firebase Crashlytics/Analytics).</li>
      </ul>

      <h2>Finalidades</h2>
      <p>Prestar el servicio (mapa, alertas, reportes), mejorar estabilidad y prevenir abusos.</p>

      <h2>Base legal</h2>
      <p>Ejecución del servicio, tu consentimiento (permisos de ubicación/cámara) e interés legítimo en seguridad.</p>

      <h2>Almacenamiento y retención</h2>
      <ul>
        <li>Reportes aprobados se conservan mientras sean relevantes o hasta solicitar eliminación.</li>
        <li>Tokens FCM mientras uses la app o hasta su expiración.</li>
        <li>Logs por periodos razonables para diagnóstico.</li>
      </ul>

      <h2>Proveedores (encargados)</h2>
      <p>
        Usamos Google Firebase (Hosting, Firestore, Crashlytics, Cloud Messaging) y servicios equivalentes con
        medidas de seguridad adecuadas. No vendemos tus datos.
      </p>

      <h2>Seguridad</h2>
      <p>Cifrado en tránsito, reglas de seguridad y controles de acceso. Ningún sistema es 100% infalible.</p>

      <h2>Tus derechos</h2>
      <p>
        Puedes acceder, corregir o solicitar eliminación escribiendo a <strong>quenux@quenux.app</strong>.  
        Puedes revocar permisos desde Ajustes del sistema (ubicación/cámara).
      </p>

      <h2>Menores</h2>
      <p>No dirigida a menores de 13 años.</p>

      <h2>Transferencias internacionales</h2>
      <p>Nuestros proveedores pueden procesar datos fuera de tu país bajo marcos de transferencia aplicables.</p>

      <h2>Cambios</h2>
      <p>Publicaremos actualizaciones en esta página. El uso continuado implica aceptación.</p>
    </main>
  );
}
