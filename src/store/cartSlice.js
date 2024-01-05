import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    add(state, action) {
           const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
               if (itemIndex >= 0) {
            state.cartItems[itemIndex].cartQuantity += 1;
              } else {
                 const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
              }
              state.cartTotalQuantity += 1;
              state.cartTotalAmount += action.payload.price;
            },
    remove(state, action) {
      // Logic to remove an item from the cart
      const itemIdToRemove = action.payload;
      const itemToRemove = state.cartItems.find((item) => item.id === itemIdToRemove);

      if (itemToRemove) {
        state.cartTotalQuantity -= itemToRemove.cartQuantity;
        state.cartTotalAmount -= itemToRemove.price * itemToRemove.cartQuantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemIdToRemove);
      }
    },
    increaseQuantity(state, action) {
               const item = state.cartItems.find(item => item.id === action.payload);
              if (item) {
                 item.cartQuantity += 1;
                state.cartTotalQuantity += 1;
                state.cartTotalAmount += item.price;
              }
             },
    decreaseQuantity(state, action) {
      const itemIdToDecrease = action.payload;
      const itemToDecrease = state.cartItems.find((item) => item.id === itemIdToDecrease);

      if (itemToDecrease && itemToDecrease.cartQuantity > 1) {
        itemToDecrease.cartQuantity -= 1;
        state.cartTotalQuantity -= 1;
        state.cartTotalAmount -= itemToDecrease.price;
      } else if (itemToDecrease && itemToDecrease.cartQuantity === 1) {
        // If cart quantity becomes 0, remove the item from the cart
        state.cartTotalQuantity -= 1;
        state.cartTotalAmount -= itemToDecrease.price;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemIdToDecrease);
      }
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;


