import { createSlice } from '@reduxjs/toolkit';

let defaultState = {
  selectedItems: { items: [], restaurantName: '' },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addToCart: (state, action) => {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log('ADD TO CART');

        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload.items],
          restaurantName: action.payload.restaurantName,
        };
        console.log(newState);
      } else {
        console.log('REMOVE FROM CART');
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      return newState;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
