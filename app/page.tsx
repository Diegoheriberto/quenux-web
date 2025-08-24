import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{maxWidth: 880, margin: "40px auto", padding: "0 16px", textAlign: "center", lineHeight: 1.6}}>
      <Image
        src="/quenux-logo.png"
        alt="Logo Quenux"
        width={200}
        height={200}
        style={{ margin: "0 auto 20px" }}
      />
      <h1>Quenux</h1>
      <p><strong>Innovación en apps desde Ecuador</strong></p>

      <section style={{marginTop: "40px"}}>
        <h2>Nuestras Apps</h2>
        <ul style={{listStyle: "none", padding: 0}}>
          <li>
            <h3>AlertaEC</h3>
            <Link href="/legal/privacy/alertaec">Política de Privacidad</Link> ·{" "}
            <Link href="/legal/terms/alertaec">Términos de Uso</Link>
          </li>
        </ul>
      </section>

      <footer style={{marginTop: "60px", fontSize: "0.9em", color: "#555"}}>
        <p>© {new Date().getFullYear()} Quenux · Todos los derechos reservados</p>
        <p>
          Contacto: <a href="mailto:quenux@quenux.app">quenux@quenux.app</a>
        </p>
      </footer>
    </main>
  );
}
