import { useNavigate } from 'react-router-dom';
import useCartStore from '@/stores/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';
import Button from '@/components/ui/Button';

const CartSummary = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert('Pesanan berhasil! Terima kasih telah berbelanja. 🎉');
    clearCart();
    navigate('/');
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Ringkasan Pesanan</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({items.length} produk)</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Ongkos Kirim</span>
          <span>{shipping > 0 ? formatCurrency(shipping) : '-'}</span>
        </div>
        <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-base">
          <span>Total</span>
          <span className="text-indigo-600">{formatCurrency(total)}</span>
        </div>
      </div>

      <Button
        className="w-full mt-6"
        size="lg"
        onClick={handleCheckout}
        disabled={items.length === 0}
      >
        Bayar Sekarang
      </Button>

      <Button
        variant="outline"
        className="w-full mt-3"
        size="lg"
        onClick={() => navigate('/')}
      >
        Lanjut Belanja
      </Button>
    </div>
  );
};

export default CartSummary;