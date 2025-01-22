import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
    ...theme.applyStyles("dark", {
      color: "#bfbfbf",
      opacity: undefined,
    }),
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default function CustomizedSlider(props) {
  let min = props.min
  let max = props.max
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (ev, newValue) => {
    setValue(newValue);
  };

  const goHandler = (ev) => {
    ev.preventDefault();
    const minPrice = value[0]
    const maxPrice = value[1]
    props.goP({minPrice, maxPrice})
  };

   return (
    <Box sx={{ width: 200 }}>
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Pick price</Typography>
      <div className="mui-slider d-flex">
        <h4>${value[0]}</h4>
        <h4> &nbsp; -- &nbsp;</h4>
        <h4>${value[1]}</h4>
        {value[1] === 200 && <h4>+</h4>}
      </div>

      <form onSubmit={goHandler}>
        <button>Go</button>
      </form>

      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        defaultValue={value}
        onChange={handleChange}
        max={max}
      />
    </Box>
  );
}