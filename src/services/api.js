const BASE_URL = 'https://fakestoreapi.com';

export const api = {
  getAllProducts: async () => {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error('Gagal mengambil data produk');
    return res.json();
  },

  getProductById: async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error('Produk tidak ditemukan');
    return res.json();
  },

  getCategories: async () => {
    const res = await fetch(`${BASE_URL}/products/categories`);
    if (!res.ok) throw new Error('Gagal mengambil kategori');
    return res.json();
  },

  getProductsByCategory: async (category) => {
    const res = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!res.ok) throw new Error('Gagal mengambil produk kategori');
    return res.json();
  },
};