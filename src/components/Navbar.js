import React, { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Container, 
} from 'reactstrap'


function Header({ user, loading }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (

      <header>
      <Navbar color="primary" expand="sm">
        <Container>
        <NavbarBrand><img src="https://i.ibb.co/TRTs2Nc/logo.png" alt="logo" border="0" width={125}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/"> <img src="https://i.ibb.co/z6wxv1K/high-school.png" alt="about" border="0" width={30}></img>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                <a>About</a>
              </NavLink>
            </NavItem>
            {!loading &&
              (user ? (
                <>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    <img src="https://i.ibb.co/xqvggv1/settings.png" alt="settings" border="0" width={30}></img>
                    </DropdownToggle>
                    <DropdownMenu left="true">
                    <DropdownItem>
                        <NavLink href="/announcements">
                          <a className="nav-link"> <img src="https://i.ibb.co/YZrZWVN/loudspeaker.png" alt="loudspeaker" border="0" width={30}></img> Announcements </a>
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                      <NavLink href="/lessons">
                        <a className="nav-link"><img src="https://i.ibb.co/9vLXnY3/homework.png" alt="homework" border="0" width={30}></img> Lessoons </a></NavLink>
                      </DropdownItem>
                      <DropdownItem>
                      <NavLink href="/quizzes">
                        <a className="nav-link"><img src="https://i.ibb.co/Tv1hk0c/test.png" alt="test" border="0" width={30}></img>
                        Quizzes</a></NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink href="/grades">
                          <a className="nav-link"><img src="https://i.ibb.co/y6z6tZj/grades.png" alt="grades" border="0" width={30}></img> Grades </a>
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink href="/profile">
                      <img src="https://i.ibb.co/XFBjpwg/account.png" alt="account" border="0" width={30}></img>
                          <a>Profile</a>
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink href="/logout">
                          <img src="https://i.ibb.co/gMgDZSH/logout.png" alt="logout" border="0" width={30}></img>
                          <a>Logout</a>
                        </NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              ) : (
                  <NavItem>
                    <NavLink href="/login"><a>Login</a>
                    </NavLink>
                  </NavItem>
                ))}
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
 
    
    </header>

  )
}
export default Header