import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      // ── State ──────────────────────────────────────────────────
      items: [],
      // Struktur tiap item: { id, title, price, image, quantity }

      // ── Actions ────────────────────────────────────────────────

      addItem: (product) => {
        const existing = get().items.find((item) => item.id === product.id);

        if (existing) {
          // Produk sudah ada → tambah quantity saja
          set((state) => ({
            items: state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }));
        } else {
          // Produk baru → tambahkan ke array dengan quantity 1
          set((state) => ({
            items: [...state.items, { ...product, quantity: 1 }],
          }));
        }
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId, newQuantity) => {
        if (newQuantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      // ── Selectors (derived values) ─────────────────────────────

      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),

    {
      name: 'shopping-cart',           // key di localStorage
      partialize: (state) => ({        // hanya simpan `items`
        items: state.items,
      }),
    }
  )
);

export default useCartStore;