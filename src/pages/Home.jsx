import { useMemo, useState } from "react";
import { restaurants } from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const featured = useMemo(() => restaurants.slice(0, 3), []);

  function detectLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCity(`Detected: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
      },
      () => setCity("Location permission denied")
    );
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <section className="card hero">
        <h1 style={{ margin: 0 }}>Order food from your favorite restaurants</h1>
        <p style={{ marginTop: 8 }}>
          Fast delivery, great offers, and popular dishes near you.
        </p>

        <div className="heroActions">
          <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr auto" }}>
            <input
              className="input"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn ghost" onClick={detectLocation}>
              Detect
            </button>
          </div>

          <input
            className="input"
            placeholder="Search restaurants or dishes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </section>

      <section>
        <h2 style={{ margin: "8px 0" }}>Featured restaurants</h2>
        <div className="grid">
          {featured.map((r) => (
            <RestaurantCard key={r.id} r={r} />
          ))}
        </div>
      </section>

      <section className="card" style={{ padding: 18 }}>
        <h2 style={{ marginTop: 0 }}>Offers & discounts</h2>
        <div className="grid">
          {restaurants.map((r) => (
            <div key={r.id} className="card" style={{ padding: 14, boxShadow: "none" }}>
              <div style={{ fontWeight: 800 }}>{r.name}</div>
              <div style={{ color: "var(--muted)", marginTop: 6 }}>
                {r.offers?.join(" • ")}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
