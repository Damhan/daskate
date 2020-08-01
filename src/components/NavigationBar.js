import React from 'react';
import './../App.css';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function NavigationBar() {
  return (

      <Navbar collapseOnSelect expand="lg" className="stroke nav-main">
        <Link to="/">
            <Navbar.Brand className="navbar-brand hvr-grow">DaSkate</Navbar.Brand>
        </Link>
        <ul class="navbar-nav ml-auto">
            <Link to='/'>
                <li className="navbar-text navlinks">Home</li>
            </Link>
        </ul>

        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
        <ul class="navbar-nav ml-auto">
                <Link to='/'>
                    <li className="navbar-text navlinks">Shop</li>
                </Link>
                <Link to="/">
                    <li class="navbar-text navlinks" >Currency</li>
                </Link>
                
                <Link to="/">
                    <li class="navbar-text navlinks" >Search</li>
                </Link>
                
                <Link to="/">
                    <li class="navbar-text navlinks" >Cart</li>
                </Link>
            </ul>
        </Navbar.Collapse>
      </Navbar>

  );
}

export default NavigationBar;