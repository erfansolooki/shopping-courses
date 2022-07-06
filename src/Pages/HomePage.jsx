import { products } from "../back-end-final-project/data";
import { useProductsDispatcher } from "../Context/CartProvider";
const HomePage = () => {
  const dispatch = useProductsDispatcher();
  const addProductHandler = (product) => {
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
                Add to cart
              </button>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
