import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import useCartStore from '@/stores/useCartStore';
import Badge from '@/components/ui/Badge';

const Navbar = () => {
  const location = useLocation();
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
            <Store size={24} />
            <span>TokoOnline</span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Katalog
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link to="/cart" className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors">
            <ShoppingCart size={24} />
            <Badge count={getTotalItems()} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;