import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart, count, total } = useCart();

  if (cart.length === 0) {
    return (
      <section className="notice">
        <h1>Your cart is empty</h1>
        <p>
          <Link to="/">Pick something from the menu</Link>
        </p>
      </section>
    );
  }

  return (
    <section>
      <h1>Your cart</h1>
      <ul className="cart-list">
        {cart.map((c) => (
          <li key={c.id} className="cart-row">
            <span className="sticker small" aria-hidden="true">
              {c.emoji}
            </span>
            <div className="cart-info">
              <strong>{c.name}</strong>
              <span className="muted">Rs {c.price} each</span>
            </div>
            <div className="qty">
              <button type="button" aria-label={`Remove one ${c.name}`} onClick={() => decreaseQty(c.id)}>
                −
              </button>
              <span>{c.qty}</span>
              <button type="button" aria-label={`Add one ${c.name}`} onClick={() => addToCart(c)}>
                +
              </button>
            </div>
            <span className="line-total">Rs {c.price * c.qty}</span>
            <button type="button" className="link-btn" onClick={() => removeFromCart(c.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="summary">
        <p>
          {count} {count === 1 ? "item" : "items"}
        </p>
        <p className="total">Total: Rs {total}</p>
        <button type="button" className="btn ghost" onClick={clearCart}>
          Clear cart
        </button>
      </div>
    </section>
  );
}
