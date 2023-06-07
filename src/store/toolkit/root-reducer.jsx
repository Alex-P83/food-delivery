import { combineReducers } from '@reduxjs/toolkit';
import shoppingCartSlice from './slices/shoppingCartSlice';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartSlice,
});

