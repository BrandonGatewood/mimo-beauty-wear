import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.navbar}>
        <Container className={styles.navbarContainer}>
          <Navbar.Brand as={NavLink} to="/">YourBrand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id={styles.align}>
              <Nav.Link as={NavLink} to="/" className={styles.navLink}>
                Home
              </Nav.Link>
              <NavDropdown
                title='Services'
                menuVariant='light'
              >
                <Nav.Link as={NavLink} to="/cosmeticTattoos" className={styles.navLink}>
                  Costmetic Tattoos 
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink} to="/eyelashExtensions" className={styles.navLink}>
                  Eyelash Extensions 
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink} to="/intensePulsedLight" className={styles.navLink}>
                  Intense Pulsed Light 
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink} to="/otherServices" className={styles.navLink}>
                  Other Services
                </Nav.Link>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/faq" className={styles.navLink}>
                Faq 
              </Nav.Link>
              <Nav.Link as={NavLink} to="/bookNow" className={styles.navLink}>
                Book Now 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;