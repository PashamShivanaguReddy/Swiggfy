export default function RestaurantCard({ r }) {
  return (
    <article className="rCard card">
      <div className="rImgWrap">
        <img className="rImg" src={r.image} alt={r.name} loading="lazy" />
      </div>

      <div className="rBody">
        <div className="rTop">
          <h3 className="rTitle">{r.name}</h3>
          <span className="rRating">{r.rating.toFixed(1)}★</span>
        </div>

        <div className="rMeta">{r.cuisine}</div>
        <div className="rMetaRow">
          <span>{r.deliveryTime}</span>
          <span>•</span>
          <span>{r.vegOnly ? "Veg" : "Veg/Non-veg"}</span>
          <span>•</span>
          <span>{"₹".repeat(r.priceTier)}</span>
        </div>

        {r.offers?.length ? <div className="rOffer">{r.offers[0]}</div> : null}
      </div>
    </article>
  );
}
