export default function Page() {
  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>Términos de Uso de Finandata</h1>
      <p><strong>Última actualización:</strong> 4 de octubre de 2025</p>

      <h2>Aceptación de los términos</h2>
      <p>
        Al acceder o usar Finandata, aceptas cumplir con estos Términos de Uso y con todas las leyes aplicables.
        Si no estás de acuerdo con alguno de los términos, por favor no utilices la aplicación.
      </p>

      <h2>Descripción del servicio</h2>
      <p>
        Finandata es una aplicación informativa que presenta datos financieros públicos sobre cooperativas de ahorro y crédito
        en Ecuador, basados en información de la Superintendencia de Economía Popular y Solidaria (SEPS).
      </p>
      <p>
        Finandata no es una institución financiera, no ofrece productos de inversión, ni gestiona fondos de usuarios.
      </p>

      <h2>Uso permitido</h2>
      <ul>
        <li>Usar la aplicación únicamente para fines personales e informativos.</li>
        <li>No modificar, copiar ni distribuir el contenido sin autorización.</li>
        <li>No utilizar la app para fines fraudulentos, difamatorios o ilegales.</li>
      </ul>

      <h2>Propiedad intelectual</h2>
      <p>
        Todos los derechos de diseño, interfaz, código y marca “Finandata” pertenecen a <strong>Quenux</strong>.
        Los datos financieros mostrados pertenecen a sus respectivas fuentes oficiales.
      </p>

      <h2>Limitación de responsabilidad</h2>
      <p>
        Finandata se proporciona “tal cual” sin garantías de ningún tipo.  
        Quenux no se responsabiliza por errores, omisiones o decisiones tomadas con base en la información presentada.
      </p>

      <h2>Enlaces externos</h2>
      <p>
        La aplicación puede incluir enlaces a sitios externos (por ejemplo, SEPS, cooperativas o medios oficiales).
        Quenux no es responsable del contenido o políticas de dichos sitios.
      </p>

      <h2>Modificaciones</h2>
      <p>
        Quenux se reserva el derecho de modificar estos Términos en cualquier momento.
        Las actualizaciones se publicarán en esta misma sección.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier consulta, escríbenos a  
        <a href="mailto:contacto@quenux.com"> contacto@quenux.com</a>.
      </p>

      <hr style={{ marginTop: 40, opacity: 0.3 }} />
      <p style={{ fontSize: 14, color: "#666" }}>
        © {new Date().getFullYear()} Quenux / Finandata — Todos los derechos reservados.
      </p>
    </main>
  );
}
