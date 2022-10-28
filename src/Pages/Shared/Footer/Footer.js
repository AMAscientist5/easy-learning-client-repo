import React from "react";
import {
  FaGoogle,
  FaFacebookSquare,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <footer>
          <div className="bg-black text-center p-5">
            <h2 className="text-white">Aradun</h2>
            <div className="foter-responsive text-center d-md-flex d-sm-flex justify-content-sm-center align-items-sm-center justify-content-md-around justify-content-lg-around">
              <div className="">
                <h4 className="text-white">About us</h4>
                <div className="text-secondary">
                  <p className="mb-0">Easy Learning</p>
                  <p className="mb-0">Flexible time&Cost</p>
                  <p className="mb-0">Quality Teaching method</p>
                  <p className="mb-0">Long time support</p>
                </div>
              </div>
              <div className="">
                <div>
                  <h4 className="text-white">Contact us</h4>
                </div>
                <p className="mb-0 text-secondary">
                  Email: ahmadmusa9805@gmail.com <br /> Phone: 01496858450
                </p>
                <div>
                  <button className="text-primary">
                    <FaFacebookSquare></FaFacebookSquare>
                  </button>
                  <button className="text-warning">
                    <FaGoogle></FaGoogle>
                  </button>
                  <button className="text-success">
                    <FaWhatsapp></FaWhatsapp>
                  </button>
                  <button className="text-primary">
                    <FaTwitter></FaTwitter>
                  </button>
                  <button>
                    <FaTwitch></FaTwitch>
                  </button>
                </div>
              </div>
              <div className="">
                <h4 className="text-white">Address:</h4>
                <div>
                  <p className="text-secondary mb-0">
                    House - Old 56, Lake Circus, <br />
                    (1st Floor), Panthapath, Dhaka <br />
                    (Near Square Hospital)
                  </p>

                  <p className="text-secondary ">
                    Privacy Ploicy | Terms & Condition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
