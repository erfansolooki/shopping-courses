const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cloneProduct = [...state.cart];
      const findIndex = cloneProduct.findIndex(
        (product) => product.id === action.payload.id
      );

      if (findIndex < 0) {
        cloneProduct.push({ ...action.payload, quantity: 1 });
      } else {
        const selectedItem = { ...cloneProduct[findIndex] };
        selectedItem.quantity++;
        cloneProduct[findIndex] = selectedItem;
      }
      return {
        ...state,
        cart: cloneProduct,
        total: state.total + action.payload.offPrice,
      };
    }
    case "DECREMENT": {
      const cloneProduct = [...state.cart];
      const findIndex = cloneProduct.findIndex(
        (product) => product.id === action.payload.id
      );

      const selectedItem = { ...cloneProduct[findIndex] };

      if (selectedItem.quantity === 1) {
        const filterProducts = cloneProduct.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filterProducts,
          total: state.total - action.payload.offPrice,
        };
      } else {
        selectedItem.quantity--;
        cloneProduct[findIndex] = selectedItem;
        return {
          ...state,
          cart: cloneProduct,
          total: state.total - action.payload.offPrice,
        };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
