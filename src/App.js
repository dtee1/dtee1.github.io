import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
import Background from './assets/background.webp';
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from './store/store';
import { Provider } from 'react-redux';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <Provider store={store}>
       <div className="app-container">
        <NavBar/>
        <Home/>
        <SocialLinks/>
        <Portfolio/>
        <Contact/>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
