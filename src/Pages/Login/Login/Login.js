import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Header from "../../Shared/Header/Header";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signIn, providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.error(error);
      });
  };

  const handleGoogleSign = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSign = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Header></Header>
      <div className="w-50 mx-auto text-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              autoComplete="current-password webauthn"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Text>
            <small>
              New to this website? Please <Link to="/register">Register</Link>{" "}
            </small>
          </Form.Text>
          <br></br>
          <Form.Text>
            <small className="text-danger">{errorMessage}</small>
          </Form.Text>
          <br></br>
          <Button className="my-2" variant="primary" type="submit">
            Login
          </Button>
          <br></br>
          <Button onClick={handleGoogleSign} variant="outline-primary">
            <FaGoogle></FaGoogle> Google SignIn
          </Button>
          <Button onClick={handleGithubSign} variant="outline-dark">
            <FaGithub></FaGithub> Github SignIn
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
