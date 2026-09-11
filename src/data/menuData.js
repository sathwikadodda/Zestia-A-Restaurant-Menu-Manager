// ZESTIA Restaurant Menu Data

export const CATEGORIES = [
  { id: "all", name: "All Dishes" },
  { id: "starters", name: "Starters" },
  { id: "main-course", name: "Main Course" },
  { id: "biryani", name: "Biryani" },
  { id: "pizza", name: "Pizza" },
  { id: "burgers", name: "Burgers" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" }
];

export const MENU_ITEMS = [

  // ==================== STARTERS ====================

  {
    id: "str-1",
    name: "Paneer Tikka",
    category: "starters",
    description:
      "Tender cottage cheese cubes marinated in yogurt and aromatic spices, flame-grilled to perfection.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "15-20 min",
    spicyLevel: 1,
    badge: "Chef Signature"
  },

  {
    id: "str-2",
    name: "Crispy Corn",
    category: "starters",
    description:
      "Golden sweet corn kernels coated in a crispy seasoned crust and tossed with fresh herbs.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "10-15 min",
    spicyLevel: 2,
    badge: "Popular"
  },

  {
    id: "str-3",
    name: "Chicken 65",
    category: "starters",
    description:
      "Crispy fried chicken tossed with South Indian spices, curry leaves and green chillies.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "15-20 min",
    spicyLevel: 3,
    badge: "Best Seller"
  },

  {
    id: "str-4",
    name: "Veg Spring Rolls",
    category: "starters",
    description:
      "Crispy golden rolls filled with fresh vegetables and served with a tangy dipping sauce.",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1548507200-3d7a4a8b1c1d?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "10-15 min",
    spicyLevel: 1,
    badge: null
  },

  {
    id: "str-5",
    name: "Chicken Tikka",
    category: "starters",
    description:
      "Juicy chicken pieces marinated with yogurt, herbs and spices, then char-grilled.",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "20-25 min",
    spicyLevel: 2,
    badge: "Chef Favorite"
  },


  // ==================== MAIN COURSE ====================

  {
    id: "main-1",
    name: "Paneer Butter Masala",
    category: "main-course",
    description:
      "Soft paneer cooked in a rich tomato, butter and cream gravy with aromatic Indian spices.",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "20-25 min",
    spicyLevel: 1,
    badge: "Popular"
  },

  {
    id: "main-2",
    name: "Butter Chicken",
    category: "main-course",
    description:
      "Tender grilled chicken simmered in a silky tomato, butter and cream sauce.",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "20-25 min",
    spicyLevel: 2,
    badge: "Best Seller"
  },

  {
    id: "main-3",
    name: "Veg Kadai",
    category: "main-course",
    description:
      "Fresh seasonal vegetables cooked with bell peppers, onions and freshly ground spices.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "15-20 min",
    spicyLevel: 2,
    badge: null
  },

  {
    id: "main-4",
    name: "Dal Makhani",
    category: "main-course",
    description:
      "Slow-cooked black lentils finished with butter and cream for a rich, comforting taste.",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "15-20 min",
    spicyLevel: 1,
    badge: "Comfort Food"
  },

  {
    id: "main-5",
    name: "Chicken Tikka Masala",
    category: "main-course",
    description:
      "Char-grilled chicken tikka simmered in a flavorful spiced tomato and onion gravy.",
    price: 319,
    image:
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "20-25 min",
    spicyLevel: 3,
    badge: "Chef Favorite"
  },


  // ==================== BIRYANI ====================

  {
    id: "bir-1",
    name: "Chicken Biryani",
    category: "biryani",
    description:
      "Fragrant basmati rice layered with tender chicken, saffron and traditional biryani spices.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "25-30 min",
    spicyLevel: 3,
    badge: "Best Seller"
  },

  {
    id: "bir-2",
    name: "Veg Biryani",
    category: "biryani",
    description:
      "Aromatic basmati rice cooked with fresh vegetables, herbs and fragrant spices.",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "20-25 min",
    spicyLevel: 2,
    badge: "Popular"
  },

  {
    id: "bir-3",
    name: "Paneer Biryani",
    category: "biryani",
    description:
      "Fluffy basmati rice layered with marinated paneer, herbs and aromatic biryani spices.",
    price: 269,
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "20-25 min",
    spicyLevel: 2,
    badge: null
  },

  {
    id: "bir-4",
    name: "Mutton Biryani",
    category: "biryani",
    description:
      "Slow-cooked tender mutton layered with fragrant basmati rice and traditional spices.",
    price: 379,
    image:
      "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "30-35 min",
    spicyLevel: 3,
    badge: "Chef Special"
  },

  {
    id: "bir-5",
    name: "Egg Biryani",
    category: "biryani",
    description:
      "Flavorful basmati rice cooked with perfectly seasoned eggs, herbs and aromatic spices.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "20-25 min",
    spicyLevel: 2,
    badge: null
  },


  // ==================== PIZZA ====================

  {
    id: "piz-1",
    name: "Margherita Pizza",
    category: "pizza",
    description:
      "Classic Italian pizza topped with tomato sauce, mozzarella and fresh basil.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "15-20 min",
    spicyLevel: 1,
    badge: "Classic"
  },

  {
    id: "piz-2",
    name: "Farmhouse Pizza",
    category: "pizza",
    description:
      "Loaded with fresh vegetables, bell peppers, onions, mushrooms and melted mozzarella.",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "20-25 min",
    spicyLevel: 1,
    badge: "Popular"
  },

  {
    id: "piz-3",
    name: "Paneer Tikka Pizza",
    category: "pizza",
    description:
      "Indian-inspired pizza topped with spicy paneer tikka, onions, peppers and mozzarella.",
    price: 379,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "20-25 min",
    spicyLevel: 2,
    badge: "Zestia Special"
  },

  {
    id: "piz-4",
    name: "Chicken Pepperoni Pizza",
    category: "pizza",
    description:
      "Cheesy pizza topped with savory chicken pepperoni and melted mozzarella.",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "20-25 min",
    spicyLevel: 2,
    badge: "Best Seller"
  },

  {
    id: "piz-5",
    name: "Mexican Veg Pizza",
    category: "pizza",
    description:
      "Spicy Mexican-style pizza with vegetables, jalapeños, sweet corn and cheese.",
    price: 359,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "20-25 min",
    spicyLevel: 3,
    badge: "Spicy"
  },


  // ==================== BURGERS ====================

  {
    id: "bur-1",
    name: "Classic Chicken Burger",
    category: "burgers",
    description:
      "Juicy chicken patty layered with lettuce, tomato, cheese and creamy signature sauce.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "15-20 min",
    spicyLevel: 1,
    badge: "Popular"
  },

  {
    id: "bur-2",
    name: "Crispy Veg Burger",
    category: "burgers",
    description:
      "Crunchy vegetable patty topped with fresh lettuce, tomato and creamy sauce.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "10-15 min",
    spicyLevel: 1,
    badge: "Value Pick"
  },

  {
    id: "bur-3",
    name: "Paneer Burger",
    category: "burgers",
    description:
      "Crispy spiced paneer patty served with fresh vegetables and a smoky signature sauce.",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "15-20 min",
    spicyLevel: 2,
    badge: "Popular"
  },

  {
    id: "bur-4",
    name: "BBQ Chicken Burger",
    category: "burgers",
    description:
      "Grilled chicken patty glazed with smoky BBQ sauce and topped with melted cheese.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "15-20 min",
    spicyLevel: 2,
    badge: "Chef Favorite"
  },

  {
    id: "bur-5",
    name: "Double Cheese Burger",
    category: "burgers",
    description:
      "Two juicy patties layered with melted cheese, lettuce and Zestia signature sauce.",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    prepTime: "20-25 min",
    spicyLevel: 1,
    badge: "Loaded"
  },


  // ==================== DESSERTS ====================

  {
    id: "des-1",
    name: "Gulab Jamun",
    category: "desserts",
    description:
      "Soft golden milk dumplings soaked in warm, fragrant sugar syrup.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1666190094762-7e8d3b5c0e54?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5-10 min",
    spicyLevel: 0,
    badge: "Classic"
  },

  {
    id: "des-2",
    name: "Chocolate Brownie",
    category: "desserts",
    description:
      "Rich and fudgy chocolate brownie served warm with a decadent chocolate finish.",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5-10 min",
    spicyLevel: 0,
    badge: "Popular"
  },

  {
    id: "des-3",
    name: "New York Cheesecake",
    category: "desserts",
    description:
      "Creamy classic cheesecake with a buttery biscuit base and smooth finish.",
    price: 219,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5-10 min",
    spicyLevel: 0,
    badge: "Premium"
  },

  {
    id: "des-4",
    name: "Rasmalai",
    category: "desserts",
    description:
      "Soft cottage cheese dumplings soaked in chilled saffron and cardamom milk.",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5-10 min",
    spicyLevel: 0,
    badge: null
  },

  {
    id: "des-5",
    name: "Chocolate Lava Cake",
    category: "desserts",
    description:
      "Warm chocolate cake with a rich molten chocolate center.",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "10-15 min",
    spicyLevel: 0,
    badge: "Must Try"
  },


  // ==================== BEVERAGES ====================

  {
    id: "bev-1",
    name: "Fresh Lime Soda",
    category: "beverages",
    description:
      "Refreshing lime soda with a perfect balance of sweet, tangy and fizzy flavors.",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5 min",
    spicyLevel: 0,
    badge: "Refreshing"
  },

  {
    id: "bev-2",
    name: "Mango Lassi",
    category: "beverages",
    description:
      "Creamy yogurt blended with sweet mango for a rich and refreshing drink.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5-10 min",
    spicyLevel: 0,
    badge: "Seasonal Favorite"
  },

  {
    id: "bev-3",
    name: "Cold Coffee",
    category: "beverages",
    description:
      "Smooth chilled coffee blended with milk and finished with a creamy foam.",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5-10 min",
    spicyLevel: 0,
    badge: "Popular"
  },

  {
    id: "bev-4",
    name: "Masala Chai",
    category: "beverages",
    description:
      "Classic Indian tea brewed with milk, ginger, cardamom and aromatic spices.",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5-10 min",
    spicyLevel: 0,
    badge: "Classic"
  },

  {
    id: "bev-5",
    name: "Fresh Fruit Mojito",
    category: "beverages",
    description:
      "Refreshing mint and lime cooler blended with fresh seasonal fruit.",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5-10 min",
    spicyLevel: 0,
    badge: "Refreshing"
  }
];

export const fetchMenuData = async () => {
  return MENU_ITEMS;
};

export default MENU_ITEMS;