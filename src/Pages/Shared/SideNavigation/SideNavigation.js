import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideNavigation.css";
import author from "../../../Assets/author.jpg";
const SideNavigation = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("https://easy-learning-server-plartform.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="side-navigation">
      <div>
        <img className="side-img" src={author} alt="" />
      </div>
      <h4 className="text-white mt-4"> ALL Topics {categories.length}</h4>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default SideNavigation;
