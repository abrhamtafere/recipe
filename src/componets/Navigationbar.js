import { useState, useEffect } from 'react';
import {Navbar, Nav, Container, NavDropdown, Button, } from 'react-bootstrap';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Navigationbar = () => {

  const [navbar, setNavbar] = useState(false);
  // navbar scroll changeBackground
  const changeBackground = () => {
    //console.log(window.scrollY);
    if(window.scrollY >= 33){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    // changeBackground();
    console.log(navbar + ' from effect')
    window.addEventListener('scroll', changeBackground);
  }, [navbar]);
  console.log(navbar)
  return (
    <Navbar collapseOnSelect expand="lg" className={navbar ? "container-fluid active" : " container-fluid"}    variant="dark">
      <div className="container-fluid" >
        <Navbar.Brand href="#home" className='mb-sm-2'>
          <FontAwesomeIcon icon={faUtensils} style={{color: '#FEA116', marginRight: '10px'}}/>
          Restorant</Navbar.Brand>
        <Navbar.Toggle  className='mb-sm-2' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/service">service</Nav.Link>
            <Nav.Link href="/menu">menu</Nav.Link>
            <NavDropdown title="PAGES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Testimonial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">contact</Nav.Link>
            <Button href="#booktable" className='ps-2 ms-lg-2 '>BOOK A TABLE</Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigationbar;