export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "18px 0" }}>
      <div
        style={{
          width: "min(1100px, 92vw)",
          margin: "0 auto",
          display: "flex",
          gap: 10,
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <div style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} SwiggyLite UI</div>
        <div style={{ display: "flex", gap: 12 }}>
          <a className="pill" href="#" aria-label="Instagram">
            Instagram
          </a>
          <a className="pill" href="#" aria-label="Twitter">
            X
          </a>
          <a className="pill" href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
