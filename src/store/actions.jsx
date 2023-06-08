export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

export const cleanCart = (payload) => ({
  type: 'CLEAN_CART',
  payload,
});