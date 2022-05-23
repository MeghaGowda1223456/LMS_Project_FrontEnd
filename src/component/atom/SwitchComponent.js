import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import styled from "@mui/material/styles/styled";

const CustomeSwitch = styled(Switch)(() => ({
  padding: 8,
  height: 35,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before,&:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 13,
    height: 13,
    margin: 2,
    backGround: "white",
  },
  "& .MuiSwitch-switchBase": {
    bgcolor: "white",
  },
}));

const SwitchComponent = ({
  value, // key
  checked,
  onChange = (e) => {},
  disabled = false,
}) => {
  return (
    <FormControlLabel
      label=""
      control={
        <CustomeSwitch
          style={{ bgcolor: "white" }}
          value={value}
          checked={checked}
          onChange={(e) => onChange(e)}
          disabled={disabled}
        />
      }
    />
  );
};

export default SwitchComponent;
