// import Card from './components/Card'
import Index from './components/Index'


function App() {

  const productData = [
    {
      "Product Name": "Classic Leather Wallet",
      "Price": 29.99,
      "Category": "Accessories"
    },
    {
      "Product Name": "Wireless Bluetooth Earbuds",
      "Price": 59.99,
      "Category": "Electronics"
    },
    {
      "Product Name": "Men's Running Shoes",
      "Price": 79.99,
      "Category": "Shoes"
    },
    {
      "Product Name": "Women's Yoga Leggings",
      "Price": 39.99,
      "Category": "Clothing"
    },
    {
      "Product Name": "4K Ultra HD Smart TV",
      "Price": 499.99,
      "Category": "Electronics"
    },
    {
      "Product Name": "Stainless Steel Water Bottle",
      "Price": 19.99,
      "Category": "Accessories"
    },
    {
      "Product Name": "Adjustable Office Chair",
      "Price": 149.99,
      "Category": "Furniture"
    },
    {
      "Product Name": "Gaming Mechanical Keyboard",
      "Price": 89.99,
      "Category": "Electronics"
    },
    {
      "Product Name": "Bamboo Cutting Board Set",
      "Price": 24.99,
      "Category": "Home & Kitchen"
    },
    {
      "Product Name": "Men's Classic Wristwatch",
      "Price": 129.99,
      "Category": "Accessories"
    },
    {
      "Product Name": "Fitness Tracker Watch",
      "Price": 99.99,
      "Category": "Electronics"
    },
    {
      "Product Name": "Cozy Knit Throw Blanket",
      "Price": 34.99,
      "Category": "Home & Kitchen"
    },
    {
      "Product Name": "Ceramic Coffee Mug Set",
      "Price": 22.99,
      "Category": "Home & Kitchen"
    },
    {
      "Product Name": "Women's Ankle Boots",
      "Price": 69.99,
      "Category": "Shoes"
    },
    {
      "Product Name": "Noise-Cancelling Headphones",
      "Price": 199.99,
      "Category": "Electronics"
    },
    {
      "Product Name": "Wooden Desk Organizer",
      "Price": 39.99,
      "Category": "Office Supplies"
    },
    {
      "Product Name": "Luxury Scented Candle",
      "Price": 24.99,
      "Category": "Home & Kitchen"
    },
    {
      "Product Name": "Stainless Steel Cookware Set",
      "Price": 129.99,
      "Category": "Home & Kitchen"
    },
    {
      "Product Name": "Men's Hooded Sweatshirt",
      "Price": 49.99,
      "Category": "Clothing"
    },
    {
      "Product Name": "Wireless Charging Pad",
      "Price": 29.99,
      "Category": "Electronics"
    },
    {
      "Product Name": "Women's Crossbody Bag",
      "Price": 59.99,
      "Category": "Accessories"
    },
    {
      "Product Name": "Electric Stand Mixer",
      "Price": 229.99,
      "Category": "Home & Kitchen"
    },
    {
      "Product Name": "Digital DSLR Camera",
      "Price": 799.99,
      "Category": "Electronics"
    },
    {
      "Product Name": "High-Performance Laptop",
      "Price": 1199.99,
      "Category": "Electronics"
    }
  ];
  
  if(!localStorage.getItem('product')){
    localStorage.setItem('product', JSON.stringify(productData));
  }

  return (
    <>
      <div>
        {/* <Card/> */}
        <Index/>
      </div>
    </>
  )
}

export default App
