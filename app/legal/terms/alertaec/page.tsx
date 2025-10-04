export default function Page() {
  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>Términos de Uso de AlertaEC</h1>
      <p><strong>Última actualización:</strong> 4 de octubre de 2025</p>

      <h2>Aceptación</h2>
      <p>Al usar AlertaEC aceptas estos Términos y las políticas aplicables. Si no estás de acuerdo, no uses la app.</p>

      <h2>Servicio</h2>
      <p>Mapa de zonas peligrosas, alertas y envío de reportes comunitarios moderados. No es un servicio de emergencia.</p>

      <h2>Uso permitido</h2>
      <ul>
        <li>Usar la app de forma responsable y legal.</li>
        <li>No publicar contenido falso, difamatorio o ilegal.</li>
        <li>No intentar vulnerar la seguridad del servicio.</li>
      </ul>

      <h2>Moderación</h2>
      <p>Los reportes pueden ser editados o rechazados para cumplir con normas y leyes.</p>

      <h2>Propiedad intelectual</h2>
      <p>Marca, diseño y código pertenecen a Quenux. El contenido enviado por usuarios mantiene su autoría.</p>

      <h2>Limitación de responsabilidad</h2>
      <p>
        La información puede contener errores u omisiones. Quenux no se responsabiliza por decisiones basadas en la app.
        Ante una emergencia, contacta a autoridades.
      </p>

      <h2>Enlaces externos</h2>
      <p>Enlaces a sitios de terceros no implican respaldo; no somos responsables de su contenido.</p>

      <h2>Modificaciones</h2>
      <p>Podemos actualizar estos Términos y publicaremos los cambios en esta URL.</p>

      <h2>Contacto</h2>
      <p>Escríbenos a <a href="mailto:quenux@quenux.app">quenux@quenux.app</a>.</p>

      <hr style={{ marginTop: 40, opacity: 0.3 }} />
      <p style={{ fontSize: 14, color: "#666" }}>
        © {new Date().getFullYear()} Quenux / AlertaEC — Todos los derechos reservados.
      </p>
    </main>
  );
}

