import {stack as Menu } from 'react-burger-menu'
import React from 'react'
import logo from './CSlogo.png'
import { withRouter } from 'react-router-dom';

class SlideMenu extends React.Component {
    
  showSettings (event) {
    event.preventDefault();
    
  }
  
  

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    const { history } = this.props;
    return (
      <Menu width='100%'>
        <a id="home"  className="menu-item" onClick={(e) => { 
          history.push('/')
        }}>Home</a>
        
        <a id="products" className="menu-item" onClick={(e) => {
          history.push('/products')}}>Products</a>
        <a id="reviews" className="menu-item" onClick={(e) => { 
          history.push('/reviews')}}>Reviews</a>
        <a id="socialMedia" className="menu-item" onClick={(e) => { 
          history.push('/socialmedia')}}>Social Media</a>
        <a id="contactus" className="menu-item" onClick={(e) => { 
          history.push('/contactus')}}>Contact Us</a>
        <a id="about" className="menu-item" onClick={(e) => { 
          history.push('/about')}}>About Us</a>
        
      </Menu>
    );
  }
}
export default withRouter(SlideMenu)