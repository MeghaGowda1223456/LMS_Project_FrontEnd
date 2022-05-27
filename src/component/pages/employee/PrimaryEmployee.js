// import { Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import ButtonComponent from "../../atom/ButtonComponent";
// import DatePickerComponent from "../../atom/DatePickerComponent";
// import InputComponent from "../../atom/InputComponent";
// import SimpleDropdown from "../../atom/SimpleDropdown";

// function PrimaryEmployee({ empPayload, setEmpPayload, handleNextClick }) {
//   const [defaultFormData, setDefaultFormData] = React.useState({
//     empId: "",
//     empName: "",
//     doj: "",
//     dob: "",
//     email: "",
//     bloodGroup: "",
//     designation: "",
//     gender: "",
//     nationality: "",
//     employeeStatus: "",
//   });

//   const [error, setError] = React.useState({
//     empId: false,
//     empName: false,
//     doj: false,
//     dob: false,
//     email: false,
//     bloodGroup: false,
//     designation: false,
//     gender: false,
//     nationality: false,
//     employeeStatus: false,
//   });

//   const handleError = () => {
//     let {
//       empId,
//       empName,
//       doj,
//       dob,
//       email,
//       bloodGroup,
//       designation,
//       gender,
//       nationality,
//       employeeStatus,
//     } = defaultFormData;

//     if (empId === "" || empId != empId) {
//       setError({ ...error, empID: true });
//     }
//     if (empName === "" || empName != empName) {
//       setError({ ...error, empName: true });
//     }
//     if (doj === "" || doj != doj) {
//       setError({ ...error, doj: true });
//     }
//     if (dob === "" || dob != dob) {
//       setError({ ...error, dob: true });
//     }
//     if (email === "" || email != email) {
//       setError({ ...error, email: true });
//     }
//     if (bloodGroup === "" || bloodGroup != bloodGroup) {
//       setError({ ...error, bloodGroup: true });
//     }
//     if (designation === "" || designation != designation) {
//       setError({ ...error, designation: true });
//     }
//     if (gender === "" || gender != gender) {
//       setError({ ...error, gender: true });
//     }
//     if (nationality === "" || nationality != nationality) {
//       setError({ ...error, nationality: true });
//     }
//     if (employeeStatus === "" || employeeStatus != employeeStatus) {
//       setError({ ...error, employeeStatus: true });
//     }
//   };

//   // useEffect(() => {
//   //   console.log(empPayload);
//   // }, []);

//   const handleNext = () => {
//     const {
//       empId,
//       empName,
//       doj,
//       dob,
//       email,
//       bloodGroup,
//       designation,
//       gender,
//       nationality,
//       employeeStatus,
//     } = defaultFormData;
//     handleNextClick();
//     setEmpPayload({
//       ...empPayload,
//       empId: empId,
//       empName: empName,
//       doj: doj,
//       dob: dob,
//       email: email,
//       bloodGroup: bloodGroup,
//       designation: designation,
//       gender: gender,
//       nationality: nationality,
//       status: employeeStatus,
//     });
//   };

//   return (
//     <div className="m-5">
//       <div className="row justify-content-center ">
//         <div className="col-5">
//           <div className="d-flex justify-content-between">
//             <div className="m-2">
//               <p className="mb-0">Employee Id</p>
//               <InputComponent
//                 status={error.empName && "error"}
//                 value={defaultFormData.empId}
//                 onChange={(e) => {
//                   // console.log("target value", e.target.value);
//                   setDefaultFormData({
//                     ...defaultFormData,
//                     empId: e.target.value,
//                   });
//                 }}
//               />
//             </div>
//             <div className="m-2">
//               <p className="mb-0">Employee Name</p>
//               <InputComponent
//                 status={error.empName && "error"}
//                 value={defaultFormData.empName}
//                 onChange={(e) => {
//                   // console.log("target value", e.target.value);
//                   setDefaultFormData({
//                     ...defaultFormData,
//                     empName: e.target.value,
//                   });
//                 }}
//               />
//               {error.empName && <p className="mb-0">Employee Name required</p>}
//             </div>
//           </div>
//           <div className=" row d-flex justify-content-between">
//             <div className="col-5 m-2">
//               <p className="mb-0">Date of Joining</p>
//               <DatePickerComponent
//                 value={defaultFormData.doj}
//                 onChange={(date, dateString) => {
//                   console.log(dateString, "dateString");
//                   setDefaultFormData({ ...defaultFormData, doj: dateString });
//                 }}
//               />
//               {error.doj && (
//                 <p className="mb-0 text-danger">Date of Joining Required</p>
//               )}
//             </div>
//             <div className="m-2 col-5">
//               <p className="mb-0">Date of Birth</p>
//               <DatePickerComponent
//                 value={defaultFormData.dob}
//                 onChange={(date, dateString) => {
//                   setDefaultFormData({ ...defaultFormData, dob: dateString });
//                 }}
//               />
//               {error.dob && <p className="mb-0">Date of Birth Required</p>}
//             </div>
//           </div>
//           <div className="d-flex justify-content-between">
//             <div className="m-2">
//               <p className="mb-0">E-mail ID</p>
//               <InputComponent
//                 status={error.email && "error"}
//                 value={defaultFormData.email}
//                 onChange={(e) => {
//                   setDefaultFormData({
//                     ...defaultFormData,
//                     email: e.target.value,
//                   });
//                 }}
//               />
//               {error.email && (
//                 <p className="mb-0 text-danger">E-mail ID Required</p>
//               )}
//             </div>
//             <div className="m-2">
//               <p className="mb-0">Blood Group</p>
//               <InputComponent
//                 status={error.bloodGroup && "error"}
//                 value={defaultFormData.bloodGroup}
//                 onChange={(e) => {
//                   setDefaultFormData({
//                     ...defaultFormData,
//                     bloodGroup: e.target.value,
//                   });
//                 }}
//               />
//               {error.bloodGroup && (
//                 <p className="mb-0, text-danger">Blood Group Required</p>
//               )}
//             </div>
//           </div>
//           <div className="row d-flex justify-content-between">
//             <div className="m-2 col-5">
//               <p className="mb-0">Designation</p>
//               <SimpleDropdown />
//             </div>
//             <div className="m-2 col-5">
//               <p className="mb-0">Gender</p>
//               <SimpleDropdown />
//             </div>
//           </div>
//           <div className="row d-flex justify-content-between">
//             <div className="m-2 col-5">
//               <p className="mb-0">Nationality</p>
//               <SimpleDropdown />
//             </div>
//             <div className="m-2 col-5">
//               <p className="mb-0">Employee Status</p>
//               <SimpleDropdown />
//             </div>
//           </div>
//           <ButtonComponent onClick={() => handleNext()} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PrimaryEmployee;

import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../../atom/ButtonComponent";
import DatePickerComponent from "../../atom/DatePickerComponent";
import InputComponent from "../../atom/InputComponent";
import SimpleDropdown from "../../atom/SimpleDropdown";

function PrimaryEmployee({
  empPayload,
  setEmpPayload,
  handleNextClick,
  handlePreviousClick,
}) {
  const [defaultFormData, setDefaultFormData] = React.useState({
    empId: "",
    empName: "",
    doj: "",
    dob: "",
    email: "",
    bloodGroup: "",
    designation: "",
    gender: "",
    nationality: "",
    employeeStatus: "",
  });

  const [error, setError] = React.useState({
    empId: false,
    empName: false,
    doj: false,
    dob: false,
    email: false,
    bloodGroup: false,
    designation: false,
    gender: false,
    nationality: false,
    employeeStatus: false,
  });

  const handleError = () => {
    let {
      empId,
      empName,
      doj,
      dob,
      email,
      bloodGroup,
      designation,
      gender,
      nationality,
      employeeStatus,
    } = defaultFormData;

    if (empId === "" || empId != empId) {
      setError({ ...error, empID: true });
    }
    if (empName === "" || empName != empName) {
      setError({ ...error, empName: true });
    }
    if (doj === "" || doj != doj) {
      setError({ ...error, doj: true });
    }
    if (dob === "" || dob != dob) {
      setError({ ...error, dob: true });
    }
    if (email === "" || email != email) {
      setError({ ...error, email: true });
    }
    if (bloodGroup === "" || bloodGroup != bloodGroup) {
      setError({ ...error, bloodGroup: true });
    }
    if (designation === "" || designation != designation) {
      setError({ ...error, designation: true });
    }
    if (gender === "" || gender != gender) {
      setError({ ...error, gender: true });
    }
    if (nationality === "" || nationality != nationality) {
      setError({ ...error, nationality: true });
    }
    if (employeeStatus === "" || employeeStatus != employeeStatus) {
      setError({ ...error, employeeStatus: true });
    }
  };

  // useEffect(() => {
  //   console.log(empPayload);
  // }, []);

  const handleNext = () => {
    const {
      empId,
      empName,
      doj,
      dob,
      email,
      bloodGroup,
      designation,
      gender,
      nationality,
      employeeStatus,
    } = defaultFormData;
    handleNextClick();
    setEmpPayload({
      ...empPayload,
      empId: empId,
      empName: empName,
      doj: doj,
      dob: dob,
      email: email,
      bloodGroup: bloodGroup,
      designation: designation,
      gender: gender,
      nationality: nationality,
      status: employeeStatus,
    });
  };

  return (
    <div
      class="modal-body col-md-6 "
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <form>
        <div class="row">
          <div class="col-6">
            <div class="form-group has-label">
              <label class="control-label">Employee ID: </label>
              <input
                type="text"
                class="form-control"
                name="employee_id"
                required
                status={error.empName && "error"}
                value={defaultFormData.empId}
                onChange={(e) => {
                  // console.log("target value", e.target.value);
                  setDefaultFormData({
                    ...defaultFormData,
                    empId: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group has-label">
              <label class="control-label">Employee Name:</label>
              <input
                type="text"
                class="form-control"
                name="employee_id"
                required
                status={error.empName && "error"}
                value={defaultFormData.empName}
                onChange={(e) => {
                  // console.log("target value", e.target.value);
                  setDefaultFormData({
                    ...defaultFormData,
                    empName: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div class="col-6">
            <div class="form-group has-label">
              <label class="control-label">Date of joining:</label>
              <DatePickerComponent
                style={{ width: "260px" }}
                value={defaultFormData.doj}
                onChange={(date, dateString) => {
                  console.log(dateString, "dateString");
                  setDefaultFormData({ ...defaultFormData, doj: dateString });
                }}
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group has-label">
              <label class="control-label">Email ID:</label>
              <input
                type="email"
                class="form-control"
                name="email"
                required
                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                status={error.email && "error"}
                value={defaultFormData.email}
                onChange={(e) => {
                  setDefaultFormData({
                    ...defaultFormData,
                    email: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <div class="form-group has-label">
              <label class="control-label">Date of birth:</label>
              <DatePickerComponent />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group has-label">
              <label class="control-label">Gender:</label>
              <SimpleDropdown />
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <div class="form-group has-label">
              <label class="control-label">Blood group:</label>
              <input
                type="text"
                class="form-control"
                name="blood_group"
                required
                status={error.bloodGroup && "error"}
                value={defaultFormData.bloodGroup}
                onChange={(e) => {
                  setDefaultFormData({
                    ...defaultFormData,
                    bloodGroup: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group has-label">
              <label class="control-label">Designation:</label>
              <SimpleDropdown />
            </div>
          </div>
        </div>
      </form>
      <div class="row mt-4">
        <div class="col-2">
          <ButtonComponent
            label="Previous"
            style={{
              backgroundColor: "#086288",
              color: "#FFFFFF",
              Fontfamily: "Open Sans, Semibold",
            }}
            size="default"
            // onClick={() => handlePreviousClick()}
          />
        </div>
        <div class=" col-2" style={{ marginLeft: "auto" }}>
          <ButtonComponent
            label="Next"
            style={{
              backgroundColor: "#086288",
              color: "#FFFFFF",
              Fontfamily: "Open Sans, Semibold",
            }}
            size="default"
            onClick={() => handleNext()}
          />
        </div>
      </div>
    </div>
  );
}

export default PrimaryEmployee;
