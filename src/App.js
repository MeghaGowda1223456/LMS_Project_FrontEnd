import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutComponent from "./component/organism/LayoutComponent";
import "./style/dateComponent.scss";
import "./style/color.scss";
import "./style/font.scss";
import Login from "./component/pages/login/Login";
import TextAreaComponent from "./component/atom/TextAreaComponent";
import ProtectedRoute from "./component/organism/ProtectedRoute";
import EmployeeLayout from "./component/pages/employee/EmployeeLayout";
import EducationDetails from "./component/pages/employee/educationDetails/EducationDetails";
import AdminMentor from "./component/pages/mentor/Mentor";
import XlDownloadComponent from "./component/atom/XlDownloadComponent";
import EmployeeLayoutComponent from "./component/organism/EmployeeLayoutComponent";
import PieChartComponent from "./component/molicules/PieChartComponent";
import ButtonComponent from "./component/atom/ButtonComponent";
import TableComponent from "./component/molicules/TableComponent";
import DonutPiChart from "../src/component/molicules/DonutPiChart";
import MentorLayoutComponent from "./component/organism/MentorLayoutComponent";
import { Warning } from "@mui/icons-material";
import WarningIcon from "./component/molicules/WarningIcon";
import WarningIcons from "./component/molicules/WarningIcon";
import SwitchComponent from "./component/atom/SwitchComponent";
import AttendanceModel from "./component/forms/attendance/AttendanceModel";
import MentorEmploye from "./component/pages/mentorMentor/MentorEmploye";
function App() {
  return (
    <div>
      <div className="w-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/*" />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {/* <LayoutComponent /> */}
      {/* <DetailsModal /> */}
      {/* </BrowserRouter>
      </div>

      {/* <div className="m-5" style={{ width: "30%" }}> */}
      {/* </div> */}
      {/* <BrowserRouter> */}
      {/* <LayoutComponent /> */}
      {/* <EmployeeLayout /> */}
      {/* <EmployeeLayoutComponent /> */}
      {/* </BrowserRouter> */}
      {/* <BrowserRouter>
        {/* <LayoutComponent /> */}
      {/* <EmployeeLayout /> */}
      {/* <MentorLayoutComponent /> */}
      {/* </BrowserRouter> */}
      {/* <Login /> */}
      {/* <div className="m-5">
        <DonutPiChart />
      </div> */}
      {/* <WarningIcons /> */}
      {/* <AttendanceModel/> */}
      {/* <MentorEmploye /> */}
    </div>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";

// function App() {
//   const [result, setResult] = useState([]);

//   const getData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((res) => setResult(res));
//   };

//   useEffect(() => {
//     getData();
//   });

//   return (
//     <div className="container">
//       <h3 className="mt-3 text-success">
//         <center>Export React Table Data into EXCEL Sheet</center>
//       </h3>
//       <div className="row mt-4">
//         <ReactHTMLTableToExcel
//           id="test-table-xls-button"
//           className="download-table-xls-button btn btn-success mb-3"
//           table="table-to-xls"
//           filename="tablexls"
//           sheet="tablexls"
//           buttonText="Download"
//         />
//         <table className="table" id="table-to-xls">
//           <thead className="thead-dark">
//             <tr>
//               <th>Firstname</th>
//               <th>Lastname</th>
//               <th>Email</th>
//               <th>Website</th>
//             </tr>
//           </thead>
//           <tbody>
//             {result.map((res) => (
//               <tr>
//                 <td>{res.name}</td>
//                 <td>{res.username}</td>
//                 <td>{res.email}</td>
//                 <td>{res.website}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;
