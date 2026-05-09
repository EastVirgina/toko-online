# 🛍️ TokoOnline — E-Commerce App

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-State_Management-FF6B35?style=for-the-badge)

A modern, responsive e-commerce web application built as a portfolio project. Features product browsing, search & filtering, a fully functional shopping cart with persistent storage, and a clean UI/UX design.

    Live Demo: [https://toko-online-b8w2tz3fw-eastvirginas-projects.vercel.app](https://toko-online-username.vercel.app)

---

    Features

- Product Search — Real-time search by product name
- Category Filter — Filter products by category
- Shopping Cart — Add, remove, and update item quantities
- Persistent Cart — Cart data saved to localStorage (survives page refresh)
- Product Detail Page — Full product info with rating display
- Order Summary — Automatic subtotal, shipping, and total calculation
- Fully Responsive — Works on mobile, tablet, and desktop
- Fast Loading — Skeleton-free UX with spinner feedback

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
│   │   ├── CartItem.jsx        # Single cart row (qty control + delete)
│   │   └── CartSummary.jsx     # Order summary + checkout button
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky navbar with cart badge
│   │   └── Footer.jsx          # Site footer
│   ├── product/
│   │   ├── ProductCard.jsx     # Product card with add-to-cart
│   │   └── ProductGrid.jsx     # Responsive product grid
│   └── ui/
│       ├── Badge.jsx           # Cart count badge
│       ├── Button.jsx          # Reusable button (variants + sizes)
│       └── Spinner.jsx         # Loading indicator
├── hooks/
│   └── useProducts.js          # Custom hooks for API fetching
├── pages/
│   ├── CatalogPage.jsx         # Home / product listing page
│   ├── ProductDetailPage.jsx   # Single product detail page
│   └── CartPage.jsx            # Shopping cart & checkout page
├── router/
│   └── index.jsx               # React Router configuration
├── services/
│   └── api.js                  # FakeStore API fetch wrapper
├── stores/
│   └── useCartStore.js         # Zustand cart store + localStorage persist
└── utils/
    └── formatCurrency.js       # Currency formatter (USD)
```

---

    Getting Started

    Prerequisites

Make sure you have **Node.js v18+** installed.

```bash
node -v   # should show v18.x.x or higher
npm -v
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/username-kamu/toko-online.git

# 2. Navigate to project folder
cd toko-online

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

    Screenshots

    Catalog Page
> Product grid with search and category filter

    Product Detail Page
> Full product info, star rating, and add-to-cart

    Cart Page
> Item list with quantity controls and order summary

---

    Key Implementation Details

### State Management with Zustand
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

### Custom Hook for Data Fetching
```js
const { products, loading, error } = useProducts();
```

### Path Alias `@`
Imports use the `@` alias instead of relative paths for cleaner code:
```js
import Button from '@/components/ui/Button';
```

---

    License

This project is open source and available under the [MIT License](LICENSE).

---

    Author

**Asamp**
- GitHub: [@username-kamu](https://github.com/username-kamu)
- LinkedIn: [linkedin.com/in/username-kamu](https://linkedin.com/in/username-kamu)

---

> If you find this project useful, please give it a star on GitHub!