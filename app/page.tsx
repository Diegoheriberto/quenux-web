import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 text-center">
      {/* LOGO + TITLE */}
      <div className="mx-auto mb-6 flex w-full flex-col items-center">
        <div className="rounded-full bg-white/80 p-4 shadow-md ring-1 ring-black/5">
        <Image
  src="/quenux-logo.png"
  alt="Logo Quenux"
  width={160}
  height={160}
  priority
  className="rounded-full transition-transform duration-300 hover:scale-105"
/>
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">Quenux</h1>
        <p className="mt-2 text-lg text-slate-600">Innovación en apps desde Ecuador</p>
      </div>

      {/* CTA / APP CARD */}
      <section className="mx-auto mt-10 grid gap-6">
        <div className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
          <h2 className="text-xl font-medium text-slate-800">Nuestras Apps</h2>
          <div className="mt-4 rounded-xl bg-slate-50 p-5 text-left ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold">AlertaEC</h3>
            <p className="mt-1 text-sm text-slate-600">
              Zonas peligrosas, alertas y mapa para moverte más seguro.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/legal/privacy/alertaec"
                className="text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
              >
                Política de Privacidad
              </Link>
              <span className="text-slate-300">·</span>
              <Link
                href="/legal/terms/alertaec"
                className="text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
              >
                Términos de Uso
              </Link>
           <Link
  href="#"
  className="ml-auto inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-inset transition
             bg-[#0ea5e9] text-white hover:bg-[#0284c7] ring-[#0ea5e9]/30"
  aria-disabled
>
  <Image src="/play.svg" alt="" width={16} height={16} />
  Ver en Play Store (próximamente)
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-slate-200/70 pt-6 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Quenux · Todos los derechos reservados</p>
        <p className="mt-1">
          Contacto:{" "}
          <a className="font-medium text-slate-700 underline underline-offset-4" href="mailto:quenux@quenux.app">
            quenux@quenux.app
          </a>
        </p>
      </footer>
    </main>
  );
}

