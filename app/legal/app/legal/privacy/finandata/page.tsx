export default function Page() {
  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>Política de Privacidad de Finandata</h1>
      <p><strong>Última actualización:</strong> 4 de octubre de 2025</p>

      <h2>Responsable</h2>
      <p>Finandata es una aplicación desarrollada por <strong>Quenux</strong> (Ecuador).  
      Contacto: <a href="mailto:quenux@quenux.app">quenux@quenux.app</a></p>

      <h2>Datos tratados</h2>
      <ul>
        <li><strong>Datos financieros públicos:</strong> información de cooperativas obtenida de fuentes oficiales (SEPS).</li>
        <li><strong>Datos técnicos:</strong> uso anónimo de la app (rendimiento, errores).</li>
        <li><strong>No se recopilan datos personales de usuarios finales.</strong></li>
      </ul>

      <h2>Finalidad</h2>
      <p>Mostrar información financiera de manera educativa y transparente, sin operaciones reales de inversión ni gestión de fondos.</p>

      <h2>Proveedores</h2>
      <p>Finandata usa servicios de Google Firebase (Firestore, Hosting, Authentication) con seguridad estándar de la industria.</p>

      <h2>Seguridad</h2>
      <p>Los datos se cifran en tránsito (HTTPS) y se almacenan en servidores con controles de acceso limitados.</p>

      <h2>Tus derechos</h2>
      <p>Puedes solicitar aclaraciones o eliminación de información escribiendo a  
      <a href="mailto:quenux@quenux.app">quenux@quenux.app</a>.</p>

      <h2>Menores</h2>
      <p>Finandata no está dirigida a menores de 13 años.</p>

      <h2>Transferencias internacionales</h2>
      <p>Los servicios pueden procesar datos en servidores ubicados fuera de Ecuador, cumpliendo las políticas de privacidad de Firebase.</p>

      <hr />
      <p>© 2025 Quenux. Todos los derechos reservados.</p>
    </main>
  );
}
