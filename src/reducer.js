const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item,
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount > 0 ? item.amount - 1 : 0 }
            : item,
        ),
      };

    case "GET_TOTALS":
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          cartTotal.total += cartItem.amount * cartItem.price;
          cartTotal.amount += cartItem.amount;
          return cartTotal;
        },
        { total: 0, amount: 0 },
      );
      return { ...state, total, amount };

    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAYING_ITEMS":
      return { ...state, cart: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
