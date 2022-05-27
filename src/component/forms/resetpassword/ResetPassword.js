import React, { useEffect, useState } from "react";
import { mentorBatchSubmit, mentorResetPassword } from "../../../services/mentorBatch/MentorBatchServices";
import { batchGetAll } from "../../../services/utils/batch/BarchServices";
import { categoryGet } from "../../../services/utils/commonApi";
import { requestAprove } from "../../../services/utils/request/requestServices";
import InputComponent from "../../atom/InputComponent";
import SimpleDropdown from "../../atom/SimpleDropdown";
import TextAreaComponent from "../../atom/TextAreaComponent";
import ModalComponent from "../../molicules/ModalComponent";

function ResetPassword() {
  const [approve, setApprove] = useState(true);
  const [defaultFormData, setDefaultFormData] = useState({
    empId: "",
    existingPassword: "",
    newPassword: "",
  });

  const handleSubmit = async () => {
    const payload = {
      empId: defaultFormData.empId,
      epassword: defaultFormData.existingPassword,
      password: defaultFormData.newPassword,
    };
    const { data, errRes } = await mentorResetPassword(payload);
    console.log(data);
    setApprove(false);
  };

  return (
    <div>
      <ModalComponent
        onSubmitBtnClick={handleSubmit}
        open={approve}
        modalWidth={400}
        showPreviousBtn={false}
        modalTitle="Reset your password to continue"
        onCloseIconClick={() => {
          setApprove(false);
        }}
        minHeightClassName="mnh-150"
      >
        <div className="px-5 p-2">
          <div className="mb-3">
            <InputComponent
              type="password"
              placeholder="Enter existing password"
              value={defaultFormData.empId}
              onChange={(e) => {
                console.log(e.target.value);
                setDefaultFormData({
                  ...defaultFormData,
                  empId: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <InputComponent
              type="password"
              placeholder="Enter New Password (Must be at least 6 characters)"
              value={defaultFormData.existingPassword}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  existingPassword: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <InputComponent
              placeholder="Re-enter Password"
              type="password"
              value={defaultFormData.newPassword}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  newPassword: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}

export default ResetPassword;
