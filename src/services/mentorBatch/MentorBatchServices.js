import serviceUtil from "../index";

const mentorBatchGetAll = (payload) => {
  return serviceUtil
    .get(`lms/getbatchbyempid?empId=${payload}`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const mentorAttendanceGetAll = (payload) => {
  return serviceUtil
    .get(`lmsuser/getemployeeattendance?batchId=${payload}`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const mentorEmployeeGetAll = (payload) => {
  return serviceUtil
    .get(`lmsuser/getemployeebybatchid?batchId=${payload}`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const mentorBatchSubmit = (payload) => {
  return serviceUtil
    .post("", payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const mentorBatchDelete = (payload) => {
  return serviceUtil
    .deleteAll(`lms/v1/admin/batch/${payload}`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

export {
  mentorBatchGetAll,
  mentorBatchSubmit,
  mentorBatchDelete,
  mentorAttendanceGetAll,
  mentorEmployeeGetAll,
};
