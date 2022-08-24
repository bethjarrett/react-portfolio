import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "./img/beejar.svg"

class Navigation extends React.Component {
render() {
  return(
<Navbar collapseOnSelect expand="lg" className="fixed-top navbar">
  <Container>
    <Navbar.Brand href="#home" className="brand"><img src={logo} alt="Logo: a bee in a jar" className="navbar-logo"/>&nbsp;Beth Jarrett</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#about" className="navlink">About</Nav.Link>
            <Nav.Link href="#skills" className="navlink">Skills</Nav.Link>
            <Nav.Link href="#portfolio" className="navlink">Portfolio</Nav.Link>
            <Nav.Link href="#contact" className="navlink">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
  </Container>
</Navbar>
    );
  }
}
export default Navigation;