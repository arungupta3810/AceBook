import React, { useEffect, useCallback } from "react";
import "./index.css";

const Feed = React.lazy(() => import("../../Components/Feed"));
const Rightbar = React.lazy(() => import("../../Components/Rightbar"));

const Home = () => {
  const randomInt = useCallback((min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }, []);

  useEffect(() => {
    const num = randomInt(1, 5);
    if (num === 5) {
      throw new Error("Some exception occured.");
    }
  }, []);

  return (
    <div className="row acebook-container">
      <Feed />
      <Rightbar />
    </div>
  );
};

export default Home;
