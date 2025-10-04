export default function Page() {
  return (
    <main
      style={{
        maxWidth: 880,
        margin: "40px auto",
        padding: "0 16px",
        lineHeight: 1.6,
      }}
    >
      <h1>Política de Privacidad de AlertaEC</h1>
      <p>
        <strong>Última actualización:</strong> 4 de octubre de 2025
      </p>

      <h2>Responsable</h2>
      <p>
        AlertaEC es una aplicación desarrollada por <strong>Quenux</strong>.
        Contacto: <a href="mailto:contacto@quenux.com">contacto@quenux.com</a>
      </p>

      <h2>Datos tratados</h2>
      <ul>
        <li>
          <strong>Ubicación:</strong> se usa únicamente para mostrar alertas y
          zonas peligrosas cercanas al usuario.
        </li>
        <li>
          <strong>Cuenta de usuario:</strong> correo electrónico y nombre, si se
          registra o inicia sesión con Google.
        </li>
        <li>
          <strong>Reportes:</strong> si el usuario decide compartir un incidente,
          se almacenan coordenadas, tipo de incidente e imagen opcional.
        </li>
        <li>
          <strong>No se recopilan datos personales sensibles</strong> como cédula,
          dirección o información financiera.
        </li>
      </ul>

      <h2>Finalidad</h2>
      <p>
        Mostrar zonas peligrosas y alertas en tiempo real para mejorar la
        seguridad ciudadana. AlertaEC no comparte datos con terceros ni
        utiliza la información con fines comerciales.
      </p>

      <h2>Proveedores</h2>
      <p>
        La app utiliza servicios de <strong>Google Firebase</strong> (Firestore,
        Authentication, Storage) con estándares de seguridad de nivel
        industrial.
      </p>

      <h2>Seguridad</h2>
      <p>
        Los datos se cifran en tránsito (HTTPS) y se almacenan en servidores con
        acceso restringido. Solo el usuario puede eliminar su cuenta o reportes
        creados.
      </p>

      <h2>Derechos del usuario</h2>
      <p>
        Puedes solicitar la eliminación de tu cuenta o datos enviando un correo
        a <a href="mailto:contacto@quenux.com">contacto@quenux.com</a>.
      </p>

      <h2>Actualizaciones</h2>
      <p>
        Esta política puede actualizarse en cualquier momento. Las
        modificaciones se publicarán en esta misma sección del sitio oficial.
      </p>

      <footer
        style={{
          marginTop: "3rem",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        © 2025 Quenux / AlertaEC — Todos los derechos reservados.
      </footer>
    </main>
  );
}

