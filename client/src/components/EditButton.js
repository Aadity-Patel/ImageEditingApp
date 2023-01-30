import React from "react";
import Button from "@mui/material/Button";

const EditButton = ({ buttonText, onClick }) => {
  return (
    <div className="">
      <Button variant="contained" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default EditButton;
