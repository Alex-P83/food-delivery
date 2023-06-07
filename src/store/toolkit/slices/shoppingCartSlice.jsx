import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardList: [],
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cardList.push(action.payload);
    },
  },
});

export const { addToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
