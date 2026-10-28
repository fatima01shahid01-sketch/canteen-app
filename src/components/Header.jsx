import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Header() {
  const { count } = useCart();

  return (
    <header className="header">
      <div className="header-bar">
        <NavLink to="/" className="brand">
          <span aria-hidden="true">☕</span> Campus Canteen
        </NavLink>
        <nav className="nav" aria-label="Main">
          <NavLink to="/" end>
            Menu
          </NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart
            <span className="badge" aria-label={`${count} items in cart`}>
              {count}
            </span>
          </NavLink>
        </nav>
      </div>
      <div className="awning" aria-hidden="true"></div>
    </header>
  );
}
