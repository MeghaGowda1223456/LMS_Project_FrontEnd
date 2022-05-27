import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { mockRating } from "../../../services/mentorBatch/MentorBatchServices";
import SimpleDropdown from "../../atom/SimpleDropdown";
import TextAreaComponent from "../../atom/TextAreaComponent";
import ModalComponent from "../../molicules/ModalComponent";

// import ModalComponent from "../molicules/ModalComponent";
// import TechnicalSkills from "../pages/employee/technicalSkills/TechnicalSkills";

function MockModel({
  setOpenBatch,
  getTableData,
  setDefaultFormData,
  defaultFormData,
  setMentor,
  mentor,
  setStatus1,
  status1,
  techno,
  setTechno,
  setFeedbackData,
  feedbackData,
}) {
  const statusOpt = [
    {
      value: "Mock",
    },
    {
      value: "Remock",
    },
  ];

  const technology = [
    {
      value: "MEAN",
    },
    {
      value: "MERN",
    },
    {
      value: "JAVA",
    },
  ];

  const feedback = [
    {
      value: "Excellent (90 Above)",
    },
    {
      value: "Good (80-89)",
    },
    {
      value: "Above Average (70-79)",
    },
    {
      value: "Average (60-69)",
    },
    {
      value: "Below Average (50-59)",
    },
  ];
  const handleSubmit = async () => {
    const payload = {
      empId: defaultFormData.name,
      mockType: defaultFormData.batchId,
      mockTakenBy: mentor.id,
      technology: defaultFormData.technologies,
      practicalKnowledge: defaultFormData.startDateString,
      theoreticalKnowledge: defaultFormData.endDateString,
      feedback: "",
      detailedFeedback: "",
    };
    const { data, errRes } = await mockRating(payload);

    console.log(data);
    if (data) {
      await getTableData();
    } else if (errRes) {
      console.log(errRes.message);
    } else {
      console.log("Something went wrong");
    }
    setOpenBatch(false);
  };

  return (
    <div>
      <ModalComponent
        onSubmitBtnClick={handleSubmit}
        modalWidth={"650px"}
        submitBtnText="Submit"
        modalTitle={"Mock Rating"}
        showPreviousBtn={false}
        onCloseIconClick={() => setOpenBatch(false)}
      >
        <div
          class="modal-body  "
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <form>
            <div class="row">
              <div class="col-6">
                <div class="form-group has-label">
                  <label class="control-label">Mock Type </label>
                  <SimpleDropdown
                    value={status1}
                    onChange={(e, val) => {
                      setStatus1(val);
                    }}
                    options={statusOpt}
                    modalWidth="100%"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-label">
                  <label class="control-label">mock taken by:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="employee_id"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-6">
                <div class="form-group has-label">
                  <label class="control-label">Technology</label>
                  <SimpleDropdown
                    value={techno}
                    onChange={(e, val) => {
                      setTechno(val);
                    }}
                    options={technology}
                    modalWidth="100%"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-label">
                  <label class="control-label">
                    Practicle knolwdge(out of 100)
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    required
                    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                  />
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-6">
                <div class="form-group has-label">
                  <label class="control-label">
                    Theoretical Knowledge( out of 100){" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="employee_id"
                    required
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-label">
                  <label class="control-label">
                    Overall Feedback <span className="text-danger">*</span>
                  </label>
                  <SimpleDropdown
                    value={feedbackData}
                    onChange={(e, val) => {
                      setFeedbackData(val);
                    }}
                    options={feedback}
                    modalWidth="100%"
                  />
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                <div class="form-group has-label">
                  <label class="control-label">
                    Detailed Feedback <span className="text-danger">*</span>
                  </label>
                  <TextAreaComponent placeholder="" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </ModalComponent>
    </div>
  );
}

export default MockModel;
