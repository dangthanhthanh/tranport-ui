import React, { useEffect, useState } from 'react';
import { Nav, Row, Col, Card, Image, Navbar, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";
import ReactLogoPrimary from "../../assets/img/technologies/react-logo-primary.svg";
import ReactLogoTransparent from "../../assets/img/technologies/react-logo-transparent.svg";

/**
 * Demo page for Navbar component usage, with live color theme switching.
 * Tailwind users: Use shadcn/ui or Headless UI Navbar if preferred.
 */
const NavbarThemes = [
  { themeVariant: 'primary', navbarColor: 'dark', brandIcon: ReactLogoTransparent },
  { themeVariant: 'secondary', navbarColor: 'light', brandIcon: ReactLogoPrimary },
  { themeVariant: 'soft', navbarColor: 'light', brandIcon: ReactLogoTransparent }
];

const NavbarChangingColors: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const { themeVariant, navbarColor, brandIcon } = NavbarThemes[themeIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setThemeIndex(themeIndex === NavbarThemes.length - 1 ? 0 : themeIndex + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [themeIndex]);

  return (
    <Navbar variant={navbarColor} expand="lg" className={`navbar-transparent navbar-theme-${themeVariant} my-2`}>
      <Container className="position-relative">
        <Navbar.Brand href="#home" className="me-lg-3">
          <Image src={brandIcon} />
        </Navbar.Brand>
        <Navbar.Collapse id="navbar-default-primary" className="w-100">
          <Nav className="navbar-nav-hover align-items-lg-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="navbar-default-primary" />
      </Container>
    </Navbar>
  );
};

const NavbarsPage: React.FC = () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Navbars</h1>
            <p className="mb-0">
              Use the responsive navigation bar from Volt to add nav items and multi-level nested dropdowns for a seamless navigation.
            </p>
          </Col>
        </Row>

        <Documentation
          title="Navbar"
          description=""
          scope={{ Nav, Card, Navbar, Container, ReactLogo: ReactLogoTransparent, Image }}
          imports={`import { Nav, Card, Navbar, Container } from '@themesberg/react-bootstrap';
import ReactLogo from "src/assets/img/technologies/react-logo-transparent.svg";`}
          example={`<Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary my-2">
  <Container className="position-relative">
    <Navbar.Brand href="#home" className="me-lg-3">
      <Image src={ReactLogo} />
    </Navbar.Brand>
    <Navbar.Collapse id="navbar-default-primary" className="w-100">
      <Nav className="navbar-nav-hover align-items-lg-center">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Toggle aria-controls="navbar-default-primary" />
  </Container>
</Navbar>`}
        />

        <Documentation
          title="Navbar colors"
          description="Automatically cycles through different navbar themes."
          scope={{
            useEffect,
            useState,
            Nav,
            Card,
            Navbar,
            Image,
            Container,
            ReactLogoPrimary,
            ReactLogo: ReactLogoTransparent,
          }}
          imports={`import React, { useEffect, useState } from "react";
import { Nav, Card, Navbar, Container } from '@themesberg/react-bootstrap';
import ReactLogo from "src/assets/img/technologies/react-logo-transparent.svg";
import ReactLogoPrimary from "src/assets/img/technologies/react-logo-primary.svg";`}
          example={`function NavbarChangingColors() {
  // ...see component code above
}
render( <NavbarChangingColors /> );`}
        />
        {/* Live demo below */}
        <NavbarChangingColors />
      </Container>
    </article>
  );
};

export default NavbarsPage;