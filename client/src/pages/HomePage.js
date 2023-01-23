import React from "react";
import EditButton from "../components/EditButton";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToImages = () => {
    // 👇️ navigate to /images
    navigate("/images");
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  return (
    <div>
      <EditButton
        buttonText="Click here to download random image and start editing"
        onClick={navigateHome}
      />
      <EditButton buttonText="See all my images" onClick={navigateToImages} />
    </div>
  );
};

export default HomePage;
