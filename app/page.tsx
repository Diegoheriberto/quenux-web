import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 980,
        margin: "56px auto",
        padding: "0 20px",
        lineHeight: 1.6,
        color: "#0f172a",
      }}
    >
      {/* Hero */}
      <header style={{ textAlign: "center", marginBottom: 28 }}>
        <Image
          src="/quenux-logo.png"
          alt="Quenux"
          width={140}
          height={140}
          style={{ borderRadius: "50%" }}
          priority
        />
        <h1 style={{ fontSize: 34, fontWeight: 800, marginTop: 12, letterSpacing: -0.3 }}>
          Quenux
        </h1>
        <p style={{ fontSize: 16, color: "#475569" }}>Innovación en apps desde Ecuador</p>
      </header>

      {/* Apps grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {/* Card: AlertaEC */}
        <article
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            boxShadow: "0 4px 18px rgba(15,23,42,0.06)",
            padding: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: 10,
                background: "#111827",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              AE
            </span>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>AlertaEC</h3>
              <small style={{ color: "#64748b" }}>Disponible en Google Play</small>
            </div>
          </div>

          <p style={{ marginTop: 10, color: "#334155" }}>
            Zonas peligrosas, alertas y mapa para moverte más seguro.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
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
                fontSize: 14,
                fontWeight: 600,
                padding: "10px 14px",
                borderRadius: 10,
                textDecoration: "none",
              }}
            >
              <Image src="/play.svg" alt="Google Play" width={18} height={18} />
              Ver en Play Store
            </a>

            {/* 👇 Rutas corregidas: alertec */}
            <div style={{ display: "inline-flex", gap: 12, alignItems: "center" }}>
              <Link href="/legal/privacy/alertec" style={{ fontSize: 13, color: "#0f172a" }}>
                Privacidad
              </Link>
              <span style={{ color: "#cbd5e1" }}>•</span>
              <Link href="/legal/terms/alertec" style={{ fontSize: 13, color: "#0f172a" }}>
                Términos
              </Link>
            </div>
          </div>
        </article>

        {/* Card: Finandata */}
        <article
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            boxShadow: "0 4px 18px rgba(15,23,42,0.06)",
            padding: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: 10,
                background: "#111827",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              FD
            </span>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>Finandata</h3>
              <small style={{ color: "#64748b" }}>Pruebas internas / próximamente</small>
            </div>
          </div>

          <p style={{ marginTop: 10, color: "#334155" }}>
            Información financiera de cooperativas ecuatorianas — clara, comparable y educativa.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              disabled
              title="Próximamente en Google Play"
              style={{
                opacity: 0.7,
                cursor: "not-allowed",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#e2e8f0",
                color: "#334155",
                fontSize: 14,
                fontWeight: 600,
                padding: "10px 14px",
                borderRadius: 10,
                border: "none",
              }}
            >
              <Image src="/play.svg" alt="" width={18} height={18} />
              Próximamente
            </button>

            <div style={{ display: "inline-flex", gap: 12, alignItems: "center" }}>
              <Link href="/legal/privacy/finandata" style={{ fontSize: 13, color: "#0f172a" }}>
                Privacidad
              </Link>
              <span style={{ color: "#cbd5e1" }}>•</span>
              <Link href="/legal/terms/finandata" style={{ fontSize: 13, color: "#0f172a" }}>
                Términos
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Centro legal */}
      <section style={{ textAlign: "center", marginTop: 26 }}>
        <Link
          href="/legal"
          style={{
            display: "inline-block",
            border: "1px solid #e2e8f0",
            borderRadius: 10,
            padding: "10px 14px",
            textDecoration: "none",
            color: "#0f172a",
            fontSize: 14,
          }}
        >
          Centro legal (todas las políticas)
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: 36,
          textAlign: "center",
          fontSize: 13,
          color: "#64748b",
          borderTop: "1px solid #e2e8f0",
          paddingTop: 16,
        }}
      >
        © {new Date().getFullYear()} Quenux · Todos los derechos reservados ·{" "}
        <a href="mailto:quenux@quenux.app" style={{ color: "#0f172a" }}>
          quenux@quenux.app
        </a>
      </footer>
    </main>
  );
}

