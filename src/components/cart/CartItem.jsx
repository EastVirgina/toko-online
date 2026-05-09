import { Trash2, Plus, Minus } from 'lucide-react';
import useCartStore from '@/stores/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';

const CartItem = ({ item }) => {
  const { removeItem, updateQuantity } = useCartStore();

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Gambar */}
      <div className="bg-gray-50 rounded-xl p-2 w-20 h-20 flex items-center justify-center shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Detail */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 line-clamp-2">
          {item.title}
        </p>
        <p className="text-sm text-indigo-600 font-bold mt-1">
          {formatCurrency(item.price)}
        </p>
      </div>

      {/* Kontrol Quantity */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <Minus size={14} />
        </button>
        <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-right shrink-0 w-20">
        <p className="text-sm font-bold text-gray-900">
          {formatCurrency(item.price * item.quantity)}
        </p>
      </div>

      {/* Hapus */}
      <button
        onClick={() => removeItem(item.id)}
        className="p-2 text-gray-400 hover:text-red-500 transition-colors shrink-0"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default CartItem;