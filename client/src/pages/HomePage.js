import { Button } from "@mui/material";
import React from "react";
import EditButton from "../components/EditButton";

const HomePage = () => {
  return (
    <div>
      <EditButton
        buttonText="Click here to download random image and start editing"
        onClick={() => console.log("Hello")}
      />
      <EditButton
        buttonText="See all my images"
        onClick={() => console.log("Hello")}
      />
      
    </div>
  );
};

export default HomePage;
