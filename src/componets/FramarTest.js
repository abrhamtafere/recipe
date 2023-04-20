import { useState, useEffect } from 'react';
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FramarTest = () => {

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
    window.addEventListener('scroll', ()=>{
      console.log('Abrish abrish');
      if(window.scrollY >= 33){
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  }, [navbar]);

  const control = useAnimation();
  const [ref, inView] = useInView();
  
  const boxVariant = {
    visible: { y:0, transition: {duration: 1.5} },
    hidden: { y: 100},
  }

  useEffect(
    () => {
      if(inView){
        control.start('visible');
      } else {
        control.start('hidden');
      }
    }, [control, inView]);

  return (
    <motion.div 
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
    >
    <Navbar collapseOnSelect expand="lg" className={navbar ? "navbar active" : "navbar bg-primary"}    variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='mb-sm-2'>
          <FontAwesomeIcon icon={faUtensils} style={{color: '#FEA116', marginRight: '15px'}}/>
          Restorant</Navbar.Brand>
        <Navbar.Toggle  className='mb-sm-2' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#service">service</Nav.Link>
            <Nav.Link href="#menu">menu</Nav.Link>
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
      </Container>
    </Navbar>
    </motion.div>
  );
}

export default FramarTest;