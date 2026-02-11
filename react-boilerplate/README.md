## React Router Demo

This project showcases how client-side routing works in React using `react-router-dom` with a Vite-based React app.

### Install dependencies

- **Install packages**:

```bash
npm install
```

### Run the app

- **Start dev server** (React app with routing):

```bash
npm run dev
```

Open the printed URL (typically `http://localhost:5173/`) in your browser.

### Available routes

- **`/`**: Home page with links to other pages
- **`/about`**: Dummy About page
- **`/contact`**: Dummy Contact page
- **`/products`**: Dummy Products listing page
- **`/products/:productId`**: Product details page (e.g. `/products/1`)
- **Any other path**: 404 page

Use the navigation links in the header to move between routes without a full page reload and observe how React Router swaps components based on the URL.
