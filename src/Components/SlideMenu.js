
import React from 'react'
import {stack as Menu } from 'react-burger-menu'
import { withRouter } from 'react-router-dom';

class SlideMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    const { history } = this.props;
    return (
      <Menu isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)}width='100%'>
        <a id="home"  className="menu-item" onClick={(e) => { 
          history.push('/') 
        }}>Home</a>
        <br/>
        <a id="products" onClick={() => this.closeMenu()} className="menu-item" onClick={(e) => {
          history.push('/products')}}>Products</a>
        <br/>
        <a id="socialMedia" onClick={() => this.closeMenu()}className="menu-item" onClick={(e) => { 
          history.push('/socialmedia')}}>Social Media</a>
          <br/>
        <a id="contactus" onClick={() => this.closeMenu()}className="menu-item" onClick={(e) => { 
          history.push('/contactus')}}>Contact Us</a>
          <br/>
        <a id="about" onClick={() => this.closeMenu()}className="menu-item" onClick={(e) => { 
          history.push('/about')}}>About Us</a>
        
      </Menu>
      
    );
  }
}
export default withRouter(SlideMenu)
