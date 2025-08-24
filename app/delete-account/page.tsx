'use client';

import { useState, type FormEvent } from 'react';

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('');
  const [appName, setAppName] = useState('AlertaEC');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Solicitud de eliminación de cuenta – ${appName}`;
    const body =
      `Hola equipo Quenux,\n\n` +
      `Quiero solicitar la eliminación de mi cuenta y de los datos asociados en ${appName}.\n\n` +
      `Correo de la cuenta: ${email}\n` +
      (comment ? `Comentario adicional: ${comment}\n` : '') +
      `\nGracias.`;

    // abre cliente de correo del usuario
    window.location.href = `mailto:quenux@quenux.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main style={{ maxWidth: 680, margin: '40px auto', padding: '0 16px', lineHeight: 1.6 }}>
      <h1>Eliminar cuenta</h1>
      <p>
        Completa este formulario para solicitar la eliminación de tu cuenta y de los datos asociados a <strong>{appName}</strong>.
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
        <label style={{ display: 'block', marginBottom: 12 }}>
          Correo de la cuenta
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tucorreo@ejemplo.com"
            style={{ display: 'block', width: '100%', marginTop: 6, padding: 10, borderRadius: 8, border: '1px solid #ddd' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: 12 }}>
          App (opcional)
          <input
            type="text"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            style={{ display: 'block', width: '100%', marginTop: 6, padding: 10, borderRadius: 8, border: '1px solid #ddd' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: 16 }}>
          Comentario adicional (opcional)
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            style={{ display: 'block', width: '100%', marginTop: 6, padding: 10, borderRadius: 8, border: '1px solid #ddd' }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: '12px 16px',
            borderRadius: 10,
            border: 0,
            cursor: 'pointer',
            background: '#0ea5e9',
            color: 'white',
            fontWeight: 600
          }}
        >
          Enviar solicitud por email
        </button>

        <p style={{ fontSize: 13, color: '#666', marginTop: 12 }}>
          Se abrirá tu cliente de correo con el mensaje prellenado dirigido a <b>quenux@quenux.app</b>.
        </p>
      </form>
    </main>
  );
}
