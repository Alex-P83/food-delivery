const initialState = {
  cardList: [],
};

export const shopsReducer = (state = initialState, action) => {
  switch (action.type){
    case 'ADD_TO_CART':
      return {...state, cardList: [...state.cardList, action.payload]}
    case 'CLEAN_CART':
      return {...state,cardList: []}  
    default:
      return state
  }
}