// import Card from './components/Card'
import Index from "./components/Index";

function App() {
  const productData = [
    {
      id: "1",
      product_name: "Classic Leather Wallet",
      price: 29.99,
      category: "Accessories",
    },
    {
      id: "2",
      product_name: "Wireless Bluetooth Earbuds",
      price: 59.99,
      category: "Electronics",
    },
    {
      id: "3",
      product_name: "Men's Running Shoes",
      price: 79.99,
      category: "Shoes",
    },
    {
      id: "4",
      product_name: "Women's Yoga Leggings",
      price: 39.99,
      category: "Clothing",
    },
    {
      id: "5",
      product_name: "4K Ultra HD Smart TV",
      price: 499.99,
      category: "Electronics",
    },
    {
      id: "6",
      product_name: "Stainless Steel Water Bottle",
      price: 19.99,
      category: "Accessories",
    },
    {
      id: "7",
      product_name: "Adjustable Office Chair",
      price: 149.99,
      category: "Furniture",
    },
    {
      id: "8",
      product_name: "Gaming Mechanical Keyboard",
      price: 89.99,
      category: "Electronics",
    },
    {
      id: "9",
      product_name: "Bamboo Cutting Board Set",
      price: 24.99,
      category: "Home & Kitchen",
    },
    {
      id: "10",
      product_name: "Men's Classic Wristwatch",
      price: 129.99,
      category: "Accessories",
    },
    {
      id: "11",
      product_name: "Fitness Tracker Watch",
      price: 99.99,
      category: "Electronics",
    },
    {
      id: "12",
      product_name: "Cozy Knit Throw Blanket",
      price: 34.99,
      category: "Home & Kitchen",
    },
    {
      id: "13",
      product_name: "Ceramic Coffee Mug Set",
      price: 22.99,
      category: "Home & Kitchen",
    },
    {
      id: "14",
      product_name: "Women's Ankle Boots",
      price: 69.99,
      category: "Shoes",
    },
    {
      id: "15",
      product_name: "Noise-Cancelling Headphones",
      price: 199.99,
      category: "Electronics",
    },
    {
      id: "16",
      product_name: "Wooden Desk Organizer",
      price: 39.99,
      category: "Office Supplies",
    },
    {
      id: "17",
      product_name: "Luxury Scented Candle",
      price: 24.99,
      category: "Home & Kitchen",
    },
    {
      id: "18",
      product_name: "Stainless Steel Cookware Set",
      price: 129.99,
      category: "Home & Kitchen",
    },
    {
      id: "19",
      product_name: "Men's Hooded Sweatshirt",
      price: 49.99,
      category: "Clothing",
    },
    {
      id: "20",
      product_name: "Wireless Charging Pad",
      price: 29.99,
      category: "Electronics",
    },
    {
      id: "21",
      product_name: "Women's Crossbody Bag",
      price: 59.99,
      category: "Accessories",
    },
    {
      id: "22",
      product_name: "Electric Stand Mixer",
      price: 229.99,
      category: "Home & Kitchen",
    },
    {
      id: "23",
      product_name: "Digital DSLR Camera",
      price: 799.99,
      category: "Electronics",
    },
    {
      id: "24",
      product_name: "High-Performance Laptop",
      price: 1199.99,
      category: "Electronics",
    },
  ];

  if (!localStorage.getItem("product")) {
    localStorage.setItem("product", JSON.stringify(productData));
  }

  return (
    <>
      <Index />
    </>
  );
}

export default App;
