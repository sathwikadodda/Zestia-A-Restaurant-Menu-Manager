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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAdm621ql6a4bp4eBRJbuPTGjvPObNy9RE-PKi65DFxw&s=10",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQql17Aq177ATXoaeRbffqBKxorgV4_7LOWgNHsaCo_iQ&s=10",

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

"https://pikturenama.com/wp-content/uploads/2023/05/chicken-65-low-res-6479-500x500.jpg",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPmObp5FYRxCxouF903gpPQlYU1EbSDSg6pFapI6Aqw&s=10",

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

"https://foodfoodonlyfood.wordpress.com/wp-content/uploads/2017/02/img_20240519_155506.jpg",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7J1BbxZQZaVY7xgmOOwzeOLibVJ2kaaeL08y6e8c8bw&s=10",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtBbYy6hwZdYxouyYL-Q9QGoIMokD3A_DdiZCiS6bC8yAW__60YtLtFyu&s=10",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2fcGJRmvVkeH_wkcbWyAj5IusaEMyNoR7SoBeI5-VQjTi7K1PoFNbLA&s=10",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9oTEBGrBXoV6JhXQH_aCNNrTfiTHTlid-wC_Inep1w&s=10",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E8C15ehXaDnGqVJ69ozaKnAZHgDv07AKFj0ca9B69w&s=10",

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

"https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",

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

"https://www.cubesnjuliennes.com/wp-content/uploads/2018/07/Vegetable-Dum-Biryani-recipe.jpg",

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

"https://www.tomatoblues.com/wp-content/uploads/2022/09/paneer-biryani-1.jpg",

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

"https://www.licious.in/blog/wp-content/uploads/2022/06/mutton-hyderabadi-biryani-01.jpg",

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

"https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg",

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

"https://assets.foodhub.com/images/thumbnails/margherita_1678797437195_1280.jpg",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OZ1IPIqXzCCL0LVIKwVi1PqEkLVvlAJikZMsxgmUZvXNkYmdNEa7P9oa&s=10",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_uJ6kiBO8EZaXyxuCF-TqhIm_OK_cv8dJH1_xNy2lVLeM8P-7USrq6s&s=10",

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

"https://www.dominos.com.sg/ManagedAssets/SG/product/PXCP/SG_PXCP_en_hero_13763.jpg?v-1441183037",

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

"Spicy Mexican-style pizza with vegetables, jalapeÃ±os, sweet corn and cheese.",

price: 359,

image:

"https://i.pinimg.com/564x/7f/f6/7d/7ff67d79386dacd923d67ff330e9ee1d.jpg",

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

"https://5.imimg.com/data5/CC/HE/GLADMIN-51695823/big-crunch-chicken-classic-burger.png",

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

"https://images.slurrp.com/prod/recipe_images/transcribe/snack/Vegetable-Burger.webp",

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

"https://sinfullyspicy.com/wp-content/uploads/2025/05/1200-by-1200-images-3.jpg",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0cUp_Zez9GVwYArWzqXZLVYqPNPmu2s-7hJmZ7Td-9IH7tbdBh-TEt7o&s=10",

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

"https://cdn.uengage.io/uploads/6670/image-257742-1677054193.jpeg",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HhRV1CxtL6LPoRcTKbx4nqz3FhXRefK6tCm1DVFs2g&s=10",

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

"https://cdn.uengage.io/uploads/7175/image-111388-1784108833.jpeg",

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

"https://www.onceuponachef.com/images/2017/12/cheesecake.jpg",

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

"https://mariasmenu.com/wp-content/uploads/Rasmalai.jpg",

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

"https://floursandfrostings.com/wp-content/uploads/2017/01/IMG_20170104_003650_972.jpg",

isVeg: true,

prepTime: "10-15 min",

spicyLevel: 0,

badge: "Must Try"

},

{

id: "des-6",

name: "Tiramisu",

category: "desserts",

description:

"Classic Italian dessert with coffee-soaked layers, creamy mascarpone, and a dusting of cocoa.",

price: 249,

image:

"https://cdn.loveandlemons.com/wp-content/uploads/2026/01/tiramisu.jpg",

isVeg: true,

prepTime: "5-10 min",

spicyLevel: 0,

badge: "Premium"

},

{

id: "des-7",

name: "Apricot Delight",

category: "desserts",

description:

"Delicious apricot dessert with a soft, creamy texture and a refreshing fruity flavor.",

price: 199,

image:

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpEzkJ_0fkamok3QvSQC5ZpyEPk1629F7LMxrcPFrPwBATQ9GzoIC6AXs&s=10",

isVeg: true,

prepTime: "5-10 min",

spicyLevel: 0,

badge: "Special"

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

"https://sattvakitchen.com/wp-content/uploads/2024/05/SWEET-LIME-SODA-shutterstock_2309599743-copy-Copy-copy.jpg",

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

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFDnX3HyMqV4vDCjlV5M1r2nGb2Y10ewhr0H2BZxtKElMtdI4wkUUwXE&s=10",

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

"https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6.jpg",

isVeg: true,

prepTime: "5-10 min",

spicyLevel: 0,

badge: "Popular"

},


{

id: "bev-4",

name: "sprite",

category: "beverages",

description:

"Refreshing lemon-lime flavored soft drink served chilled for a crisp and fizzy taste.",

price: 49,

image:

"https://www.shutterstock.com/shutterstock/photos/1772098667/display_1500/stock-photo-glass-of-sprite-soda-water-with-ice-mint-and-lemon-refreshing-summer-cocktail-concept-with-tonic-1772098667.jpg",

isVeg: true,

prepTime: "1-2 min",

spicyLevel: 0,

badge: "Refreshing"

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

},

{

id: "bev-6",

name: "thumbsUp",

category: "beverages",

description:

"Bold and refreshing cola with a strong fizzy taste, served chilled.",

price: 49,

image:

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrogTK-aGkgnXNpXN0DG-rEhwWy_W0s5rm8OUSXEOfRA&s",

isVeg: true,

prepTime: "1-2 min",

spicyLevel: 0,

badge: "Refreshing"

}

];


export const fetchMenuData = async () => {

return MENU_ITEMS;

};


export default MENU_ITEMS;