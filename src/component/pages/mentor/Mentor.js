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
// import batchGetAll from "../../../services/util/batch/BatchServices";
import CONSTANTS from "../../constents/Index";
import AdminMentorModel from "../../forms/login/adminMentorModel/AdminMentorModel";
import {
  adminMentorDelete,
  adminMentorGetAll,
} from "../../../services/utils/admin-mentor/AdminMentorServices";
import { messageService } from "../../../services/rxjsServices";

function AdminMentor() {
  const [openMentor, setOpenMentor] = useState(false);
  const [mentorData, setMentorData] = useState([]);
  const [deleteData, setDeleteData] = useState("");
  const [rows, setRows] = useState([]);

  const [defaultFormData, setDefaultFormData] = useState({
    mentorName: "",
    employeeId: "",
    email: "",
    skills: [],
    skillsId: [],
  });

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    const { data, errRes } = await adminMentorGetAll();
    setMentorData(data.data);
    let arrayOfRows = [];
    data &&
      data.data.map((item, index) => {
        arrayOfRows.push({
          col1: index + 1,
          col2: item.mentorName,
          col3: item.empId,
          col4: item.emailId,
          col6: item.skills.map((ele, index) => (
            <Chip
              label={ele.sName}
              variant="outlined"
              color="primary"
              sx={{ backgroundColor: "#086288", color: "#FFFFFF" }}
            />
          )),
        });
      });
    setRows(arrayOfRows);
  };

  const hanldeEditClick = (id) => {
    let data;
    console.log(id);
    mentorData &&
      mentorData.map((item, index) => {
        if (index + 1 === id) {
          data = item;
        }
      });

    setDefaultFormData({
      // header: data.blog_heading,
      // category: data.category_name,
      // categoryID: data.category_id,
      // bodyObj: EditorState.createWithContent(
      //   ContentState.createFromBlockArray(
      //     htmlToDraft(data.blog_body).contentBlocks
      //   )
      // ),
      // image: data.blog_image_url,
      // description: data.blog_desc,
      // body: data.blog_body,

      mentorName: data.mentorName,
      employeeId: data.empId,
      email: data.empId,
      skills: data.skills.map((val) => {
        return val.sName;
      }),
    });
    // setModalValue("edit");
    setOpenMentor(true);
  };

  const deleteItem = async (id) => {
    let empId = "";
    mentorData.map((item, index) => {
      if (index + 1 === id) {
        empId = item.empId;
      }
    });
    const { data, errRes } = await adminMentorDelete(empId);
    console.log(data);
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
        <Box className="col-6">
          <Typography color={"#FAA81D"}>Mentors list</Typography>
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
        <Box className="col-2">
          <ButtonComponent
            label="New Mentor"
            muiProps="orange"
            fullwidth
            size="small"
            onClick={() => {
              setOpenMentor(true);
            }}
            showIcon={true}
            iconOrintation="start"
            iconName="add"
          />
        </Box>
      </Toolbar>
      <div classNamw="m-2">
        <TableComponent
          tablerow={rows}
          headCells={CONSTANTS.ADMIN_MENTOR_HEADER}
          deleteIconClick={(id) => deleteItem(id)}
          editIconClick={(id) => {
            hanldeEditClick(id);
          }}
        />
      </div>
      {openMentor && (
        <AdminMentorModel
          getTableData={getTableData}
          openMentor={openMentor}
          setOpenMentor={setOpenMentor}
          setDefaultFormData={setDefaultFormData}
          defaultFormData={defaultFormData}
        />
      )}
    </div>
  );
}

export default AdminMentor;
