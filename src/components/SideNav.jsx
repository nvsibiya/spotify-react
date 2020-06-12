import React from 'react'
import { Navbar, Nav, Image, Button, FormControl, Form } from 'react-bootstrap'
// import { withRouter } from "react-router";
import '../App.css';


const SideNav = () => {
  return (
    <Navbar expand='md' className="navbar navbar-dark fixed-top vertical-navbar flex-column" bg="dark">
    <Navbar.Brand href="#home" className='my-3'>
        <Image src="/assets/spotify-logo.png" alt="Spotify logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="navbarNavAltMarkup" className='w-100 h-100 align-items-start'>
        <div className="navbar-nav d-flex flex-column h-100 w-100 justify-content-between">
            <div>
                <Nav.Link className="nav-item nav-link align-items-center" href="#"><i className="fas fa-home"></i>Home <span className="sr-only">(current)</span></Nav.Link>
                <Nav.Link className="nav-item nav-link align-items-center" href="#"><i className="fas fa-search"></i>Features</Nav.Link>
                <Nav.Link className="nav-item nav-link align-items-center" href="#"><i className="fas fa-book-open"></i>Pricing</Nav.Link>
            </div>
            <div>
                <Nav.Link className="nav-item nav-link align-items-center" href="https://play.google.com/store/apps/details?id=com.spotify.music"><i className="far fa-arrow-alt-circle-down"></i>Install App</Nav.Link>
                <hr className="d-flex flex-wrap" />
                <Nav.Link className="nav-item nav-link align-items-center" href="#"><i className="fas fa-user"></i>User Name</Nav.Link>
            </div>
        </div>
    </Navbar.Collapse>
</Navbar>
    
    
  
    );
  }
  // const SideNav = withRouter(Side);
export default SideNav