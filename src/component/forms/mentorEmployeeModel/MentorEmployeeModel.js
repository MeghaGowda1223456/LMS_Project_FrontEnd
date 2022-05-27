import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import DatePickerComponent from "../../atom/DatePickerComponent";
import InputComponent from "../../atom/InputComponent";
import MultipleSelectCheckmarks from "../../atom/MultiSelectDropdown";
import SimpleDropdown from "../../atom/SimpleDropdown";
import ModalComponent from "../../molicules/ModalComponent";
import MultiSelectDropdown from "../../atom/MultiSelectDropdown";
// import TechnicalSkills from "../pages/employee/technicalSkills/TechnicalSkills";

function MentorEmployeeModel({
  setOpenBatch,
  getTableData,
  defaultFormData,
  setDefaultFormData,
}) {
  return (
    <div>
      <ModalComponent
        // onSubmitBtnClick={handleSubmit}
        submitBtnText="Create"
        modalWidth={"450px"}
        modalTitle={"Add Mock"}
        onCloseIconClick={() => setOpenBatch(false)}
        showPreviousBtn={false}
      >
        <Box className="p-5 pt-4">
          {/* <p className="mb-0 txt-gray">Batch ID</p>
          <div className="mb-4">
            <SimpleDropdown />
          </div> */}

          <div className="mb-4">
            <p className="mb-0 txt-gray">Mock No. </p>
            {/* <SimpleDropdown /> */}
            <InputComponent
              value={defaultFormData.employeeId}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  employeeId: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-4">
            <p className="mb-0 txt-gray">Technology </p>

            <MultiSelectDropdown
              modalWidth="100%"
              //   options={options}
              //   value={defaultFormData.skills}
              //   onChange={(e, val) => {
              //     const tempId = [];
              //     const tempSkill = [];
              //     val.map((item) => {
              //       // tempId.push(item.sName.toString());
              //       tempSkill.push(item.value);
              //     });
              //     setDefaultFormData({
              //       ...defaultFormData,
              //       skills: tempSkill,
              //       skillsId: tempId,
              //     });
              //   }}
            />
          </div>
          <div className="mb-4">
            <p className="mb-0 txt-gray">Panel </p>
            <SimpleDropdown />
          </div>

          <div className="mb-0">
            <p className="mb-0 txt-gray">Date & Time</p>
            <DatePickerComponent
              style={{ width: "100%" }}
              //   value={defaultFormData.startDate}
              //   onChange={(date, dateString) => {
              //     console.log(date);
              //     setDefaultFormData({
              //       ...defaultFormData,
              //       startDate: date,
              //       startDateString: dateString,
              //     });
              //   }}
            />
          </div>
        </Box>
      </ModalComponent>
    </div>
  );
}

export default MentorEmployeeModel;
