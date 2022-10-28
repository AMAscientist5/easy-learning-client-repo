import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaStar, FaUserTie } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const HomeCard = ({ topics }) => {
  return (
    <div>
      <Card className="mb-5 w-50 mx-auto">
        <Card.Header>
          <h2>{topics.title}</h2>
        </Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={topics.image_url} />
          <Card.Text className="p-3">
            {/* <p>{topics.details}</p> */}
            <Link to={`/topic/${topics._id}`}>
              <Button variant="outline-primary" className=" rounded fw-bolder">
                Details
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between justify-items-center ">
          <div className="d-flex justify-items-center">
            <span>Total Enrolled: {topics.total_enrolled}</span>
            <FaUserTie className="ms-2 mt-1"></FaUserTie>
          </div>
          <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span>{topics?.rating?.number}</span>
          </div>
          <div>
            <p>
              <small> Started: {topics.author.published_date}</small>
            </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default HomeCard;
