'use client';

import { useState } from 'react';

export const metadata = {
  title: 'Eliminar cuenta | AlertaEC – Quenux',
  description: 'Solicita la eliminación de tu cuenta y datos asociados de AlertaEC.',
};

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('');
  const [appName, setAppName] = useState('AlertaEC');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = 'quenux@quenux.app';
    const subject = `Solicitud de eliminación de cuenta – ${appName}`;
    const body = `Hola equipo Quenux,

Quiero solicitar la eliminación de mi cuenta y de los datos asociados en ${appName}.

Correo de la cuenta: ${email}

Comentario adicional (opcional):
${comment}

Confirmo que soy el titular de esta cuenta y entiendo que la eliminación es permanente.
Gracias.`;

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">Eliminar mi cuenta</h1>
          <p className="text-gray-600 mt-2">
            Completa el formulario para solicitar la eliminación de tu cuenta y
            datos asociados de <strong>AlertaEC</strong>. Te confirmaremos por
            correo cuando el proceso se complete.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Aplicación</label>
            <select
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
            >
              <option>AlertaEC</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Correo de la cuenta <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="tu-correo@ejemplo.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Comentario (opcional)</label>
            <textarea
              rows={4}
              placeholder="Información adicional para identificar la cuenta…"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700 active:bg-blue-800"
          >
            Enviar solicitud por correo
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600 space-y-2">
          <p>
            Si prefieres, también puedes escribirnos directamente a{' '}
            <a
              href="mailto:quenux@quenux.app?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20cuenta"
              className="text-blue-600 underline"
            >
              quenux@quenux.app
            </a>
            .
          </p>
          <ul className="list-disc pl-5">
            <li>Eliminamos la cuenta y datos personales; podemos conservar registros técnicos mínimos por motivos legales/seguridad.</li>
            <li>La eliminación se procesa tras verificar la titularidad del correo (máx. 30 días).</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
