import React, { useEffect, useState } from "react";
import { Popover, Button } from "antd";
import WarningIcon from "@mui/icons-material/Warning";

const data = (
  <div className="row">
    <p className="col-6">Content</p>
    <p className="col-6">60</p>
  </div>
);

const WarningIcons = ({ content = [] }) => {
  const [state, setState] = useState();

  useEffect(() => {
    const data =
      content.length &&
      content.map((item) => {
        return (
          <div className="row">
            <p className="col-6">{item.label}</p>
            <p className="col-6">{item.value}</p>
          </div>
        );
      });
    console.log(data);
  }, [content]);

  return (
    <Popover placement="bottom" content={data} trigger="hover">
      <Button style={{ border: "none" }}>
        <WarningIcon sx={{ color: "#faa81d" }} />
      </Button>
    </Popover>
  );
};

export default WarningIcons;
