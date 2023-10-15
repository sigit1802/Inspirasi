import { Navbar, Container, Nav, Button } from "react-bootstrap"


const Navbarcomponents = () => {
  return (
    <div>
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>S.</Navbar.Brand>
        <Nav>
          <Nav.Link>PeKerjaan</Nav.Link>
          <Nav.Link>Seniman</Nav.Link>
          <Nav.Link>Asset</Nav.Link>
          <Nav.Link>Inspirasi</Nav.Link>
        </Nav>
        <div>
          <Button>Masuk</Button>
          <Button>Daftar Akun</Button>
        </div>
      </Container>
    </Navbar>
    </div>
  )
  
}

export default Navbarcomponents