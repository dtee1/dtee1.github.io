// reducers.js
const initialState = {
    isMobile: false,
    numSlides: 4,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_IS_MOBILE':
        return {
          ...state,
          isMobile: action.payload,
        };
      case 'SET_NUM_SLIDES':
        return {
          ...state,
          numSlides: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;