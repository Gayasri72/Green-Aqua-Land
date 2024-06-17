import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
          <img src="" alt="" />
          Green Aqua Land</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/aqua plants">Aqua Plants</Nav.Link>
              <Nav.Link href="/accessories">Accessories</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact us">Contact Us</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> My Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser /> Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
