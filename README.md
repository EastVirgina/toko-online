# 🛍️ TokoOnline — E-Commerce App

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-State_Management-FF6B35?style=for-the-badge)

A modern, responsive e-commerce web application built as a portfolio project. Features product browsing, search & filtering, a fully functional shopping cart with persistent storage, and a clean UI/UX design.

🔗 **Live Demo:** [TokoOnline App](https://toko-online-b8w2tz3fw-eastvirginas-projects.vercel.app)

---

    Features

-     Product Search — Real-time search by product name
-     Category Filter — Filter products by category
-     Shopping Cart — Add, remove, and update item quantities
-     Persistent Cart — Cart data saved to localStorage (survives page refresh)
-     Product Detail Page — Full product info with rating display
-     Order Summary — Automatic subtotal, shipping, and total calculation
-     Fully Responsive — Works on mobile, tablet, and desktop
-     Fast Loading — Skeleton-free UX with spinner feedback

---

    Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI Library |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [React Router DOM](https://reactrouter.com/) | Client-side Routing |
| [Zustand](https://zustand-demo.pmnd.rs/) | Global State Management |
| [Lucide React](https://lucide.dev/) | Icon Library |
| [FakeStore API](https://fakestoreapi.com/) | Product Data Source |

---

    Project Structure

```
src/
├── components/
│   ├── cart/
│   │   ├── CartItem.jsx
│   │   └── CartSummary.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── product/
│   │   ├── ProductCard.jsx
│   │   └── ProductGrid.jsx
│   └── ui/
│       ├── Badge.jsx
│       ├── Button.jsx
│       └── Spinner.jsx
├── hooks/
│   └── useProducts.js
├── pages/
│   ├── CatalogPage.jsx
│   ├── ProductDetailPage.jsx
│   └── CartPage.jsx
├── router/
│   └── index.jsx
├── services/
│   └── api.js
├── stores/
│   └── useCartStore.js
└── utils/
    └── formatCurrency.js
```

---

- Getting Started

    Prerequisites

Make sure you have **Node.js v18+** installed.

    Installation

```bash
# 1. Clone the repository
git clone https://github.com/eastvirginas/toko-online.git

# 2. Navigate to project folder
cd toko-online

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

    Build for Production

```bash
npm run build
```

---

    Key Implementation Details

    State Management with Zustand

Cart state is managed globally using Zustand with the `persist` middleware, which automatically syncs to `localStorage`.

```js
const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => { ... },
      removeItem: (id) => { ... },
      updateQuantity: (id, qty) => { ... },
      getTotalPrice: () => { ... },
    }),
    { name: 'shopping-cart' }
  )
);
```

    Custom Hook for Data Fetching

```js
const { products, loading, error } = useProducts();
```

    Path Alias `@`

```js
import Button from '@/components/ui/Button';
```

---

    License

This project is open source and available under the [MIT License](LICENSE).

---

    Author

**Asamp**

- GitHub: [@eastvirginas](https://github.com/eastvirginas)

---

> ⭐ If you find this project useful, please give it a star on GitHub!
