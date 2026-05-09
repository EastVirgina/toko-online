import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import useCartStore from '@/stores/useCartStore';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import Button from '@/components/ui/Button';

const CartPage = () => {
  const items = useCartStore((state) => state.items);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <ShoppingBag size={64} className="mx-auto text-gray-200 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700">Keranjang kamu kosong</h2>
        <p className="text-gray-400 mt-2 mb-6">
          Yuk mulai belanja dan temukan produk favoritmu!
        </p>
        <Link to="/">
          <Button size="lg">Mulai Belanja</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Keranjang Belanja
        <span className="text-base font-normal text-gray-400 ml-2">
          ({items.length} produk)
        </span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Daftar Item */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Ringkasan */}
        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;