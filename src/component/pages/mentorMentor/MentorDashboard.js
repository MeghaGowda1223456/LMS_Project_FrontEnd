import { height } from "@mui/system";
import React from "react";
import BarChart from "../../molicules/BarGraphComponent";
import DonutPiChart from "../../molicules/DonutPiChart";
import PiChart from "../../molicules/PiChart";

function MentorDashboard() {
  return (
    <>
      <div className="mt-5 mx-5  d-flex m-3">
        <div className="my-5 mt-0 border rounded  p-4">
          <p className="p-0 pt-0 fw-600">Gender</p>
          <div className="p-2 pb-4 mx-3">
            <DonutPiChart />
          </div>
        </div>

        <div
          className="my-5 mt-0 border rounded p-4 m-3"
          style={{ width: "500px" }}
        >
          <p className="p-0 pt-0 fw-600">Year of passing</p>
          <div className="p-2 pb-4 mx-3">
            <BarChart />{" "}
          </div>
        </div>
        <div
          className="my-5 mt-0 border rounded   p-4 m-3"
          style={{ width: "600px", height: "320px" }}
        >
          <p className="p-0 pt-0 fw-600">Experience</p>
          <div className="p-2 pb-4 mx-3">
            <BarChart />{" "}
          </div>
        </div>
      </div>

      <div className=" mx-5  d-flex row">
        <div
          className="my-5 mt-0 border rounded  p-4 col-7 "
          style={{ height: "300px" }}
        >
          <p className="p-0 pt-0 fw-600">Gender</p>
          <div className="p-2 p-5 pb-4 mx-3"></div>
        </div>

        <div
          className="my-5 mt-0 border rounded p-4 m-3 col-4"
          style={{ width: "580px" }}
        >
          <p className="p-0 pt-0 fw-600">Year of passing</p>
          <div className="p-2 pb-4 mx-3">
            <PiChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
