import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import useCartStore from '@/stores/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';
import Button from '@/components/ui/Button';

const ProductCard = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Supaya tidak navigate ke detail saat klik tombol
    addItem(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full overflow-hidden">
        {/* Gambar Produk */}
        <div className="relative bg-gray-50 p-6 flex items-center justify-center h-52">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-40 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {/* Badge Kategori */}
          <span className="absolute top-3 left-3 bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>

        {/* Info Produk */}
        <div className="p-4 flex flex-col flex-1 gap-2">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-amber-400">
            <Star size={14} fill="currentColor" />
            <span className="text-xs text-gray-500">
              {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>

          {/* Harga + Tombol */}
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-lg font-bold text-indigo-600">
              {formatCurrency(product.price)}
            </span>
            <Button size="sm" onClick={handleAddToCart}>
              <ShoppingCart size={14} />
              Tambah
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;