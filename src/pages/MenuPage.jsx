import { useState } from "react";
import MenuList from "../components/MenuList.jsx";
import Status from "../components/Status.jsx";

export default function MenuPage({ menu, loading, error, favourites, toggleFavourite }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [onlyFavs, setOnlyFavs] = useState(false);

  const categories = ["All", ...new Set(menu.map((m) => m.category))];

  const visible = menu.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    const matchesFav = !onlyFavs || favourites.includes(item.id);
    return matchesSearch && matchesCategory && matchesFav;
  });

  return (
    <section>
      <div className="hero">
        <h1>Today's menu</h1>
        <p className="muted">The kettle's on. Pick a seat and order something warm.</p>
      </div>

      <Status loading={loading} error={error} />

      {!loading && !error && (
        <>
          <div className="controls">
            <label className="field">
              <span>Search the menu</span>
              <input
                type="search"
                placeholder="Try chai"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>

            <div className="chips" role="group" aria-label="Filter by category">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`chip ${category === c ? "on" : ""}`}
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
              <button
                type="button"
                className={`chip fav-chip ${onlyFavs ? "on" : ""}`}
                aria-pressed={onlyFavs}
                onClick={() => setOnlyFavs(!onlyFavs)}
              >
                {onlyFavs ? "♥" : "♡"} Favourites
              </button>
            </div>
          </div>

          <MenuList items={visible} favourites={favourites} onToggleFavourite={toggleFavourite} />
        </>
      )}
    </section>
  );
}
