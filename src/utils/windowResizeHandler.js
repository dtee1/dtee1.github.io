// windowResizeHandler.js
import store from '../store/store';
import { setIsMobile, setNumSlides } from '../actions/actions';

const handleResize = () => {
  const screenWidth = document.documentElement.clientWidth;
  const isMobile = screenWidth < 900;
  let numSlides;

  if (screenWidth < 400) {
    numSlides = 1;
  } else if (screenWidth < 500) {
    numSlides = 2;
  } else if (screenWidth < 900) {
    numSlides = 3;
  } else {
    numSlides = 4;
  }

  // Dispatch actions to update Redux store
  store.dispatch(setIsMobile(isMobile));
  store.dispatch(setNumSlides(numSlides));
};

window.addEventListener('resize', handleResize);
handleResize(); // Call once to initialize