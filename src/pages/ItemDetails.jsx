import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Status from "../components/Status.jsx";

export default function ItemDetails({ menu, loading, error, favourites, toggleFavourite }) {
  const { id } = useParams();
  const { addToCart } = useCart();
  const item = menu.find((m) => m.id === Number(id));
  const isFavourite = item ? favourites.includes(item.id) : false;

  return (
    <section>
      <p>
        <Link to="/">← Back to menu</Link>
      </p>
      <Status loading={loading} error={error} />

      {!loading && !error && !item && (
        <p className="status">We couldn't find that item.</p>
      )}

      {item && (
        <article className="details">
          <span className="sticker big" aria-hidden="true">
            {item.emoji}
          </span>
          <div>
            <h1>{item.name}</h1>
            <p className="muted">{item.category}</p>
            <p>{item.description}</p>
            <p className="price-tag big-price">Rs {item.price}</p>
            <div className="actions">
              <button type="button" className="btn" onClick={() => addToCart(item)}>
                Add to cart
              </button>
              <button
                type="button"
                className="btn ghost"
                aria-pressed={isFavourite}
                onClick={() => toggleFavourite(item.id)}
              >
                {isFavourite ? "♥ Favourite" : "♡ Add to favourites"}
              </button>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
