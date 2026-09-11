import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import FoodCard from './components/FoodCard.jsx';
import FoodDetails from './components/FoodDetails.jsx';
import Cart from './components/Cart.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
import EmptyState from './components/EmptyState.jsx';
import LoadingState from './components/LoadingState.jsx';
import ErrorState from './components/ErrorState.jsx';
import Toast from './components/Toast.jsx';
import TableSelector, { isValidTable } from './components/TableSelector.jsx';
import { CATEGORIES, fetchMenuData } from './data/menuData.js';
import { useCart } from './hooks/useCart.js';
import { ShoppingBag, Sparkles, Utensils } from 'lucide-react';

const TABLE_STORAGE_KEY = 'zestia-table-number';

export default function App() {
  // Table state initialized with localStorage persistence (no auto-selection on first visit)
  const [tableNumber, setTableNumber] = useState(() => {
    try {
      const stored = localStorage.getItem(TABLE_STORAGE_KEY);
      if (isValidTable(stored)) {
        return stored;
      }
    } catch (e) {
      console.warn('Failed to parse table number from localStorage:', e);
    }
    return null;
  });

  const [isTableSelectorOpen, setIsTableSelectorOpen] = useState(false);

  // Data loading state
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  // Modals & Drawer states
  const [selectedFood, setSelectedFood] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Toast feedback state
  const [toast, setToast] = useState({ visible: false, message: '' });

  // Encapsulated cart hook with localStorage sync
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getItemQuantity,
    totalItemsCount,
    subtotal,
    tax,
    grandTotal
  } = useCart();

  const showToast = useCallback((message) => {
    setToast({ visible: true, message });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, visible: false }));
  }, []);

  // Fetch menu on initial mount
  const loadMenu = useCallback(async (simulateFailure = false) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMenuData({ simulateError: simulateFailure });
      setMenu(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch restaurant menu');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMenu();
  }, [loadMenu]);

  // Handle adding items to cart with toast notification
  const handleAddToCart = (item, quantity = 1) => {
    addToCart(item, quantity);
    showToast(`Added ${quantity > 1 ? `${quantity}x ` : ''}${item.name} to cart`);
  };

  // Handle Table Selection
  const handleSelectTable = (selectedTable) => {
    if (isValidTable(selectedTable)) {
      setTableNumber(selectedTable);
      try {
        localStorage.setItem(TABLE_STORAGE_KEY, selectedTable);
      } catch (e) {
        console.warn('Failed to persist table number:', e);
      }
      setIsTableSelectorOpen(false);
      showToast(`Dining at ${selectedTable}`);
    }
  };

  // Order Placement flow
  const handlePlaceOrder = () => {
    if (!isValidTable(tableNumber)) {
      showToast('Please select your table before placing the order.');
      setIsTableSelectorOpen(true);
      return;
    }

    const generatedId = `#ZST-${Math.floor(1000 + Math.random() * 9000)}`;
    const snapshot = {
      orderId: generatedId,
      tableNumber,
      items: [...cartItems],
      subtotal,
      tax,
      grandTotal,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setOrderDetails(snapshot);
    clearCart();
    setIsCartOpen(false);
  };

  const handleBackToMenu = () => {
    setOrderDetails(null);
  };

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: menu.length };
    CATEGORIES.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = menu.filter(item => item.category === cat.id).length;
      }
    });
    return counts;
  }, [menu]);

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return menu.filter(item => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Veg-only filter
      if (vegOnly && !item.isVeg) {
        return false;
      }

      // Search query (case-insensitive on name & description)
      if (searchQuery.trim()) {
        const cleanQuery = searchQuery.trim().toLowerCase();
        const matchesName = item.name.toLowerCase().includes(cleanQuery);
        const matchesDesc = item.description.toLowerCase().includes(cleanQuery);
        if (!matchesName && !matchesDesc) {
          return false;
        }
      }

      return true;
    });
  }, [menu, selectedCategory, vegOnly, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setVegOnly(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-espresso-900 selection:bg-gold-200">
      
      {/* Sticky Top Navigation */}
      <Navbar
        cartCount={totalItemsCount}
        cartTotal={grandTotal}
        onOpenCart={() => setIsCartOpen(true)}
        currentTable={tableNumber}
        onOpenTableSelector={() => setIsTableSelectorOpen(true)}
      />

      {/* Main Menu Section - Food Menu Directly Accessible */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 space-y-5">
        
        {/* Controls Section: Search Bar & Veg Filter */}
        <section aria-label="Search and Filter">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onClearSearch={() => setSearchQuery('')}
            vegOnly={vegOnly}
            onToggleVegOnly={() => setVegOnly(prev => !prev)}
          />
        </section>

        {/* Category Filter Pills */}
        <section aria-label="Food Categories" className="pt-2">
          <CategoryFilter
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            categoryCounts={categoryCounts}
          />
        </section>

        {/* Dynamic State Rendering */}
        <section aria-label="Menu Items" className="pt-2 pb-12">
          {loading ? (
            <LoadingState count={6} />
          ) : error ? (
            <ErrorState
              message={error}
              onRetry={() => loadMenu()}
            />
          ) : filteredDishes.length === 0 ? (
            <EmptyState
              title={searchQuery ? `No results for "${searchQuery}"` : "No dishes available"}
              message={
                searchQuery
                  ? "Try checking your spelling or search for another popular dish like Biryani or Truffle Burger."
                  : "There are currently no items in this category matching your filter."
              }
              actionLabel="Reset All Filters"
              onAction={resetFilters}
            />
          ) : (
            <>
              {/* Results summary header */}
              <div className="flex items-center justify-between text-xs text-espresso-600 mb-4 px-1">
                <span>
                  Showing <strong className="font-bold text-espresso-900">{filteredDishes.length}</strong> {filteredDishes.length === 1 ? 'creation' : 'creations'}
                  {selectedCategory !== 'all' && (
                    <> in <span className="font-semibold text-espresso-900 capitalize">{selectedCategory.replace('-', ' ')}</span></>
                  )}
                  {vegOnly && ' (Vegetarian only)'}
                </span>
                {(searchQuery || selectedCategory !== 'all' || vegOnly) && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-gold-700 hover:text-espresso-900 underline font-medium cursor-pointer transition-colors"
                  >
                    Reset filters
                  </button>
                )}
              </div>

              {/* Responsive Food Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredDishes.map((item) => (
                  <FoodCard
                    key={item.id}
                    item={item}
                    inCartQuantity={getItemQuantity(item.id)}
                    onAddToCart={handleAddToCart}
                    onSelect={setSelectedFood}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      {/* Floating Bottom Cart Bar for Mobile (375px friendliness) */}
      {totalItemsCount > 0 && (
        <div className="sm:hidden fixed bottom-4 inset-x-4 z-30 animate-fade-in">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="w-full py-3.5 px-4 rounded-2xl bg-espresso-900 text-cream-50 font-bold text-sm flex items-center justify-between shadow-2xl border border-gold-500/50 cursor-pointer active:scale-98"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gold-500 text-espresso-950 flex items-center justify-center text-xs font-bold">
                {totalItemsCount}
              </div>
              <span>View Your Order</span>
            </div>
            <span className="font-serif text-gold-300 text-base">
              ₹{grandTotal}
            </span>
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-champagne-200/80 bg-champagne-100/40 py-6 px-4 text-center text-xs text-espresso-600">
        <div className="flex items-center justify-center gap-2 font-medium">
          <span className="font-serif font-bold tracking-wider text-espresso-900">ZESTIA</span>
          <span className="text-gold-600">•</span>
          <span>Scan. Browse. Dine.</span>
        </div>
        <p className="text-[11px] text-espresso-400 mt-1">
          © {new Date().getFullYear()} ZESTIA Restaurant
        </p>
      </footer>

      {/* Modals, Drawers & Feedback Toasts */}
      {selectedFood && (
        <FoodDetails
          item={selectedFood}
          onClose={() => setSelectedFood(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        subtotal={subtotal}
        tax={tax}
        grandTotal={grandTotal}
        onPlaceOrder={handlePlaceOrder}
        currentTable={tableNumber}
        onRequestSelectTable={() => {
          showToast('Please select your table before placing the order.');
          setIsTableSelectorOpen(true);
        }}
      />

      {orderDetails && (
        <OrderConfirmation
          orderDetails={orderDetails}
          onBackToMenu={handleBackToMenu}
        />
      )}

      <TableSelector
        isOpen={isTableSelectorOpen}
        currentTable={tableNumber}
        onSelectTable={handleSelectTable}
        onClose={() => setIsTableSelectorOpen(false)}
      />

      <Toast
        visible={toast.visible}
        message={toast.message}
        onClose={hideToast}
      />

    </div>
  );
}
