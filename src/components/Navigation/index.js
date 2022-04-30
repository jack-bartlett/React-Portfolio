import React from 'react';
import { NavLink, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import './style.css';


function Navigation() {

  return (

  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">JACK BARTLETT</Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    <Navbar id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/coding">Coding</Nav.Link>
        <Nav.Link href="/music">Music</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar>
  </Container>
  </Navbar>

  )

};
//

export default Navigation;


// const Navigation = () => {
//     return (
//         <Navbar bg="primary" variant="dark">
//         <Container>
//         <Navbar.Brand href="/">Jack Bartlett</Navbar.Brand>
//         <Nav className="me-auto">
//           <Link className="navlinx" to="/home">Home</Link>
//           <Link className="navlinx" to="/coding">Coding</Link>
//           <Link className="navlinx" to="/music">Music</Link>
//           <Link className="navlinx" to="/resume">Resume</Link>
//           <Link className="navlinx" to="/contact">Contact</Link>
//         </Nav>
//         </Container>
//       </Navbar>



//     );
// }

// export default Navigation;

