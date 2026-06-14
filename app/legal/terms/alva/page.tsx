export default function Page() {
  return (
    <main
      style={{
        maxWidth: 880,
        margin: "40px auto",
        padding: "0 16px",
        lineHeight: 1.65,
      }}
    >
      <h1>Términos de Uso de ALVA</h1>

      <p>
        <strong>Última actualización:</strong> 14 de junio de 2026
      </p>

      <h2>1. Aceptación</h2>

      <p>
        Al utilizar la aplicación <strong>ALVA</strong>, el usuario acepta estos
        términos de uso y la Política de Privacidad.
      </p>

      <p>
        Si el usuario no está de acuerdo con estas condiciones, debe dejar de
        utilizar la aplicación.
      </p>

      <h2>2. Propósito de ALVA</h2>

      <p>ALVA ofrece herramientas para:</p>

      <ul>
        <li>consultar rutas y horarios de transporte;</li>
        <li>buscar buses que podrían pasar cerca;</li>
        <li>crear y compartir viajes;</li>
        <li>mostrar la última ubicación compartida por un viajero;</li>
        <li>contactar oficinas de cooperativas verificadas;</li>
        <li>recibir recordatorios relacionados con viajes activos.</li>
      </ul>

      <h2>3. Información referencial</h2>

      <p>
        Los horarios, tiempos, recorridos, precios, ubicaciones y buses cercanos
        mostrados por ALVA pueden ser aproximados o referenciales.
      </p>

      <p>
        La circulación real puede cambiar por tráfico, clima, cierres viales,
        decisiones operativas, retrasos, cambios de ruta u otras circunstancias.
      </p>

      <p>
        Se recomienda confirmar información importante directamente con la
        cooperativa correspondiente.
      </p>

      <h2>4. Buses cerca</h2>

      <p>
        La función “Buses cerca” realiza estimaciones basadas en rutas, horarios
        registrados, ubicación del usuario y tiempos aproximados.
      </p>

      <p>
        ALVA no garantiza que una unidad se encuentre exactamente en la
        ubicación o tiempo mostrado.
      </p>

      <h2>5. Viajes compartidos</h2>

      <p>
        El usuario puede compartir voluntariamente un código o enlace para que
        otra persona acompañe su viaje.
      </p>

      <p>
        ALVA muestra la última ubicación compartida y no necesariamente una
        ubicación continua o en tiempo real.
      </p>

      <p>
        El usuario es responsable de compartir el enlace únicamente con personas
        de confianza.
      </p>

      <h2>6. Uso de la ubicación</h2>

      <p>
        ALVA solicita ubicación cuando una función lo requiere, por ejemplo al
        iniciar un viaje, actualizarlo o consultar buses cerca.
      </p>

      <p>
        La aplicación no pretende realizar rastreo permanente del usuario.
      </p>

      <h2>7. Cooperativas verificadas</h2>

      <p>
        Algunas cooperativas pueden aparecer identificadas como verificadas
        cuando sus datos de contacto, rutas u horarios han sido revisados o
        proporcionados por sus representantes.
      </p>

      <p>
        La verificación no constituye una garantía absoluta sobre todos sus
        servicios, unidades, precios, horarios o disponibilidad.
      </p>

      <h2>8. Contacto, precios y tarifas especiales</h2>

      <p>
        ALVA puede permitir al usuario contactar directamente a una cooperativa
        mediante WhatsApp u otro canal oficial.
      </p>

      <p>
        Los precios, promociones, descuentos, tarifas especiales para grupos y
        disponibilidad son confirmados directamente por la cooperativa.
      </p>

      <p>
        ALVA no garantiza descuentos ni interviene actualmente en el cobro o
        pago de pasajes.
      </p>

      <h2>9. Servicios externos</h2>

      <p>
        ALVA utiliza servicios externos como Firebase, Open-Meteo,
        OpenStreetMap, servicios de rutas y WhatsApp.
      </p>

      <p>
        El funcionamiento de estos servicios puede depender de terceros,
        conexión a Internet, disponibilidad técnica y permisos del dispositivo.
      </p>

      <h2>10. Notificaciones</h2>

      <p>
        ALVA puede enviar notificaciones locales o notificaciones mediante
        servicios en la nube para recordar al usuario actualizar o finalizar un
        viaje.
      </p>

      <p>
        La recepción puede variar según el dispositivo, conexión, configuración
        de batería, permisos y sistema operativo.
      </p>

      <h2>11. Uso adecuado</h2>

      <p>El usuario se compromete a no:</p>

      <ul>
        <li>utilizar ALVA con fines ilícitos;</li>
        <li>compartir información falsa intencionalmente;</li>
        <li>intentar vulnerar la seguridad de la aplicación;</li>
        <li>acosar a cooperativas, conductores, oficinas u otros usuarios;</li>
        <li>utilizar códigos de viaje sin autorización.</li>
      </ul>

      <h2>12. Emergencias</h2>

      <p>
        ALVA no es un servicio de emergencia, seguridad pública, rescate ni
        monitoreo profesional.
      </p>

      <p>
        En caso de accidente, desaparición, delito o emergencia, el usuario debe
        comunicarse con las autoridades o servicios correspondientes.
      </p>

      <h2>13. Limitación de responsabilidad</h2>

      <p>
        Quenux no se responsabiliza por retrasos, cambios de ruta, pérdida de
        buses, decisiones de viaje, accidentes, fallas de terceros, falta de
        conexión, información desactualizada o decisiones tomadas exclusivamente
        con base en ALVA.
      </p>

      <h2>14. Propiedad intelectual</h2>

      <p>
        El nombre ALVA, su diseño, textos, estructura, código y elementos
        originales pertenecen a Quenux, salvo contenidos pertenecientes a
        terceros.
      </p>

      <h2>15. Cambios</h2>

      <p>
        Quenux podrá modificar estos términos para reflejar cambios legales,
        técnicos o funcionales.
      </p>

      <p>
        Las modificaciones se publicarán en esta misma página.
      </p>

      <h2>16. Contacto</h2>

      <p>
        Consultas:{" "}
        <a href="mailto:contacto@quenux.com">contacto@quenux.com</a>
      </p>

      <footer
        style={{
          marginTop: "3rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #ddd",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        © 2026 Quenux / ALVA — Todos los derechos reservados.
      </footer>
    </main>
  );
}
