import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import ProductGrid from '@/components/product/ProductGrid';
import Spinner from '@/components/ui/Spinner';

const CatalogPage = () => {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Ambil daftar kategori unik dari produk
  const categories = useMemo(() => {
    const cats = [...new Set(products.map((p) => p.category))];
    return ['all', ...cats];
  }, [products]);

  // Filter berdasarkan search dan kategori
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [products, search, selectedCategory]);

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        <p className="text-lg font-semibold">Gagal memuat produk</p>
        <p className="text-sm mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Temukan Produk <span className="text-indigo-600">Terbaik</span>
        </h1>
        <p className="text-gray-500 mt-2 text-base">
          Belanja ribuan produk pilihan dengan harga terbaik
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-lg mx-auto mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
      </div>

      {/* Filter Kategori */}
      <div className="flex gap-2 flex-wrap justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-colors ${
              selectedCategory === cat
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat === 'all' ? 'Semua' : cat}
          </button>
        ))}
      </div>

      {/* Produk */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <p className="text-sm text-gray-400 mb-4">{filtered.length} produk ditemukan</p>
          <ProductGrid products={filtered} />
        </>
      )}
    </div>
  );
};

export default CatalogPage;