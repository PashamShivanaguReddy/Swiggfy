export default function FiltersBar({ filters, setFilters }) {
  const update = (patch) => setFilters((f) => ({ ...f, ...patch }));

  return (
    <section className="card" style={{ padding: 14, display: "grid", gap: 10 }}>
      <input
        className="input"
        placeholder="Search restaurants or cuisines..."
        value={filters.q}
        onChange={(e) => update({ q: e.target.value })}
      />

      <div className="filtersRow">
        <select
          className="input"
          value={filters.price}
          onChange={(e) => update({ price: Number(e.target.value) })}
        >
          <option value={0}>Any price</option>
          <option value={1}>Budget (₹)</option>
          <option value={2}>Mid (₹₹)</option>
          <option value={3}>Premium (₹₹₹)</option>
        </select>

        <select
          className="input"
          value={filters.minRating}
          onChange={(e) => update({ minRating: Number(e.target.value) })}
        >
          <option value={0}>Any rating</option>
          <option value={4}>4.0+</option>
          <option value={4.3}>4.3+</option>
          <option value={4.5}>4.5+</option>
        </select>

        <select
          className="input"
          value={filters.veg}
          onChange={(e) => update({ veg: e.target.value })}
        >
          <option value="any">Veg/Non-veg</option>
          <option value="veg">Veg only</option>
          <option value="nonveg">Non-veg allowed</option>
        </select>

        <button className="btn ghost" onClick={() => setFilters({ q: "", price: 0, minRating: 0, veg: "any" })}>
          Reset
        </button>
      </div>
    </section>
  );
}
