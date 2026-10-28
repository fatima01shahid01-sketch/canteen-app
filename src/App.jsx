import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";
import CartPage from "./pages/CartPage.jsx";

export default function App() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [favourites, setFavourites] = useState([]);

  // Load menu.json once, when the app first appears.
  useEffect(() => {
    async function loadMenu() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}menu.json`);
        if (!res.ok) {
          throw new Error(`Server replied with status ${res.status}.`);
        }
        const data = await res.json();
        setMenu(data);
      } catch (err) {
        setError(`Could not load today's menu. ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const shared = { menu, loading, error, favourites, toggleFavourite };

  return (
    <>
      <Header />
      <main className="page">
        <Routes>
          <Route path="/" element={<MenuPage {...shared} />} />
          <Route path="/item/:id" element={<ItemDetails {...shared} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="*"
            element={
              <section className="notice">
                <h1>Page not found</h1>
                <p>
                  <Link to="/">Back to the menu</Link>
                </p>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <p>Campus Canteen. Prices in Rs.</p>
      </footer>
    </>
  );
}
