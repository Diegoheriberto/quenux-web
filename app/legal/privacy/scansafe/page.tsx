export default function PrivacyPage() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px 20px",
        maxWidth: 800,
        margin: "0 auto",
        lineHeight: 1.6,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 20 }}>Privacy Policy – ScanSafe</h1>

      <p>
        ScanSafe, developed by Quenux, is committed to protecting your privacy.
        This application is designed to analyze text messages and detect potential risks such as scams or fraudulent content.
      </p>

      <h3>1. Information We Collect</h3>
      <p>
        ScanSafe allows users to input or paste text messages for analysis.
        This content is processed solely for the purpose of detecting potential risks and is not stored permanently.
      </p>

      <h3>2. Use of Information</h3>
      <p>
        The information provided by the user is used exclusively to:
      </p>
      <ul>
        <li>Analyze messages for potential risks</li>
        <li>Provide a risk evaluation within the app</li>
      </ul>

      <h3>3. Data Storage</h3>
      <p>
        ScanSafe does not store user messages or sensitive data on external servers.
        Any processing is done locally or temporarily within the application.
      </p>

      <h3>4. Data Sharing</h3>
      <p>
        We do not share, sell, or distribute user data or analyzed content to third parties.
      </p>

      <h3>5. Third-Party Services</h3>
      <p>
        The app may use third-party services such as Firebase or Google services
        for functionality and analytics. These services may collect limited technical data
        according to their own privacy policies.
      </p>

      <h3>6. Security</h3>
      <p>
        We take reasonable measures to protect user information and ensure a safe experience within the app.
      </p>

      <h3>7. Changes to This Policy</h3>
      <p>
        This privacy policy may be updated in the future. Users are encouraged to review it periodically.
      </p>

      <h3>8. Contact</h3>
      <p>
        If you have any questions about this Privacy Policy, you can contact us at:
        <br />
        <strong>contacto@quenux.com</strong>
      </p>

      <br />

      <p style={{ opacity: 0.5 }}>
        © Quenux – ScanSafe
      </p>
    </div>
  );
}
