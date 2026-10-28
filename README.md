# Campus Canteen Menu (React frontend)

## Run it

```
npm install
npm run dev
```

Open the `http://localhost:5173` link it prints.

## What is inside

| Requirement | Where |
| --- | --- |
| Menu from a local JSON file | `public/menu.json` |
| useEffect + fetch + async/await, loading and error messages | `src/App.jsx`, `src/components/Status.jsx` |
| Reusable components with props and useState | `src/components/MenuList.jsx`, `ItemCard.jsx`, `Cart.jsx` |
| Search, category filter, favourites toggle | `src/pages/MenuPage.jsx`, `ItemCard.jsx` |
| React Router: Menu, Item details, Cart | `src/App.jsx`, `src/pages/` |
| Cart shared with Context (header count and total) | `src/context/CartContext.jsx`, `src/components/Header.jsx` |
| Responsive layout (phone, tablet, desktop) | `src/index.css` (Grid, Flexbox, media queries) |
