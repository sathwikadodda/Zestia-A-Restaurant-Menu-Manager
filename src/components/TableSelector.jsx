import React, { useState, useEffect } from 'react';
import { X, Check, ChevronDown, AlertCircle, Loader2 } from 'lucide-react';

export const TABLE_OPTIONS = Array.from({ length: 20 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return `Table ${num}`;
});

export const isValidTable = (table) => {
  return typeof table === 'string' && TABLE_OPTIONS.includes(table);
};

export default function TableSelector({
  isOpen,
  currentTable,
  onSelectTable,
  onClose
}) {
  const [selected, setSelected] = useState(currentTable || '');
  const [errorMessage, setErrorMessage] = useState('');
  const [isClaiming, setIsClaiming] = useState(false);

  useEffect(() => {
    if (currentTable && isValidTable(currentTable)) {
      setSelected(currentTable);
    } else {
      setSelected('');
    }
    setErrorMessage('');
    setIsClaiming(false);
  }, [currentTable, isOpen]);

  // Support ESC to close only when changing an already selected table
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && currentTable && onClose) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentTable, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidTable(selected) || isClaiming) return;

    if (currentTable && selected === currentTable) {
      if (onClose) onClose();
      return;
    }

    setErrorMessage('');
    setIsClaiming(true);

    try {
      const result = await onSelectTable(selected);
      if (result && result.success === false) {
        setErrorMessage(result.message || `${selected} is currently in use. Please select another table.`);
      }
    } catch (err) {
      setErrorMessage(err?.message || 'Failed to claim table. Please try again.');
    } finally {
      setIsClaiming(false);
    }
  };

  const isFirstVisit = !currentTable;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="table-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/60 backdrop-blur-sm animate-fade-in"
      onClick={() => {
        if (!isFirstVisit && !isClaiming && onClose) {
          onClose();
        }
      }}
    >
      <div
        className="relative w-full max-w-sm bg-cream-50 rounded-2xl shadow-modal border border-champagne-300 p-5 sm:p-6 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (only when modifying an already selected table) */}
        {!isFirstVisit && onClose && (
          <button
            type="button"
            onClick={onClose}
            disabled={isClaiming}
            aria-label="Close table selection"
            className="absolute top-4 right-4 text-espresso-400 hover:text-espresso-800 disabled:opacity-30 transition-colors p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Modal Header */}
        <div className="mb-4 text-center">
          <h2
            id="table-modal-title"
            className="font-serif text-xl font-bold text-espresso-900"
          >
            Select Your Table
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <select
              id="table-select"
              value={selected}
              disabled={isClaiming}
              onChange={(e) => {
                setSelected(e.target.value);
                setErrorMessage('');
              }}
              className="w-full appearance-none px-4 py-2.5 rounded-xl bg-champagne-100/80 hover:bg-champagne-100 focus:bg-cream-50 border border-champagne-300 text-espresso-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all cursor-pointer pr-10 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <option value="" disabled>
                Select Table
              </option>
              {TABLE_OPTIONS.map((table) => (
                <option key={table} value={table} className="text-espresso-900 bg-cream-50">
                  {table}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-espresso-500">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Error feedback if table is occupied or network fails */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold flex items-start gap-2 animate-fade-in shadow-xs">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="leading-tight">{errorMessage}</span>
            </div>
          )}

          <div className="flex gap-2 pt-1">
            {!isFirstVisit && onClose && (
              <button
                type="button"
                onClick={onClose}
                disabled={isClaiming}
                className="flex-1 py-2.5 px-4 rounded-xl bg-champagne-100 hover:bg-champagne-200 disabled:opacity-50 text-espresso-800 font-semibold text-xs transition-colors cursor-pointer"
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              disabled={!isValidTable(selected) || isClaiming}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-600 disabled:bg-champagne-200 disabled:text-espresso-400 text-espresso-950 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isClaiming ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Continue</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
