const initialState = {
 email: '',
 file: null,
};

const reducer = (state = initialState, action) => {
 switch (action.type) {
   case 'SET_EMAIL':
     return {
       ...state,
       email: action.payload,
     };
   case 'SET_FILE':
     return {
       ...state,
       file: action.payload,
     };
   default:
     return state;
 }
};

export default reducer;