import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/pages/index");
  }, []);

  return null;
};

export default Home;
