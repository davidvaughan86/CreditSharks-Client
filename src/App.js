
import './App.css';
// import {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom'
import Header from './Components/Header'
import './Components/Component CSS/ProductSlide.css'
import './Components/Component CSS/HeroPage.css'
import HeroPage from './Components/HeroPage';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import LeadCapture from './Components/LeadCapture';
import './Components/Component CSS/LeadCapture.css';
import ProductSlide from './Components/ProductSlide';
import {Packages} from './Components/Packages';
import {FaChevronCircleLeft} from 'react-icons/fa';
import {FaChevronCircleRight} from 'react-icons/fa';
import {useState} from 'react';
import Slide from '@material-ui/core/Slide'
import MyCart from './Components/MyCart'
import ContactUs from './Components/ContactUs'

function Arrow(props) {
  const { direction, clickFunction} = props;
  const icon = direction === 'left' ? 
  <FaChevronCircleLeft /> : <FaChevronCircleRight />
  return <div onClick={clickFunction}>{icon}</div>
}


function App() {
  // const content = Packages[index];
  const [slideIn, setSlideIn] = useState(true) //changes direction of card exit so it appears to slide across the screen
  const [slideDirection, setSlideDirection]=useState('down') // renders first slide coming down
  const [index, setIndex] = useState(0); // useState will hold on to which card we are displaying in products
  const [lead, setLead] =useState([{}])
  function registerLead(form) {
        setLead([...lead,form])
        
    }
    console.log(lead)
  const [cart, setCart] = useState([{}])
  function addToCart (item) {
    setCart ([item])
    }
  console.log(cart)
  const content = Packages[index]
  const numSlides = Packages.length

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex)
    // numSlides is added to the sum of the index and incremenet and moded by numSlides to stay in bounds of the index
    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false); // see line 37 app.js note.

    setTimeout (() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    },500) // gives trasition effect
  };
  
  return (
    
    <Router>
      <div className="App">

        <Header />

          <Switch>

            <Route path ='/' exact>
              <HeroPage />              
            </Route>

            <Route path = '/leadcapture'>
            <LeadCapture registerLead={registerLead} />
            </Route>

            <Route path = '/products' >
              <Slide in={slideIn} direction={slideDirection}>
                <div>             
                <ProductSlide content ={content} addToCart={addToCart}/>
                </div>
              </Slide>
              <div className="arrows">
              <Arrow
              direction='left'
              clickFunction={() => onArrowClick('left')}
              />

              <Arrow 
              
              direction='right'
              clickFunction={() => onArrowClick('right')}
              />

              
            </div>
            </Route>
            <Route path='/myCart'>
                <MyCart cart={cart} />
              </Route>
              <Route path ='/contactus'>
                <ContactUs />
              </Route>






          </Switch>
          
        
      </div>
    </Router>
  );
}

export default App;
