export default function Page() {
  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>Política de Privacidad de AlertaEC</h1>
      <p><strong>Última actualización:</strong> 4 de octubre de 2025</p>

      <h2>Responsable</h2>
      <p>
        AlertaEC es una aplicación informativa desarrollada por <strong>Quenux</strong>.
        Contacto: <a href="mailto:contacto@quenux.com">contacto@quenux.com</a>
      </p>

      <h2>Datos tratados</h2>
      <ul>
        <li><strong>Ubicación:</strong> Se usa para detectar zonas peligrosas cercanas y generar alertas.</li>
        <li><strong>Cuenta de usuario:</strong> Si inicias sesión con Google, se almacena tu nombre y correo electrónico.</li>
        <li><strong>Reportes:</strong> Tipo de incidente, coordenadas, ciudad y una imagen opcional.</li>
        <li><strong>Datos técnicos:</strong> Sistema operativo, versión de la app, estadísticas de uso.</li>
        <li><strong>No se recopilan datos sensibles</strong> (como identificación o dirección exacta).</li>
      </ul>

      <h2>Finalidad</h2>
      <p>
        Mejorar la seguridad ciudadana mostrando alertas y zonas de riesgo basadas en reportes de la comunidad.
        No hay fines comerciales ni venta de datos a terceros.
      </p>

      <h2>Proveedores</h2>
      <p>
        La app utiliza servicios de <strong>Google Firebase</strong> (Firestore, Authentication, Storage)
        con seguridad de nivel industrial.
      </p>

      <h2>Seguridad</h2>
      <p>
        Los datos se cifran en tránsito (HTTPS) y se almacenan en servidores seguros.
        Solo el usuario puede eliminar su cuenta o reportes asociados.
      </p>

      <h2>Derechos del usuario</h2>
      <p>
        Puedes solicitar la eliminación de tus datos escribiendo a{" "}
        <a href="mailto:contacto@quenux.com">contacto@quenux.com</a>.
      </p>

      <h2>Actualizaciones</h2>
      <p>
        Esta política puede modificarse en cualquier momento.
        Las actualizaciones se publicarán en esta misma sección.
      </p>

      <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.9rem", color: "#777" }}>
        © 2025 Quenux / AlertaEC — Todos los derechos reservados.
      </footer>
    </main>
  );
}
