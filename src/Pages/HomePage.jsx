import { products } from "../back-end-final-project/data";
import { useProducts, useProductsDispatcher } from "../Context/CartProvider";
import { checkInCart } from "../Utils/checkInCart";
import { toast } from "react-toastify";
const HomePage = () => {
  const { cart } = useProducts();
  const dispatch = useProductsDispatcher();
  const addProductHandler = (product) => {
    toast.success(`${product.name} added to Cart`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <main className="container">
      <section className="productList">
        {products.map((product) => (
          <section className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-description">
              <p>{product.name}</p>
              <p>$ {product.price}</p>
              <button
                className="btn primary"
                onClick={() => addProductHandler(product)}
              >
                {checkInCart(cart, product) ? "In Cart" : "Add to Cart"}
              </button>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
