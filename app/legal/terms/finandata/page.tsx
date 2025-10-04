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
      <h1>Política de Privacidad de Finandata</h1>
      <p>
        <strong>Última actualización:</strong> 4 de octubre de 2025
      </p>

      <h2>Responsable</h2>
      <p>
        Finandata es una aplicación informativa desarrollada por{" "}
        <strong>Quenux</strong>. Contacto:{" "}
        <a href="mailto:contacto@quenux.com">contacto@quenux.com</a>
      </p>

      <h2>Datos tratados</h2>
      <ul>
        <li>
          <strong>Datos financieros públicos:</strong> información oficial
          publicada por la Superintendencia de Economía Popular y Solidaria
          (SEPS).
        </li>
        <li>
          <strong>Datos técnicos:</strong> dirección IP, sistema operativo,
          versión de la app y estadísticas de uso.
        </li>
        <li>
          <strong>No se recopilan datos personales sensibles</strong> como
          nombres, direcciones o identificaciones.
        </li>
      </ul>

      <h2>Finalidad</h2>
      <p>
        Mostrar información financiera comparativa de cooperativas de ahorro y
        crédito con fines educativos y de transparencia. Finandata no ofrece
        servicios financieros ni gestión de fondos.
      </p>

      <h2>Proveedores</h2>
      <p>
        Finandata usa servicios de Google Firebase (Firestore, Hosting,
        Authentication) con seguridad de nivel industrial.
      </p>

      <h2>Seguridad</h2>
      <p>
        Los datos se cifran en tránsito (HTTPS) y se almacenan en servidores con
        controles de acceso limitados.
      </p>

      <h2>Derechos del usuario</h2>
      <p>
        Puedes solicitar la eliminación de tu cuenta o datos escribiendo a{" "}
        <a href="mailto:contacto@quenux.com">contacto@quenux.com</a>.
      </p>

      <h2>Actualizaciones</h2>
      <p>
        Esta política puede actualizarse en cualquier momento. Las
        modificaciones se publicarán en esta misma sección del sitio web.
      </p>

      <footer
        style={{
          marginTop: "3rem",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        © 2025 Quenux / Finandata — Todos los derechos reservados.
      </footer>
    </main>
  );
}
