import { useContext, useReducer, createContext } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [products, dispatcher] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={products}>
      <CartContextDispatcher.Provider value={dispatcher}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useProducts = () => useContext(CartContext);
export const useProductsDispatcher = () => useContext(CartContextDispatcher);
