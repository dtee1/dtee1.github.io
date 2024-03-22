import React from 'react';
import article1 from "../assets/portfolio/article1.png";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Docker from "../assets/docker.png";
import Flask from "../assets/flask.png";
import Python from "../assets/python.png";
import Vuejs from "../assets/vuejs.png";
import Pytorch from "../assets/pytorch.png";
import Tensorflow from "../assets/tensorflow.png";

import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



import Slider from 'react-slick';
import './Home.css';

const Home = () => {
  const isMobile = useSelector(state => state.isMobile);
  const numSlides = useSelector(state => state.numSlides);

  
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    speed: 1200,
    arrows:true,
    prevArrow: <FaChevronLeft className="slick-prev" />, 
    nextArrow: <FaChevronRight className="slick-next" />,
    
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:  numSlides,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
   
  };
  const portfolios = [
    {
      id: 1,
      src: article1,
      title: 'Demystifying Machine Learning: A Hands-On Guide to Manual Model Implementation',
      style: 'orange'
  },
  {
    id: 2,
    src: article1,
    title: 'Demystifying Machine Learning: A Hands-On Guide to Manual Model Implementation',
    style: 'orange'
},

    
];
const currentReads = [
  {
    id: 1,
    src: article1,
    title: 'Demystifying Machine Learning: A Hands-On Guide to Manual Model Implementation',
    style: 'orange'
},
{
  id: 2,
  src: article1,
  title: 'Demystifying Machine Learning: A Hands-On Guide to Manual Model Implementation',
  style: 'orange'
},

  
];


    
  const skills = [
      {
          id: 1,
          src: Html,
          title: 'HTML',
          style: 'orange'
      },
      {
          id: 2,
          src: Css,
          title: 'CSS',
          style: 'blue'
      },
      {
          id: 3,
          src: Javascript,
          title: 'Javascript',
          style: 'yellow'
      },
      {
          id: 4,
          src: Docker,
          title: 'Docker',
          style: 'blue'
      },
      {
          id: 5,
          src: Flask,
          title: 'Flask',
          style: 'black'
      },
      {
        id: 6,
        src: Python,
        title: 'Python',
        style: 'blue'
    },
    {
      id: 7,
      src: Vuejs,
      title: 'VueJs',
      style: 'green'
  },
    {
      id: 8,
      src: Pytorch,
      title: 'PyTorch',
      style: 'red'
  },
  {
    id: 9,
    src: Tensorflow,
    title: 'Tensorflow',
    style: 'orangr'
},
  ];
  const handleClick = (link) => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="hero" >
          <div className="hero-column">
          <h2 className="hero-title">AI Engineer <FaUserTie /></h2>
          <p className="hero-description">
            Interested in the application of artificial intelligence to solve real world problems
          </p>
          <div className="portfolio-link">
            <Link to="portfolio" smooth duration={500} className="portfolio-link-btn">
              Portfolio 
              <span className="portfolio-arrow">
                <BsArrowRight size={25} className="arrow-icon"/>
              </span>
            </Link>
          </div>
          <div className="skills"> <div className="skill-grid">
            <Slider {...settings2}>
                {skills.map(({id, src, title, style}) => (
                    <div 
                        className={`skill-item ${style}`}
                        key={id}
                    >
                        <img src={src} alt="" className="skill-image"/>
                        <p className="skill-title">{title}</p>
                    </div>
                ))}
                </Slider>
            </div>
            
          </div>
          </div>
          
        </div>
    
        <div className="articles-column">
          <div className="articles-row">
            <h2 className="hero-title">Publications <FaPen/></h2>
            <div className="publications">
              <Slider {...settings}>
              {portfolios.map(({ id, src, title }) => (
                <div key={id} className="publication-item">
                  <button className="publication-link" onClick={() => handleClick("https://medium.com/@davidtalson/demystifying-machine-learning-a-hands-on-guide-to-manual-model-implementation-292827aead67")}>   <img src={src} alt="" className="publication-image"/>
                  <div className="publication-title">
                  <p >{title}</p><FaExternalLinkAlt className="link-icon" />
                    </div></button>
               
                </div>
              ))}
              </Slider>
            </div>
          </div>
          
          <div className="articles-row">
            <h2 className="hero-title">Current Reads <FaBookOpen /></h2>
            <div className="articles">
                <Slider {...settings}>
                {currentReads.map(({ id, src, title }) => (
                <div key={id} className="publication-item">
                  <button className="publication-link" onClick={() => handleClick("https://medium.com/@davidtalson/demystifying-machine-learning-a-hands-on-guide-to-manual-model-implementation-292827aead67")}>   <img src={src} alt="" className="publication-image"/>
                  <div className="publication-title">
                  <p >{title}</p><FaExternalLinkAlt className="link-icon" />
                    </div></button>
               
                </div>
              ))}
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                </Slider>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;