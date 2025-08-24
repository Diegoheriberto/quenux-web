import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: "0 16px", lineHeight: 1.6 }}>
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Image
          src="/quenux-logo.png"
          alt="Logo Quenux"
          width={160}
          height={160}
          style={{ borderRadius: "50%" }}
        />
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "1rem" }}>Quenux</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Innovación en apps desde Ecuador</p>
      </div>

      {/* Tarjeta de apps */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Nuestras Apps</h2>
        <h3 style={{ marginBottom: "0.5rem" }}>AlertaEC</h3>
        <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: "1rem" }}>
          Zonas peligrosas, alertas y mapa para moverte más seguro.
        </p>

        {/* Enlaces legales */}
        <div style={{ marginBottom: "1.2rem" }}>
          <Link href="/legal/privacy/alertaec" style={{ marginRight: "1rem", fontSize: "0.9rem" }}>
            Política de Privacidad
          </Link>
          <Link href="/legal/terms/alertaec" style={{ fontSize: "0.9rem" }}>
            Términos de Uso
          </Link>
        </div>

        {/* Botón Google Play */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            backgroundColor: "#1a73e8",
            color: "#fff",
            fontSize: "0.95rem",
            fontWeight: 500,
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            margin: "0 auto",
          }}
        >
          <Image src="/play.svg" alt="Google Play" width={20} height={20} />
          Ver en Play Store (próximamente)
        </button>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.9rem", color: "#777" }}>
        © 2025 Quenux · Todos los derechos reservados <br />
        Contacto: <a href="mailto:quenux@quenux.app">quenux@quenux.app</a>
      </footer>
    </main>
  );
}


