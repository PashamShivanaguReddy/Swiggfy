import { useMemo, useState } from "react";

function readUser() {
  const raw = localStorage.getItem("fd_user");
  return raw ? JSON.parse(raw) : null;
}

function writeUser(user) {
  localStorage.setItem("fd_user", JSON.stringify(user));
}

export default function AuthProfile() {
  const [mode, setMode] = useState("login"); // login | signup
  const [user, setUser] = useState(() => readUser());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const orders = useMemo(
    () => user?.orders || [{ id: "o101", items: 3, total: 399, status: "Delivered" }],
    [user]
  );

  function onSubmit(e) {
    e.preventDefault();

    const nameFromEmail = email.split("@")[0] || "User";
    const next = {
      name: mode === "signup" ? nameFromEmail : (user?.name || nameFromEmail),
      email,
      orders: user?.orders || [
        { id: "o101", items: 3, total: 399, status: "Delivered" },
        { id: "o102", items: 1, total: 179, status: "On the way" }
      ]
    };

    writeUser(next);
    setUser(next);
    setEmail("");
    setPassword("");
  }

  function logout() {
    localStorage.removeItem("fd_user");
    setUser(null);
  }

  if (user) {
    return (
      <div style={{ display: "grid", gap: 14 }}>
        <div>
          <h1 style={{ margin: 0 }}>Profile</h1>
          <p style={{ marginTop: 6, color: "var(--muted)" }}>Logged in as {user.email}</p>
        </div>

        <section className="card" style={{ padding: 16, display: "grid", gap: 10 }}>
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <button className="btn ghost" onClick={logout}>Logout</button>
        </section>

        <section className="card" style={{ padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Your orders</h3>
          <div style={{ display: "grid", gap: 10 }}>
            {orders.map((o) => (
              <div key={o.id} className="card" style={{ padding: 12, boxShadow: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontWeight: 700 }}>Order {o.id}</div>
                  <div style={{ color: "var(--muted)" }}>{o.status}</div>
                </div>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                  Items: {o.items} • Total: ₹{o.total}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 14, maxWidth: 520 }}>
      <div>
        <h1 style={{ margin: 0 }}>{mode === "login" ? "Login" : "Create account"}</h1>
        <p style={{ marginTop: 6, color: "var(--muted)" }}>
          Demo auth using localStorage (no backend).
        </p>
      </div>

      <form className="card" style={{ padding: 16, display: "grid", gap: 10 }} onSubmit={onSubmit}>
        <input
          className="input"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn" type="submit">{mode === "login" ? "Login" : "Sign up"}</button>

        <button
          className="btn ghost"
          type="button"
          onClick={() => setMode((m) => (m === "login" ? "signup" : "login"))}
        >
          Switch to {mode === "login" ? "Signup" : "Login"}
        </button>
      </form>
    </div>
  );
}
