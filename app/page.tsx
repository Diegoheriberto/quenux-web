import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: "0 16px", lineHeight: 1.6 }}>
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Image src="/quenux-logo.png" alt="Logo Quenux" width={160} height={160} style={{ borderRadius: "50%" }} />
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "1rem" }}>Quenux</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Innovación en apps desde Ecuador</p>
      </div>

      {/* Tarjeta de apps */}
      <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "24px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "1rem" }}>Nuestras Apps</h2>

        {/* AlertaEC */}
        <section style={{ marginBottom: 18 }}>
          <h3 style={{ marginBottom: 8 }}>AlertaEC</h3>
          <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: 12 }}>
            Zonas peligrosas, alertas y mapa para moverte más seguro.
          </p>
          <div style={{ marginBottom: 12 }}>
            <Link href="/legal/privacy/alertaec" style={{ marginRight: 16, fontSize: "0.9rem" }}>
              Política de Privacidad
            </Link>
            <Link href="/legal/terms/alertaec" style={{ fontSize: "0.9rem" }}>
              Términos de Uso
            </Link>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.quenux.alertaec"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#1a73e8",
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: 500,
              padding: "10px 18px",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            <Image src="/play.svg" alt="Google Play" width={20} height={20} />
            Ver en Play Store
          </a>
        </section>

        {/* Finandata (solo enlaces legales) */}
        <section>
          <h3 style={{ marginBottom: 8 }}>Finandata</h3>
          <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: 12 }}>
            Información financiera comparativa de cooperativas de Ecuador.
          </p>
          <div>
            <Link href="/legal/privacy/finandata" style={{ marginRight: 16, fontSize: "0.9rem" }}>
              Política de Privacidad
            </Link>
            <Link href="/legal/terms/finandata" style={{ fontSize: "0.9rem" }}>
              Términos de Uso
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.9rem", color: "#777" }}>
        © 2025 Quenux · Todos los derechos reservados <br />
        Contacto: <a href="mailto:quenux@quenux.app">quenux@quenux.app</a>
      </footer>
    </main>
  );
}

