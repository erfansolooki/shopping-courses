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
      return { ...state, cart: cloneProduct };
    }
    default:
      return state;
  }
};

export default cartReducer;
