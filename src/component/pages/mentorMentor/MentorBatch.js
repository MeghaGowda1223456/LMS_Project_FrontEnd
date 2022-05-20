import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
// import SearchIcon from "@mui/icons-material/Search";
import ButtonComponent from "../../atom/ButtonComponent";
import { Chip, Toolbar, Typography } from "@mui/material";
import "../../../style/button.scss";
import { Input } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@mui/icons-material";
import TableComponent from "../../molicules/TableComponent";
import BatchModal from "../../forms/BatchModal";
import CONSTANTS from "../../constents/Index";
import {
  batchGetAll,
  batchDelete,
} from "../../../services/utils/batch/BarchServices";
import { messageService } from "../../../services/rxjsServices";
import { mentorBatchGetAll } from "../../../services/mentorBatch/MentorBatchServices";
import WarningIcons from "../../molicules/WarningIcon";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function MentorBatch() {
  const [openBatch, setOpenBatch] = useState(false);
  const [batchData, setBatchData] = useState([]);
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState([]);
  const [deleteData, setDeleteData] = useState("");
  const [previousFormData, setPreviousFormData] = useState([]);
  const [modalValue, setModalValue] = useState("add");
  const [batchId, setBatchId] = useState("");
  const [defaultFormData, setDefaultFormData] = useState({
    name: "",
    mentorName: "",
    technologies: "",
    startDate: "",
    startDateString: "",
    endDate: "",
    endDateString: "",
  });

  useEffect(() => {
    getTableData();
  }, []);

  const hanldeEditClick = (id) => {
    let data;
    batchData &&
      batchData.map((item, index) => {
        if (index + 1 === id) {
          data = item;
        }
      });
    setPreviousFormData(data);
    console.log("first", data);
    setBatchId(data.id);
    setDefaultFormData({
      name: data.name,
      mentorName: data.mentorName,
      // technologies: data.technologies,
      startDate: data.startDate,
      endDate: data.blog_image_url,
    });
    hanldeEditClick();
    setModalValue("edit");
  };

  const getTableData = async () => {
    let tok = localStorage.getItem("token");
    let dec = JSON.parse(atob(tok.split(".")[1]));
    console.log();

    const { data, errRes } = await mentorBatchGetAll(dec.empId);
    console.log(data.data);
    setBatchData(data.data);
    let arrayOfRows = [];
    data &&
      data.data.map((item, index) => {
        arrayOfRows.push({
          col1: index + 1,
          // col1: item.number,
          col2: item.batchId,
          col3: item.batchName,
          // col4: item.mentorName,
          col4: item.technologies.map((ele) => (
            <Chip
              label={ele.technologyName}
              variant="outlined"
              color="primary"
              sx={{ backgroundColor: "#086288", color: "#FFFFFF" }}
            />
          )),
          col5: item.startDate,
          col6: item.endDate,
          col7: item.status,
          col8: <WarningIcons />,
          col9: (
            // #086288
            <button
              className="attenbutton"
              style={{ height: "30px" }}
              onClick={() => {
                setOpenBatch(true);
              }}
            >
              Attendance
            </button>
          ),
          col10: (
            <button
              style={{
                backgroundColor: "transparent",
                borderStyle: "none",
              }}
              onClick={() => {}}
            >
              <ArrowForwardIosIcon
                color="#0000"
                sx={{
                  color: "gray",
                  width: "20px",
                }}
              />
            </button>
          ),
        });
      });

    setRows(arrayOfRows);
  };

  const deleteItem = async (id) => {
    let batchId = "";
    batchData.map((item, index) => {
      if (index === id) {
        batchId = item.id;
      }
    });
    console.log("type of", batchId);
    const { data, errRes } = await batchDelete(batchId);
    console.log(data);
    console.log(errRes);
    if (data) {
      getTableData();
    }
  };

  return (
    <div>
      <Toolbar
        sx={{
          p: 0,
        }}
        className="row"
      >
        <Box className="col-8">
          <Typography color={"#FAA81D"}>Batch list</Typography>
        </Box>
        <Box className="col-4 d-flex">
          <Input
            size="default"
            placeholder="Search"
            prefix={<SearchOutlined />}
            onChange={(e) => {
              messageService.sendMessage(e.target.value);
            }}
          />
        </Box>
      </Toolbar>
      <div classNamw="m-2">
        <TableComponent
          tablerow={rows}
          headCells={CONSTANTS.MENTROR_BATCH_HEADER}
          deleteIconClick={(id) => deleteItem(id)}
          editIconClick={(id) => {
            setOpenBatch(true);
          }}
          actions={false}
        />
      </div>
      {openBatch && (
        <BatchModal
          getTableData={getTableData}
          openBatch={openBatch}
          setOpenBatch={setOpenBatch}
          defaultFormData={defaultFormData}
          setDefaultFormData={setDefaultFormData}
        />
      )}
    </div>
  );
}

export default MentorBatch;
