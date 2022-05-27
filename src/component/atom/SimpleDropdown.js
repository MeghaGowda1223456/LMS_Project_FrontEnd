import React from "react";
import { Input, AutoComplete } from "antd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SimpleDropdown({ value = {}, options = [], onChange = () => {} }) {
  // const options = [
  //   {
  //     value: "Burns Bay Road",
  //   },
  //   {
  //     value: "Downing Street",
  //   },
  //   {
  //     value: "Wall Street",
  //   },
  // ];
  return (
    <div>
      <AutoComplete
        value={value}
        dropdownStyle={{ opacity: 5, zIndex: 1000000 }}
        suffixIcon={<KeyboardArrowDownIcon />}
        style={{
          width: "100%",
          // zIndex: "10000",
        }}
        options={options}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onChange={onChange}
      />
    </div>
  );
}

export default SimpleDropdown;
