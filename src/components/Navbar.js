import React from 'react';
import { NavLink, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { menuItem } from './Data';

function Navbarone() {
  function MenuItem({ title, link, submenu, details }) {
    // Simplified Tooltip rendering logic
    const renderTooltip = (props) => (
      <Tooltip {...props}>{details || `Details of ${title}`}</Tooltip>
    );

    if (submenu) {
      return (
        <NavDropdown
          title={title}
          id="basic-nav-dropdown"
          className="text-white"
        >
          {submenu.map((item, index) => (
            <MenuItem
              key={index} // Changed to index since titles can repeat
              title={item.title}
              link={item.link}
              submenu={item.submenu}
              details={item.details}
            />
          ))}
        </NavDropdown>
      );
    } else {
      // Directly include OverlayTrigger here without checking for details
      return (
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip}
        >
          <NavLink href={link}>
            {title}
          </NavLink>
        </OverlayTrigger>
      );
    }
  }
  return (
    <div className="main">
      <Navbar expand="lg" className="bg-danger navbar ">
        <Container>
          <Navbar.Brand href={'/'}>
            <h2 className="text-white me-5">Lizmotors</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {menuItem.map((item) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  submenu={item.submenu}
                />
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarone;
