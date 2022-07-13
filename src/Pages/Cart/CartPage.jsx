import { useProducts, useProductsDispatcher } from "../../Context/CartProvider";
import { Link } from "react-router-dom";
import "./CartPage.css";

const Cart = () => {
  const { cart, total } = useProducts();
  const dispatch = useProductsDispatcher();

  if (!cart.length) {
    return (
      <main className="container">
        <h2>There is no item in your cart</h2>
      </main>
    );
  }

  const decrementHandler = (product) => {
    dispatch({ type: "DECREMENT", payload: product });
  };

  const incrementHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  return (
    <main className="container">
      <section className="cartCenter">
        <section className="cartItemList">
          {cart.map((product) => (
            <div className="cartItem">
              <div className="itemImage">
                <img src={product.image} alt={product.name} />
              </div>
              <div>{product.name}</div>
              <div>$ {product.offPrice * product.quantity}</div>
              <div className="buttonGroup">
                <button onClick={() => incrementHandler(product)}>Add</button>
                <button>{product.quantity}</button>
                <button onClick={() => decrementHandler(product)}>
                  remove
                </button>
              </div>
            </div>
          ))}
        </section>
        <CartSummary total={total} cart={cart} />
      </section>
    </main>
  );
};

export default Cart;

const CartSummary = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce(
        (prevValue, currentValue) =>
          prevValue + currentValue.quantity * currentValue.price,
        0
      )
    : 0;

  return (
    <section className="cartSummary">
      <h3>Cart Summary :</h3>
      <div className="summaryItem">
        <p>Original Total Price : </p>
        <p>{originalTotalPrice} $</p>
      </div>
      <div
        className="summaryItem"
        style={{ borderBottom: "1px solid #ccc", paddingBottom: "8px" }}
      >
        <p>Total Discount : </p>
        <p>{originalTotalPrice - total}</p>
      </div>
      <div className="summaryItem">
        <p>Net Price : </p>
        <p>{total} $</p>
      </div>
      <Link to="/Login?redirect=checkout">
        <button
          className="btn primary"
          style={{ marginTop: "16px", width: "100%" }}
        >
          Go to checkout
        </button>
      </Link>
    </section>
  );
};
