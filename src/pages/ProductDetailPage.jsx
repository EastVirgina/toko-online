import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { useProductById } from '@/hooks/useProducts';
import useCartStore from '@/stores/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';
import Button from '@/components/ui/Button';
import Spinner from '@/components/ui/Spinner';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProductById(id);
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return <Spinner />;

  if (error || !product) {
    return (
      <div className="text-center py-20 text-red-500">
        <p className="font-semibold">Produk tidak ditemukan</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate('/')}>
          Kembali ke Katalog
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Tombol Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Kembali
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {/* Gambar */}
        <div className="bg-gray-50 rounded-xl flex items-center justify-center p-10 min-h-72">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-64 object-contain"
          />
        </div>

        {/* Detail */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 bg-indigo-50 w-fit px-3 py-1 rounded-full capitalize">
            {product.category}
          </span>

          <h1 className="text-2xl font-bold text-gray-900 leading-snug">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.round(product.rating?.rate) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating?.rate} dari {product.rating?.count} ulasan
            </span>
          </div>

          {/* Harga */}
          <p className="text-3xl font-extrabold text-indigo-600">
            {formatCurrency(product.price)}
          </p>

          {/* Deskripsi */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Tombol */}
          <Button
            size="lg"
            className="mt-auto"
            onClick={handleAddToCart}
            variant={added ? 'secondary' : 'primary'}
          >
            {added ? (
              <>
                <Check size={18} />
                Ditambahkan!
              </>
            ) : (
              <>
                <ShoppingCart size={18} />
                Tambah ke Keranjang
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;