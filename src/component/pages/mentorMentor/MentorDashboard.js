// import { height } from "@mui/system";
// import React from "react";
// import BarChart from "../../molicules/BarGraphComponent";
// import DonutPiChart from "../../molicules/DonutPiChart";
// import PiChart from "../../molicules/PiChart";

// function MentorDashboard() {
//   return (
//     <>
//       <div className="mt-5 mx-5  d-flex m-3">
//         <div className="my-5 mt-0 border rounded  ">
//           <p className="p-0 pt-0 fw-600">Gender</p>
//           <div className="p-2 pb-4 mx-3">
//             <DonutPiChart />
//           </div>
//         </div>

//         <div
//           className="my-5 mt-0 border rounded p-4 m-3"
//           style={{ width: "500px" }}
//         >
//           <p className="p-0 pt-0 fw-600">Year of passing</p>
//           <div className="p-2 pb-4 mx-3">
//             <BarChart />{" "}
//           </div>
//         </div>
//         <div
//           className="my-5 mt-0 border rounded   p-4 m-3"
//           style={{ width: "600px", height: "320px" }}
//         >
//           <p className="p-0 pt-0 fw-600">Experience</p>
//           <div className="p-2 pb-4 mx-3">
//             <BarChart />{" "}
//           </div>
//         </div>
//       </div>

//       <div className=" mx-5  d-flex row">
//         <div
//           className="my-5 mt-0 border rounded  p-4 col-5 "
//           style={{ height: "300px" }}
//         >
//           <p className="p-0 pt-0 fw-600">Gender</p>
//           <div className="p-2 p-5 pb-4 mx-3"></div>
//         </div>

//         <div
//           className="my-5 mt-0 border rounded p-4 m-3 col-"
//           style={{ width: "580px" }}
//         >
//           <p className="p-0 pt-0 fw-600">Year of passing</p>
//           <div className="p-2 pb-4 mx-3">
//             <PiChart />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MentorDashboard;

import { height } from "@mui/system";
import React from "react";
import BarChart1 from "../../molicules/BarGraphComponent1";
import BarChart from "../../molicules/BarGraphComponent1";
import BarChart2 from "../../molicules/BarGraphComponent2";
import DonutPiChart from "../../molicules/DonutPiChart";
import PiChart from "../../molicules/PiChart";

function MentorDashboard() {
  return (
    <div className="col" style={{ marginTop: "60px", marginLeft: "40px" }}>
      <div className="row" style={{ height: "40vh" }}>
        <div className="card shadow m-1 col-2">
          <span style={{ marginTop: "20px" }}>Gender</span>
          <DonutPiChart />
        </div>
        <div className="card shadow m-1 col-4">
          <span style={{ marginTop: "20px" }}>Year of passing</span>
          <BarChart1 />
        </div>
        <div className="card shadow m-1  col-5">
          Experiance
          <BarChart2 />
        </div>
      </div>

      <div className="row" style={{ height: "45vh", marginTop: "20px" }}>
        <div className="card shadow m-1 col-6">Employee degree</div>
        <div className="card shadow m-1 col-5">
          Batch Performance
          <PiChart style={{ marginLeft: "60px", marginTop: "80px" }} />
        </div>
      </div>
    </div>
  );
}

export default MentorDashboard;
