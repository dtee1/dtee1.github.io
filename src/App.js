import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";

import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar/>
        <Home/>
        <SocialLinks/>
        <Portfolio/>
        <Contact/>
      </div>
    </Provider>
  );
}

export default App;
