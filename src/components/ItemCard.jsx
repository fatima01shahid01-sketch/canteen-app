import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function ItemCard({ item, isFavourite, onToggleFavourite }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  // Show "Added" for a moment after the button is pressed.
  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 1200);
    return () => clearTimeout(timer);
  }, [added]);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
  };

  return (
    <li className="card">
      <button
        type="button"
        className={`fav ${isFavourite ? "on" : ""}`}
        aria-pressed={isFavourite}
        aria-label={isFavourite ? `Remove ${item.name} from favourites` : `Add ${item.name} to favourites`}
        onClick={() => onToggleFavourite(item.id)}
      >
        {isFavourite ? "♥" : "♡"}
      </button>

      <Link to={`/item/${item.id}`} className="card-link">
        <span className="sticker" aria-hidden="true">
          {item.emoji}
        </span>
        <h3>{item.name}</h3>
        <p className="muted">{item.category}</p>
      </Link>

      <div className="card-foot">
        <span className="price-tag">Rs {item.price}</span>
        <button type="button" className={`btn ${added ? "done" : ""}`} onClick={handleAdd}>
          {added ? "Added" : "Add to cart"}
        </button>
      </div>
    </li>
  );
}
