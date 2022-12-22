import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../Assets/logo.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/getstarted">
            <Image
              className="me-2 d-flex"
              src={Logo}
              style={{ height: "50px" }}
            ></Image>
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link
            className="fs-3 text-decoration-none logo-name"
            to="/getstarted"
          >
            Aradun
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="navigation m-0 align-items-center"
        >
          <Nav className="me-auto ms-3 align-items-center">
            {" "}
            <Nav.Link>
              <Link
                className="text-decoration-none get-started"
                to="/getstarted"
              >
                Get Started
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              {" "}
              <Link className="text-decoration-none all-courses" to="/">
                All Courses
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              {" "}
              <Link className="text-decoration-none blog" to="/blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              {" "}
              <Link className="text-decoration-none faq" to="/faq">
                FAQ
              </Link>
            </Nav.Link>
            {toggle ? (
              <Nav.Link href="#pricing">
                {" "}
                <button
                  className="border-0 dark"
                  onClick={() => setToggle(!toggle)}
                >
                  Dark
                </button>
              </Nav.Link>
            ) : (
              <Nav.Link href="#pricing">
                <button
                  className="border-0 light"
                  onClick={() => setToggle(!toggle)}
                >
                  Light
                </button>
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user?.uid ? (
                <div className="text-center">
                  <Button
                    className="logOut  log-btn-style "
                    id="text-bold"
                    variant="light"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Button>
                  <img
                    title={user?.displayName}
                    className="user-img"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              ) : (
                <div className="d-flex flex-sm-column flex-md-column flex-lg-row justify-content-center align-items-center">
                  <Link className="login" to="/login">
                    Login
                  </Link>
                  <Link className="register" to="/register">
                    Register
                  </Link>
                </div>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
