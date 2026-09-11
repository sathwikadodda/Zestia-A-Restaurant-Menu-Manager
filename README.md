# ZESTIA — Scan. Browse. Dine.

> A polished, modern, and interactive restaurant menu web application crafted with an elegant Champagne luxury palette, smooth transitions, real-time search, category filtering, persistent cart management, and seamless mobile responsiveness down to 375px viewports.

---

## 🍽️ Overview

**ZESTIA** is designed for modern dining establishments that want to provide their guests with an elevated digital menu experience. Drawing visual inspiration from warm champagne tones, deep espresso typography, and subtle gold accents, the application balances aesthetic sophistication with high usability.

### Core User Journey
1. **Explore Menu**: Browse masterfully crafted dishes across starters, main courses, biryani, artisanal pizzas, burgers, desserts, and craft beverages.
2. **Instant Search & Category Filter**: Live, case-insensitive search and one-tap category pills with live item count indicators and pure vegetarian dietary filtering.
3. **Food Details Modal**: View comprehensive dish specifications including culinary notes, estimated preparation time, spice levels, and an interactive quantity stepper.
4. **Interactive Cart**: Slide-over drawer with instant line-item adjustments, item removal, bill computation (subtotal + 5% service & GST), and double-click protected order submission.
5. **Order Confirmation**: Clean celebration receipt modal with a uniquely generated order ID (`#ZST-XXXX`), itemized ticket, estimated preparation time, and safe cart reset.

---

## ✨ Key Features

- **Champagne Palette Aesthetic**: Warm cream primary background (`#FAF8F5`), champagne surface cards (`#F5EDE2`), deep espresso text (`#1C140F`), and subtle gold accents (`#C5A059`).
- **Instant Live Search**: Immediate results filtering by name and description with auto-clearing button, length protection (tested with 100+ character queries), and helpful empty state recommendations.
- **Category & Dietary Filtering**: Filter by 7 distinct culinary categories plus a toggle for Pure Vegetarian dishes.
- **Cart Persistence (`localStorage`)**: Cart items, quantities, and removals persist across browser refreshes and tab reloads with automatic error recovery.
- **Asynchronous Data Simulation**: Simulated network latency (650ms) showcasing skeleton shimmer loading cards, with complete error recovery and retry capability.
- **Hackathon-Grade Mobile Responsiveness**: Precision-crafted for mobile devices down to 375px width (iPhone SE standard), featuring a floating bottom cart action bar, zero horizontal scroll, and touch targets $\ge 44\text{px}$.
- **Double-Click & Rapid-Tap Protection**: Built-in state debouncing and loading spinners preventing accidental duplicate orders or erratic cart entries.
- **Interactive Table Number Selector**: Welcoming initial check-in prompt for first visits with selectable options from Table 01 to Table 20. Stored in `localStorage` under `zestia-table-number` with automatic recovery on page refresh. Interactive header pill allows changing tables at any time with instant synchronization.
- **Order Table Validation**: Validates table selection before order dispatch and presents the table number directly on the final confirmation ticket.
- **Accessible & Semantic HTML**: Proper ARIA landmarks, `role="dialog"`, accessible button labels, and keyboard ESC handling for modals.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v18.3.1)
- **Bundler & Dev Server**: [Vite](https://vite.dev/) (v6.0)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3.4) with custom theme configuration
- **UI Components & Themes**: [DaisyUI](https://daisyui.com/) (v4.12)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management & Storage**: React Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`) + Browser `localStorage`

---

## 📂 Project Structure

```
Zestia/
├── index.html                  # HTML entry with Google Fonts (Playfair Display & Plus Jakarta Sans)
├── package.json                # Dependencies and build scripts
├── vite.config.js              # Vite React configuration
├── tailwind.config.js          # Custom Champagne, Cream, and Espresso color definitions
├── postcss.config.js           # PostCSS Tailwind plugins
├── src/
│   ├── main.jsx                # Application root mount
│   ├── App.jsx                 # Top-level state coordinator (menu, search, cart, modals, table)
│   ├── index.css               # Global typography, animations, scrollbars
│   ├── data/
│   │   └── menuData.js         # 21 realistic dishes across 7 categories + async fetch simulator
│   ├── hooks/
│   │   └── useCart.js          # Encapsulated cart hook with localStorage sync & totals calculation
│   └── components/
│       ├── Navbar.jsx          # Streamlined header with ZESTIA branding, table badge & live cart
│       ├── SearchBar.jsx       # Instant search input with clear button and veg toggle
│       ├── CategoryFilter.jsx  # Horizontal scrollable category pill bar with counts
│       ├── FoodCard.jsx        # Dish card with veg/non-veg indicator, price, and quick add
│       ├── FoodDetails.jsx     # Detail modal with high-res photo, prep time, spice level, qty stepper
│       ├── Cart.jsx            # Slide-over cart drawer with table validation & checkout trigger
│       ├── CartItem.jsx        # Cart line item with thumbnail, quantity buttons, and removal
│       ├── TableSelector.jsx   # Dedicated table selector modal
│       ├── OrderConfirmation.jsx # Receipt modal with generated order ID, table number & kitchen status
│       ├── Toast.jsx           # Floating notification feedback for cart & table interactions
│       ├── EmptyState.jsx      # Reusable empty states for search and empty categories
│       ├── LoadingState.jsx    # Skeleton cards displayed during async menu loading
│       └── ErrorState.jsx      # Friendly error view with retry button
└── README.md
```

---

## 🚀 How to Install & Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Clone or navigate to the project directory
```bash
cd Zestia
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser at the local URL displayed in the terminal (typically `http://localhost:5173`).

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory, ready for deployment on platforms such as Vercel, Netlify, or Cloudflare Pages.

---

## 📡 Data Layer & Asynchronous Architecture

The application implements a realistic asynchronous data service in [`src/data/menuData.js`](src/data/menuData.js):
- **`fetchMenuData({ simulateError = false })`**: Returns a Promise resolving with 21 gourmet dishes across 7 categories after a simulated 650ms network delay.
- Allows testing smooth shimmer loading states ([`LoadingState.jsx`](src/components/LoadingState.jsx)) and retry resilience ([`ErrorState.jsx`](src/components/ErrorState.jsx)).
- High-resolution food photography URLs with automatic fallback handlers ensure that images always render cleanly without broken placeholder icons.

---

## 🤖 AI Disclosure

As required by the hackathon rules, **Google Antigravity** was used as an AI development assistant during the conceptualization, architecture design, and coding of this application.
