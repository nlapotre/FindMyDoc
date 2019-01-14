import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown, Button} from 'react-bootstrap';
import API from '../utils/API.js';
import {Image} from 'react-bootstrap';
import logo from '../logo.png';
import '../styles/navBar.css';

class Header extends Component {

  render()  {
    return(
      <Navbar className="navbarUp">
        <a href='/'><Image src={logo} /></a>
      </Navbar>
    )
  }
}

export {Header};
var bool = API.isAuth()? 'true':'false';

class Footer extends Component {
  disconnect = event => {
         API.logout();
         window.location = "/";
     }
  render()  {

    return(
      <Navbar className="navbar" fixedBottom>
      <div>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Button onClick={this.disconnect} type="submit">Se déconnecter</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </div>
      </Navbar>
    )
  }
}

export {Footer};
