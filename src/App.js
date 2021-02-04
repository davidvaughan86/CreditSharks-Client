import logo from './logo.svg';
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


function App() {
  return (
    <Router>
      <div className="App">

        <Header />
          <Switch>
            <Route path ='/' exact>
              <HeroPage />                
                  
            </Route>
            






          </Switch>
          
        
      </div>
    </Router>
  );
}

export default App;