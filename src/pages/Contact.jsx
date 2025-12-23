import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (patch) => setForm((f) => ({ ...f, ...patch }));

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <div>
        <h1 style={{ margin: 0 }}>Contact</h1>
        <p style={{ marginTop: 6 }}>
          Reach out for support or feedback.
        </p>
      </div>

      <div className="contactGrid">
        <form className="card" style={{ padding: 16, display: "grid", gap: 10 }} onSubmit={onSubmit}>
          <input
            className="input"
            placeholder="Name"
            value={form.name}
            onChange={(e) => update({ name: e.target.value })}
            required
          />
          <input
            className="input"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => update({ email: e.target.value })}
            required
          />
          <textarea
            className="input"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={(e) => update({ message: e.target.value })}
            required
          />
          <button className="btn" type="submit">Send message</button>
          {sent ? <div style={{ color: "var(--muted)" }}>Message sent (mock).</div> : null}
        </form>

        <aside className="card" style={{ padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Customer Support</h3>
          <div style={{ color: "var(--muted)", display: "grid", gap: 8 }}>
            <div>Email: support@swiggylite.dev</div>
            <div>Phone: +91 99999 99999</div>
            <div>Hours: 9 AM – 9 PM</div>
          </div>

          <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="pill" href="#" aria-label="Instagram">Instagram</a>
            <a className="pill" href="#" aria-label="Twitter">X</a>
            <a className="pill" href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
