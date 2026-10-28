import ItemCard from "./ItemCard.jsx";

export default function MenuList({ items, favourites, onToggleFavourite }) {
  if (items.length === 0) {
    return (
      <p className="status">No items match. Clear the search or pick another category.</p>
    );
  }

  return (
    <ul className="grid">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          isFavourite={favourites.includes(item.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </ul>
  );
}
