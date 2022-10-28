import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div>
      <Header></Header>
      <div className="custom-height">
        <h2> This is Get started</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GetStarted;
