
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../css/NavBar.css';
import logo1 from '../media/icon.png';
import user from '../media/user.png';

export const NavBar = () => { // 
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const title =
    <span >
      <img src={user} alt="Usuario" />
    </span>

  return ( //
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Navbar.Brand href="home" >
          <img src={logo1} alt="logo123"/>
        </Navbar.Brand>
            <Nav.Link href="#inicio" className={activeLink === 'inicio' ? 'active-navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('inicio')}>Inicio</Nav.Link>
            <Nav.Link href="#noti" className={activeLink === 'noti' ? 'active-navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('noti')}>Notificaciones</Nav.Link>
            <Nav.Link href="#esta" className={activeLink === 'esta' ? 'active-navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('esta')}>Estadísticas</Nav.Link>
            <NavDropdown title={title} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#administrarP">
                Administrar perfil
              </NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:8000/logout">
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
} //


// 