import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

export const RandomImage = ({ label1, label2, label3 }) => {
  const [blur, setBlur] = React.useState(false);
  const [contrast, setContrast] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [height, setHeight] = React.useState("50vh");
  const [width, setWidth] = React.useState("50vh");

  const setValues = (e) => {
    const values = e.target.value;
    const arr = values.split(",");
    setHeight(arr[0]);
    setWidth(arr[1]);
  };
  return (
    <div className="random-image">
      <h5>
        This image is of height {height} and width {width}
      </h5>
      <div
        id="image"
        className={
          blur ? "blur" : contrast ? "contrast" : rotate ? "rotate" : ""
        }
        style={{
          height: `${height}vh`,
          width: `${width}vh`,
        }}
      ></div>
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            label={label1}
            labelPlacement="start"
            onChange={(event) => setBlur(event.target.checked)}
          />
          <FormControlLabel
            control={<Switch />}
            label={label2}
            labelPlacement="start"
            onChange={(event) => setContrast(event.target.checked)}
          />
          <FormControlLabel
            control={<Switch />}
            label={label3}
            labelPlacement="start"
            onChange={(event) => setRotate(event.target.checked)}
          />
        </FormGroup>
        <TextField
          id="outlined-basic"
          label="image dimension"
          variant="outlined"
          placeholder="height,width"
          onChange={setValues}
        />
      </div>
    </div>
  );
};
