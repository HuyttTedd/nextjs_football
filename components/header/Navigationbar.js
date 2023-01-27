import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigationbar() {
    return (
        <>
          {[false, 'xl'].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Brand className='ms-5' href="#">Navbar</Navbar.Brand>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="pe-5 ps-5 ms-5">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                      <Nav.Link className='' id={`test-expand-${expand}`}>Link2</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav className='ms-auto d-none d-xl-block'>
                      <div className='me-5'>
                        <Button className='btn-outline-primary btn-light rounded-pill me-3'>Log In</Button>
                        <Button className='rounded-pill'>Sign Up</Button>
                      </div>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              </Container>
            </Navbar>
          ))}
        </>
      );
}

export default Navigationbar