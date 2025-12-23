import { useMemo, useState } from "react";
import { restaurants } from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";
import FiltersBar from "../components/FiltersBar";

export default function Explore() {
  const [filters, setFilters] = useState({
    q: "",
    price: 0,
    minRating: 0,
    veg: "any"
  });

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();

    return restaurants.filter((r) => {
      const matchQ =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        (r.menu || []).some(
          (m) =>
            m.name.toLowerCase().includes(q) ||
            (m.description || "").toLowerCase().includes(q)
        );

      const matchPrice = !filters.price || r.priceTier === filters.price;
      const matchRating = r.rating >= (filters.minRating || 0);

      const matchVeg =
        filters.veg === "any" ||
        (filters.veg === "veg" && r.vegOnly) ||
        (filters.veg === "nonveg" && !r.vegOnly);

      return matchQ && matchPrice && matchRating && matchVeg;
    });
  }, [filters]);

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <div>
        <h1 style={{ margin: 0 }}>Explore</h1>
        <p style={{ marginTop: 6, color: "var(--muted)" }}>
          Search restaurants, filter by rating, price and food type.
        </p>
      </div>

      <FiltersBar filters={filters} setFilters={setFilters} />

      <div className="grid">
        {filtered.map((r) => (
          <RestaurantCard key={r.id} r={r} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card" style={{ padding: 16, color: "var(--muted)" }}>
          No matches found. Try resetting filters.
        </div>
      ) : null}
    </div>
  );
}
