import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  mentorAttendanceGetAll,
  mentorBatchGetAll,
} from "../../../services/mentorBatch/MentorBatchServices";
import SwitchComponent from "../../atom/SwitchComponent";
import CONSTANTS from "../../constents/Index";
import ModalComponent from "../../molicules/ModalComponent";
import TableComponent from "../../molicules/TableComponent";

// import TechnicalSkills from "../pages/employee/technicalSkills/TechnicalSkills";

function AttendanceModel({ setOpenBatch }) {
  const [batchData, setBatchData] = useState([]);
  const [rows, setRows] = useState([]);
  // const [openBatch, setOpenBatch] = useState(false);

  const d = new Date(); // today, now
  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    let tok = localStorage.getItem("token");
    let dec = JSON.parse(atob(tok.split(".")[1]));

    const { data, errRes } = await mentorAttendanceGetAll(dec.batchId);
    console.log(data);
    setBatchData(data.data);
    let arrayOfRows = [];
    data &&
      data.data.map((item, index) => {
        arrayOfRows.push({
          col1: index + 1,
          // col1: item.number,
          col2: item.empId,
          col3: item.batchName,
          // col4: item.mentorName,
          col4: <SwitchComponent />,
        });
      });
    setRows(arrayOfRows);
  };

  return (
    <div>
      <ModalComponent
        // onSubmitBtnClick={handleSubmit}
        minHeightClassName="vh-height"
        modalWidth={"1000px"}
        submitBtnText="Submit"
        modalTitle={`Attendance for (${d.toLocaleDateString("de-DE", {
          timeZone: "America/New_York",
        })})`}
        showPreviousBtn={false}
        onCloseIconClick={() => setOpenBatch(false)}
      >
        <TableComponent
          headCells={CONSTANTS.ATTENDANCE_HEADER}
          showCheckbox={false}
          actions={false}
          tablerow={rows}
        />
      </ModalComponent>
    </div>
  );
}

export default AttendanceModel;
