import React from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import SideNavigation from "../Pages/Shared/SideNavigation/SideNavigation";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="main-custom-design">
        <Row>
          <Col lg="3">
            <SideNavigation> </SideNavigation>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
