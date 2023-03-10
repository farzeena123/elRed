import React from 'react';
import './Header.css';
import { Container,Nav, Navbar ,Image, Button} from 'react-bootstrap';
import {Cart3,ChevronDown,Search} from 'react-bootstrap-icons'
import LOGO from '../assets/LOGO.jpg';


function Header() {
  return (
    <div>
        <Navbar bg="white" expand="lg">
      <Container fluid>
        <Image className='logo' src={LOGO}></Image>
        <h6>A.T .Inks</h6>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <div class="form">
                  <Search className='search'/>
                  <input type="text"  placeholder='Search...' className="form-control form-input" />
   
            </div>
         </Nav>
          
           <Button  className='me-5  bg-dark '><Cart3/>checkout(200)</Button>
            <Image className='logoimage' src='https://i.pinimg.com/originals/7a/38/12/7a3812bd1e47a7a2caa014255798fab0.png'  roundedCircle/>
            <Nav.Link>User Admin <ChevronDown/> </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header