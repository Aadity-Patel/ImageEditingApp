import React from "react";
import EditButton from "../components/EditButton";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToImages = () => {
    // 👇️ navigate to /images
    navigate("/images");
  };

  const navigateToDownloadPage = () => {
    // 👇️ navigate to /
    navigate("/random-image");
    window.open("/random-image", "_parent").location.reload();
  };
  return (
    <div className="buttons">
      <EditButton
        buttonText="Click here to download random image and start editing"
        onClick={navigateToDownloadPage}
      />
      <EditButton buttonText="See all my images" onClick={navigateToImages} />
    </div>
  );
};

export default HomePage;
