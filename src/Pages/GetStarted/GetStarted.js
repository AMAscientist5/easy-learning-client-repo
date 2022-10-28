import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./GetStarted.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import author from "../../Assets/author.jpg";
const GetStarted = () => {
  return (
    <div>
      <Header></Header>

      <Container className="w-75 getstarted">
        <Row className="">
          <Col lg="3" className="side-bar-getstarted text-center">
            <h3 className="m-3 my-5 text-secondary">Ahmad Musa</h3>
            <img className="rounded-circle" src={author} alt="" />

            <div className="d-flex justify-content-around align-items-center my-5">
              <div className="">
                <h4 className="text-white">About us</h4>
                <div className="text-secondary">
                  <p className="mb-0">Easy Learning</p>
                  <p className="mb-0">Flexible time&Cost</p>
                  <p className="mb-0">Quality Teaching method</p>
                  <p className="mb-0">Long time support</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="9" className="main-part-getstarted p-5">
            <h1>For beginners #</h1>
            <br />
            <p>
              Explore our structured learning paths to discover everything you
              need to know about building for the modern web.
            </p>
            <p>
              Start learning for Web App Development today! Aradun is the best
              the website to compare any other Website And App Development
              learning plartform. Search and save now! Cheap Prices. The Best
              Price. Full Offer. Save Online. Large Selection. Simple Search.
              Compare Online. Always Sale. Compare Simply. Services: Find your
              chance, Lots of offers, Compare online.
            </p>
            <br />
            <p>
              Go from no-code to an in-demand junior web developer, at a
              fraction of the cost of a bootcamp. Start with the front-end by
              learning HTML, CSS, and JavaScript. Then, master the back-end and
              APIs to round out your full-stack skills.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="m-5"></div>

      <Footer></Footer>
    </div>
  );
};

export default GetStarted;
