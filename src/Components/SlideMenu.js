import {stack as Menu } from 'react-burger-menu'
import React from 'react'

const SlideMenuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
}
class SlideMenu extends React.Component {
    
  showSettings (event) {
    event.preventDefault();
    
  }
  
  

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu style={{SlideMenuStyles}}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="signIn" className="menu-item" href="/signIn">Sign In</a>
        <a id="products" className="menu-item" href="/products">Products</a>
        <a id="reviews" className="menu-item" href="/reviews">Reviews</a>
        <a id="socialMedia" className="menu-item" href="/socialmedia">Social Media</a>
        <a id="contactus" className="menu-item" href="/contactus">Contact Us</a>
        <a id="about" className="menu-item" href="/about">About Us</a>
        
      </Menu>
    );
  }
}
export default SlideMenu