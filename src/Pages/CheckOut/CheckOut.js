import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const topics = useLoaderData();
  return (
    <div>
      <h2>This is Check out: {topics.title}</h2>
    </div>
  );
};

export default CheckOut;
