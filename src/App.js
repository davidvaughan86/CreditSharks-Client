
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
import './HeroPage.css'
import HeroPage from './Components/HeroPage';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import LeadCapture from './Components/LeadCapture';
import './LeadCapture.css'
import ProductSlide from './Components/ProductSlide'
import {Packages} from './Components/Packages'
import {FaChevronLeft} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'
import {useState} from 'react'



function Arrow(props) {
  const { direction, clickFunction} = props;
  const icon = direction === 'left' ? 
  <FaChevronLeft /> : <FaChevronRight />
  return <div onClick={clickFunction}>{icon}</div>
}


function App() {
  // const content = Packages[index];

  
  
  const [index, setIndex] = useState(0); // useState will hold on to which card we are displaying in products
  const content = Packages[index]
  const numSlides = Packages.length

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex)
    // numSlides is added to the sum of the index and incremenet and moded by numSlides to stay in bounds of the index
  }

  
  return (
    <Router>
      <div className="App">

        <Header />

          <Switch>

            <Route path ='/' exact>
              <HeroPage />              
            </Route>

            <Route path = '/leadcapture'>
            <LeadCapture />
            </Route>

            <Route path = '/products' >
              <Arrow
              direction='left'
              clickFunction={() => onArrowClick('left')}
              />
              <ProductSlide content ={content} />
              <Arrow
              direction='right'
              clickFunction={() => onArrowClick('right')}
              />
            </Route>






          </Switch>
          
        
      </div>
    </Router>
  );
}

export default App;
