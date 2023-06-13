import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBook } from "react-icons/fa";



class Header extends Component {
    render() {
        return (
            <Navbar style={{ backgroundColor: '#000000' }} sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" style={{ color: 'white' }}>
                        <FaBook /> Murakami's Wonderland
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" style={{ color: '#ffffff' }}>AUTHOR</Nav.Link>
                            <Nav.Link href="#link" style={{ color: '#ffffff' }}>LIBRARY</Nav.Link>
                            <Nav.Link href="#home" style={{ color: '#ffffff' }}>COMMUNITY</Nav.Link>
                            <Nav.Link href="#link" style={{ color: '#ffffff' }}  >RESOURCES</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
