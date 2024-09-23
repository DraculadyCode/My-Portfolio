import { useMemo } from "react";
import { useCart } from "../contexts/CartContext.jsx";
import randomSVG from "./Svg.jsx";

function Product({ product }) {
  // Usememo is a bit overkill here
  const svg = useMemo(randomSVG, []);
  const { dispatch } = useCart();
  function addToCart() {
    dispatch({ type: "Add_Product", product });
  }

  return (
    <div className="Product">
      {svg}
      <p className="price">
        {product.price}
        <button onClick={addToCart}>+</button>
      </p>
      <p className="name">{product.productName}</p>
      <p className="desc">{product.description}</p>
    </div>
  );
}

export default Product;
