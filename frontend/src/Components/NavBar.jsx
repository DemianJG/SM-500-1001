
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../css/NavBar.css';


const NavBar = () => { // 
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
      Usuario
    </span>

  return ( //
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="home" >
          Maguey 500
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className={activeLink === 'inicio' ? 'active-navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('inicio')}>Inicio</Nav.Link>
            <Nav.Link href="#noti" className={activeLink === 'noti' ? 'active-navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('noti')}>Notificaciones</Nav.Link>
            <Nav.Link href="#esta" className={activeLink === 'esta' ? 'active-navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('esta')}>Estadísticas</Nav.Link>
          </Nav>
          <NavDropdown title={title} className="Dropdown align-items-center" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#administrarP">
              Administrar perfil
            </NavDropdown.Item>
            <NavDropdown.Item href="#cerrarsesion">
              Cerrar sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
} //

export default NavBar;

// 