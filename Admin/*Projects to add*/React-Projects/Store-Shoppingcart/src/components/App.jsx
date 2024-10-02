import "./App.css";
import ProductsList from "./ProductsList.jsx";
import Header from "./Header.jsx";
import products from "./products.js";
import ShoppingCart from "./ShoppingCart.jsx";
import { CartProvider } from "../contexts/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <div id="wrapper">
        <Header />
        <main>
          {/* <Filters /> TODO: Product listing filtering */}
          <ShoppingCart />
          <ProductsList />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
