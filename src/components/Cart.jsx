import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, ArrowRight, Loader2, Sparkles, AlertCircle, Receipt } from 'lucide-react';
import CartItem from './CartItem.jsx';

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  subtotal,
  tax,
  grandTotal,
  onPlaceOrder,
  currentTable,
  onRequestSelectTable,
  onRequestBill,
  hasActiveSession = false,
  sessionOrdersCount = 0,
  sessionTotal = 0,
  isRequestingBill = false
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Clear validation error when a table is selected
  React.useEffect(() => {
    if (currentTable) {
      setValidationError('');
    }
  }, [currentTable]);

  if (!isOpen) return null;

  const handleOrderClick = async () => {
    if (isProcessing || cartItems.length === 0) return;

    // Verify valid table number exists
    if (!currentTable) {
      setValidationError('Please select your table before placing the order.');
      if (onRequestSelectTable) {
        onRequestSelectTable();
      }
      return;
    }

    setValidationError('');
    setIsProcessing(true);

    // Simulate order placement processing (800ms)
    setTimeout(() => {
      onPlaceOrder();
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart"
      className="fixed inset-0 z-50 overflow-hidden bg-espresso-950/60 backdrop-blur-sm animate-fade-in flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-cream-50 h-full shadow-2xl flex flex-col border-l border-champagne-300 transform transition-transform duration-300 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-4 sm:p-5 border-b border-champagne-200/80 flex items-center justify-between bg-champagne-100/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-champagne-200 flex items-center justify-center text-espresso-900">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg font-bold text-espresso-900">
                  Your Selection
                </h2>
                {currentTable && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-champagne-200 text-espresso-900 border border-champagne-300/80">
                    🍽️ {currentTable}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-espresso-600">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in order
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                type="button"
                onClick={onClearCart}
                className="text-[11px] text-espresso-500 hover:text-rose-600 underline px-1.5 transition-colors cursor-pointer"
              >
                Clear all
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="w-8 h-8 rounded-full bg-cream-50 hover:bg-champagne-200 text-espresso-800 flex items-center justify-center border border-champagne-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cart Items List or Empty State */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartItems.length === 0 ? (
            sessionOrdersCount > 0 && currentTable ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3.5">
                <div className="w-14 h-14 rounded-2xl bg-champagne-100 border border-gold-400/40 flex items-center justify-center text-gold-700 shadow-subtle">
                  <Receipt className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-champagne-200/80 text-[10px] font-bold text-gold-800 uppercase tracking-wider mb-1">
                    Active Dining Session
                  </div>
                  <h3 className="font-serif text-lg font-bold text-espresso-900">
                    {currentTable}
                  </h3>
                  <p className="text-xs text-espresso-600 mt-1 max-w-xs leading-relaxed">
                    {sessionOrdersCount} {sessionOrdersCount === 1 ? 'order round' : 'order rounds'} placed for this table (Session Total: <strong>₹{sessionTotal}</strong>).
                  </p>
                </div>

                <div className="w-full max-w-xs space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={onRequestBill}
                    disabled={isRequestingBill}
                    className="w-full py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-espresso-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-98"
                  >
                    {isRequestingBill ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-espresso-950" />
                        <span>Requesting Bill...</span>
                      </>
                    ) : (
                      <>
                        <Receipt className="w-4 h-4" />
                        <span>Request Bill ({currentTable})</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-2.5 px-4 rounded-xl bg-champagne-100 hover:bg-champagne-200 text-espresso-800 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Order More Items
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-champagne-100 border border-champagne-200 flex items-center justify-center text-espresso-400">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg font-bold text-espresso-900">
                  Your cart is empty
                </h3>
                <p className="text-xs text-espresso-600 max-w-xs leading-relaxed">
                  Explore our curated culinary creations and add your favorite dishes to begin dining.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-espresso-900 text-cream-50 hover:bg-gold-600 hover:text-espresso-950 font-semibold text-xs transition-all shadow-subtle cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>
            )
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveItem}
              />
            ))
          )}
        </div>

        {/* Cart Summary & Checkout Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-champagne-200/90 bg-champagne-100/40 space-y-3">
            {/* Bill breakdown */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-espresso-700">
                <span>Dining Table</span>
                <span className="font-bold text-gold-700">
                  {currentTable ? `🍽️ ${currentTable}` : 'None Selected'}
                </span>
              </div>
              <div className="flex items-center justify-between text-espresso-700">
                <span>Items Subtotal</span>
                <span className="font-medium text-espresso-900">₹{subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-espresso-700">
                <span className="flex items-center gap-1">
                  <span>Taxes & Service (5%)</span>
                  <Sparkles className="w-3 h-3 text-gold-500" />
                </span>
                <span className="font-medium text-espresso-900">₹{tax}</span>
              </div>
              <div className="pt-2 border-t border-champagne-200 flex items-center justify-between text-sm font-bold text-espresso-950">
                <span className="font-serif text-base">Grand Total</span>
                <span className="font-serif text-xl text-espresso-950">₹{grandTotal}</span>
              </div>
            </div>

            {/* Validation alert if no table is selected */}
            {validationError && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold flex items-center justify-between gap-2 animate-fade-in shadow-xs">
                <div className="flex items-center gap-1.5 min-w-0">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="truncate">{validationError}</span>
                </div>
                <button
                  type="button"
                  onClick={onRequestSelectTable}
                  className="underline font-bold text-gold-700 hover:text-espresso-950 shrink-0 cursor-pointer"
                >
                  Select
                </button>
              </div>
            )}

            {/* Order Placement Button */}
            <button
              type="button"
              onClick={handleOrderClick}
              disabled={isProcessing || isRequestingBill || cartItems.length === 0}
              className="w-full py-3.5 px-4 rounded-2xl bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-espresso-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-espresso-950" />
                  <span>Confirming Order...</span>
                </>
              ) : (
                <>
                  <span>Place Order • ₹{grandTotal}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Request Bill Button (when active session and table exist) */}
            {hasActiveSession && currentTable && (
              <button
                type="button"
                onClick={onRequestBill}
                disabled={isRequestingBill || isProcessing}
                className="w-full py-2.5 px-4 rounded-2xl bg-champagne-100 hover:bg-champagne-200/90 border border-champagne-300 text-espresso-900 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 shadow-xs disabled:opacity-50"
              >
                {isRequestingBill ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-espresso-950" />
                    <span>Requesting Bill...</span>
                  </>
                ) : (
                  <>
                    <Receipt className="w-3.5 h-3.5 text-gold-700" />
                    <span>Request Bill ({currentTable})</span>
                  </>
                )}
              </button>
            )}

            <p className="text-[11px] text-center text-espresso-500 font-medium">
              Immediate kitchen preparation upon order placement
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
