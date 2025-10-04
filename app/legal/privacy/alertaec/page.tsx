export default function Page() {
  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>Política de Privacidad de AlertaEC</h1>
      <p><strong>Última actualización:</strong> 4 de octubre de 2025</p>

      <h2>Responsable</h2>
      <p>
        AlertaEC es una aplicación de Quenux. Contacto: <a href="mailto:quenux@quenux.app">quenux@quenux.app</a>
      </p>

      <h2>Datos que tratamos</h2>
      <ul>
        <li><strong>Ubicación (opcional):</strong> para centrar el mapa y alertas de proximidad.</li>
        <li><strong>Contenido opcional de reportes:</strong> texto e imágenes enviados por el usuario (se publica solo si es aprobado).</li>
        <li><strong>Identificadores de notificaciones:</strong> token FCM para enviarte alertas.</li>
        <li><strong>Diagnósticos técnicos anónimos:</strong> errores/usage para mejorar estabilidad.</li>
      </ul>

      <h2>Finalidades</h2>
      <p>Prestar el servicio (mapa, alertas, reportes), mejorar estabilidad y prevenir abusos.</p>

      <h2>Base legal</h2>
      <p>Consentimiento (permisos de ubicación/cámara) e interés legítimo en seguridad.</p>

      <h2>Almacenamiento y retención</h2>
      <p>
        Reportes aprobados se conservan mientras sean relevantes o hasta solicitar eliminación.
        Tokens FCM mientras uses la app o hasta su expiración. Logs por periodos razonables para diagnóstico.
      </p>

      <h2>Proveedores</h2>
      <p>Google Firebase (Hosting, Firestore, Crashlytics, Cloud Messaging) y servicios equivalentes con medidas de seguridad adecuadas.</p>

      <h2>Seguridad</h2>
      <p>Cifrado en tránsito (HTTPS), reglas de seguridad y controles de acceso. Ningún sistema es 100% infalible.</p>

      <h2>Tus derechos</h2>
      <p>Puedes acceder, corregir o solicitar eliminación escribiendo a <a href="mailto:quenux@quenux.app">quenux@quenux.app</a>. Puedes revocar permisos desde ajustes del sistema (ubicación/cámara).</p>

      <h2>Menores</h2>
      <p>No dirigida a menores de 13 años.</p>

      <h2>Actualizaciones</h2>
      <p>Esta política puede actualizarse y se publicará en esta misma URL.</p>

      <hr style={{ marginTop: 40, opacity: 0.3 }} />
      <p style={{ fontSize: 14, color: "#666" }}>
        © {new Date().getFullYear()} Quenux / AlertaEC — Todos los derechos reservados.
      </p>
    </main>
  );
}

