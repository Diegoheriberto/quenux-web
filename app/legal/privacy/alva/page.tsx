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
      <h1>Política de Privacidad de ALVA</h1>

      <p>
        <strong>Última actualización:</strong> 14 de junio de 2026
      </p>

      <p>
        ALVA es una aplicación desarrollada por <strong>Quenux</strong> para
        consultar rutas y horarios de transporte, buscar buses que podrían pasar
        cerca y permitir que una persona comparta voluntariamente información de
        su viaje con familiares o acompañantes.
      </p>

      <h2>1. Responsable</h2>

      <p>
        Responsable: <strong>Quenux</strong>
        <br />
        País: Ecuador
        <br />
        Contacto:{" "}
        <a href="mailto:contacto@quenux.com">contacto@quenux.com</a>
      </p>

      <h2>2. Información que tratamos</h2>

      <h3>Ubicación</h3>

      <p>ALVA puede solicitar acceso a la ubicación del dispositivo para:</p>

      <ul>
        <li>establecer el punto de inicio de un viaje;</li>
        <li>actualizar voluntariamente la ubicación de un viaje activo;</li>
        <li>mostrar al acompañante la última ubicación compartida;</li>
        <li>buscar buses que podrían pasar cerca;</li>
        <li>
          identificar oficinas o contactos de cooperativas próximos al usuario.
        </li>
      </ul>

      <p>
        ALVA no realiza un rastreo permanente. La ubicación se obtiene cuando el
        usuario utiliza una función que la necesita o presiona voluntariamente
        una opción para actualizarla.
      </p>

      <h3>Información del viaje</h3>

      <p>Cuando el usuario crea un viaje, podemos almacenar:</p>

      <ul>
        <li>origen y destino;</li>
        <li>coordenadas de origen y destino;</li>
        <li>tipo y nombre del vehículo;</li>
        <li>fecha y hora de salida;</li>
        <li>duración estimada;</li>
        <li>ruta o corredor escogido;</li>
        <li>progreso y tiempo restante estimado;</li>
        <li>última ubicación compartida;</li>
        <li>estado del viaje, como activo o finalizado;</li>
        <li>código o enlace utilizado para compartir el viaje.</li>
      </ul>

      <h3>Identificadores técnicos</h3>

      <p>
        ALVA utiliza autenticación anónima de Firebase. Esto puede generar un
        identificador técnico para asociar viajes y funciones con el dispositivo
        sin solicitar nombre, cédula, correo electrónico ni contraseña.
      </p>

      <p>
        También se pueden utilizar tokens técnicos de Firebase Cloud Messaging
        para:
      </p>

      <ul>
        <li>enviar recordatorios al viajero;</li>
        <li>
          avisar a familiares o acompañantes cuando el viaje es actualizado;
        </li>
        <li>gestionar notificaciones relacionadas con viajes activos.</li>
      </ul>

      <h3>Información almacenada localmente</h3>

      <p>El dispositivo puede guardar:</p>

      <ul>
        <li>identificador del viaje activo;</li>
        <li>códigos de viajes acompañados;</li>
        <li>búsquedas recientes;</li>
        <li>horarios guardados;</li>
        <li>preferencias de la aplicación;</li>
        <li>información meteorológica almacenada temporalmente.</li>
      </ul>

      <h2>3. Finalidad de la información</h2>

      <p>La información se utiliza para:</p>

      <ul>
        <li>crear, actualizar y finalizar viajes;</li>
        <li>permitir el acompañamiento mediante código o enlace;</li>
        <li>mostrar la última ubicación compartida;</li>
        <li>calcular tiempos y progreso estimado;</li>
        <li>mostrar rutas, horarios y buses estimados;</li>
        <li>enviar notificaciones y recordatorios;</li>
        <li>permitir el contacto con cooperativas verificadas;</li>
        <li>mejorar la seguridad y estabilidad de la aplicación.</li>
      </ul>

      <h2>4. Servicios de terceros</h2>

      <p>ALVA utiliza servicios tecnológicos externos, entre ellos:</p>

      <ul>
        <li>
          <strong>Google Firebase:</strong> autenticación anónima, Firestore,
          Cloud Functions y notificaciones.
        </li>
        <li>
          <strong>Firebase Cloud Messaging:</strong> envío de notificaciones.
        </li>
        <li>
          <strong>Open-Meteo:</strong> información meteorológica.
        </li>
        <li>
          <strong>OpenStreetMap y servicios cartográficos:</strong> mapas,
          rutas y representación geográfica.
        </li>
        <li>
          <strong>WhatsApp:</strong> únicamente cuando el usuario decide
          contactar una cooperativa o compartir información.
        </li>
      </ul>

      <p>
        Estos proveedores pueden tratar información técnica de acuerdo con sus
        propias políticas y condiciones.
      </p>

      <h2>5. Viajes compartidos</h2>

      <p>
        Cuando un usuario comparte un código o enlace de viaje, cualquier
        persona que lo reciba podrá consultar la información disponible de ese
        viaje, como:
      </p>

      <ul>
        <li>destino;</li>
        <li>vehículo;</li>
        <li>progreso estimado;</li>
        <li>estado del viaje;</li>
        <li>última ubicación compartida.</li>
      </ul>

      <p>
        El usuario debe compartir el código o enlace únicamente con personas de
        confianza.
      </p>

      <h2>6. Cooperativas y contactos</h2>

      <p>
        ALVA puede mostrar información pública, referencial o proporcionada por
        cooperativas de transporte.
      </p>

      <p>
        Cuando una cooperativa está identificada como verificada, el usuario
        puede decidir contactar su oficina oficial mediante WhatsApp.
      </p>

      <p>
        ALVA no controla las respuestas, precios, promociones, disponibilidad ni
        condiciones ofrecidas directamente por las cooperativas.
      </p>

      <h2>7. Conservación de datos</h2>

      <p>
        Los datos se conservarán durante el tiempo necesario para prestar las
        funciones de ALVA, mantener la seguridad, resolver incidencias y cumplir
        obligaciones legales.
      </p>

      <p>
        Los viajes finalizados podrán conservarse temporalmente hasta su
        eliminación administrativa o hasta que el usuario solicite su
        eliminación.
      </p>

      <h2>8. Seguridad</h2>

      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger la
        información.
      </p>

      <p>
        Sin embargo, ningún sistema conectado a Internet puede garantizar una
        seguridad absoluta. Los códigos y enlaces de viaje deben tratarse como
        información privada.
      </p>

      <h2>9. Venta de datos y publicidad</h2>

      <p>
        ALVA no vende información personal a terceros.
      </p>

      <p>
        Actualmente, ALVA no utiliza la ubicación del usuario para publicidad
        personalizada.
      </p>

      <p>
        Si en el futuro se incorporan anuncios o nuevas formas de tratamiento,
        esta política será actualizada.
      </p>

      <h2>10. Menores de edad</h2>

      <p>
        ALVA no está diseñada específicamente para recopilar información
        personal de menores de edad sin supervisión.
      </p>

      <p>
        Cuando un menor utilice la aplicación, se recomienda que lo haga con
        conocimiento y supervisión de su padre, madre o representante legal.
      </p>

      <h2>11. Derechos del usuario</h2>

      <p>El usuario puede solicitar:</p>

      <ul>
        <li>acceso a sus datos;</li>
        <li>rectificación o actualización;</li>
        <li>eliminación;</li>
        <li>oposición a determinados tratamientos;</li>
        <li>información sobre el uso de sus datos;</li>
        <li>retiro del consentimiento cuando corresponda.</li>
      </ul>

      <p>
        Las solicitudes pueden enviarse a{" "}
        <a href="mailto:contacto@quenux.com">contacto@quenux.com</a>.
      </p>

      <h2>12. Permisos del dispositivo</h2>

      <p>
        El usuario puede retirar los permisos de ubicación o notificaciones
        desde los ajustes del dispositivo.
      </p>

      <p>
        Al retirar estos permisos, algunas funciones de ALVA podrían dejar de
        estar disponibles.
      </p>

      <h2>13. Limitaciones del servicio</h2>

      <p>
        Las rutas, horarios, tiempos, ubicaciones estimadas, precios
        referenciales y buses cercanos pueden no ser exactos.
      </p>

      <p>
        ALVA no reemplaza servicios de emergencia, autoridades, cooperativas,
        terminales ni sistemas oficiales de transporte.
      </p>

      <h2>14. Cambios en esta política</h2>

      <p>
        Esta Política de Privacidad podrá actualizarse para reflejar cambios
        legales, técnicos o funcionales.
      </p>

      <p>
        La fecha de la última actualización aparecerá al inicio del documento.
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
