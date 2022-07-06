import { useProducts } from "../../Context/CartProvider";
import "./CartPage.css";

const Cart = () => {
  const { cart } = useProducts();
  console.log(cart);

  if (!cart.length)
    return (
      <main className="container">
        <h2>There is no item in your cart</h2>
      </main>
    );

  return (
    <main className="container">
      <section className="cartItemList">
        {cart.map((product) => (
          <div className="cartItem">
            <div className="itemImage">
              <img src={product.image} alt={product.name} />
            </div>
            <div>{product.name}</div>
            <div>$ {product.price * product.quantity}</div>
            <div>
              <button>Add</button>
              <span>{product.quantity}</span>
              <button>remove</button>
            </div>
          </div>
        ))}
      </section>
      <section className="cartSummary">cart summary</section>
    </main>
  );
};

export default Cart;
