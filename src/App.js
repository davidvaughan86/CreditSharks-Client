
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } 
 from 'react-router-dom'
import './config'
import './Components/Component CSS/LeadCapture.css';
import './Components/Component CSS/About.css'
import './Components/Component CSS/MyCart.css'
import './Components/Component CSS/About.css'
import './Components/Component CSS/MyCart.css'
import './Components/Component CSS/SocialMedia.css'
import './Components/Component CSS/SlideMenu.css'
import './Components/Component CSS/ProductSlide.css'
import './Components/Component CSS/HeroPage.css'
import './Components/Component CSS/Login.css'
import './Components/Component CSS/CheckoutForm.css'
import './Components/Component CSS/Members.css'       
import './Components/Component CSS/Registration.css'
import './Components/Component CSS/PersonalInfo.css'
import './App.css';
import MembersOnly from './Components/Members'
import Header from './Components/Header'
import HeroPage from './Components/HeroPage';
import LeadCapture from './Components/LeadCapture';
import ProductSlide from './Components/ProductSlide';
import {Packages} from './Components/Packages';
import {FaChevronCircleLeft} from 'react-icons/fa';
import {FaChevronCircleRight} from 'react-icons/fa';
import {Component, useState} from 'react';
import Slide from '@material-ui/core/Slide'
import MyCart from './Components/MyCart'
import ContactUs from './Components/ContactUs'
import About from './Components/About'
import Scheduler from './Components/Scheduler'
import SocialMedia from './Components/SocialMedia'
import StripeContainer from './Components/Stripe/StripeContainer'
import LoginFormTest from './Components/LoginFormTest'
import LoginForm from './Components/LoginFormTest'
import inputField from './Components/SubmitButton'


function Arrow(props) {
  const { direction, clickFunction} = props;
  const icon = direction === 'left' ? 
  <button className="left" style={{textDecoration:'none'}}>L</button> : <button className="right" style={{textDecoration:'none'}}>R</button>
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
    <Header />
    <br/>
  <div className="creditShark">
  
  <Switch>
      
    <Route path='/about' >
      <About />
    </Route>
    <Route path='/login'>
      <LoginFormTest />
    </Route>
    <Route path="/members">
    <MembersOnly />
    </Route>
      
      <Route path='/scheduler' >
        <Scheduler />
      </Route>

    <Route path ='/' exact>
      <HeroPage />              
    </Route>

    <Route path="/reviews">
    
    </Route>
      
    <Route path='/contactus'>
      <ContactUs  />
    </Route>
    <Route path='/socialmedia' exact>
      <SocialMedia />
    </Route>

    <Route path = '/leadcapture' exact>
      <LeadCapture  />
    </Route>
      
    <Route path = '/products' >
      <Slide in={slideIn} direction={slideDirection}>
        <div>             
          <ProductSlide content ={content}
                        addToCart={addToCart}/>
        </div>
      </Slide>
      
      
        <div className="grid-arrows">
          <div className="arrowL">
          <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}/>
          </div> 
          <div className="arrowR">
          <Arrow 
                direction='right'
                clickFunction={() => onArrowClick('right')
                }/>
          </div>   
          
        </div>      
    </Route>
    
    <Route path='/myCart'>
        <MyCart cart={cart} />
    </Route> 
    <Route path="/checkout">
    <StripeContainer cart={cart}/>
    </Route>

  </Switch>
  </div>
  </Router>
  )
  
  
}

export default App;
