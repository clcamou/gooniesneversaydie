import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function AppNavbar({ user }) {
  const navbarStyle = { marginBottom: "25px" };
  return (
    <Navbar bg="light" expand="lg" style={navbarStyle}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <a>The Learning Curve</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user && (
              <>
                <Link href="/announcements">
                  <a className="nav-link"> Announcements </a>
                </Link>
                <Link href="/lessons">
                  <a className="nav-link"> Lessons </a>
                </Link>
                <Link href="/quizzes">
                  <a className="nav-link"> Quizzes </a>
                </Link>
                <Link href="/profile">
                  <a className="nav-link"> Profile </a>
                </Link>
                <Link href="/about">
                  <a className="nav-link"> About </a>
                </Link>
                <Link href="/logout">
                  <a className="nav-link"> Log Out </a>
                </Link>
              </>
            )}
            {!user && (
              <Link href="/login">
                <a className="nav-link">Log In</a>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}