import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
const Home = () => {
  const categoryTopic = useLoaderData();
  console.log(categoryTopic);
  return (
    <div className="text-center">
      <h1 className="mb-5">Web Development</h1>
      {categoryTopic.map((topics) => (
        <HomeCard key={topics.allTopics_id} topics={topics}></HomeCard>
      ))}
    </div>
  );
};

export default Home;
