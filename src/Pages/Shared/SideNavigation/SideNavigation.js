import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("https://easy-learning-server-plartform.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4> ALL Topics {categories.length}</h4>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default SideNavigation;
