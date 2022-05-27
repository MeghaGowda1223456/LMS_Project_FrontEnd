import { useRoutes } from "react-router-dom";
import ResetPassword from "../forms/resetpassword/ResetPassword";
import LineChartComponent from "../molicules/LineChartComponent";
import MentorBatch from "../pages/mentorMentor/MentorBatch";
import MentorDashboard from "../pages/mentorMentor/MentorDashboard";
import MentorEmploye from "../pages/mentorMentor/MentorEmploye";

const MentorRoute = () => {
  const routesObj = [
    {
      element: <MentorBatch />,
      path: "/mentorBatch",
    },
    {
      element: <MentorDashboard />,
      path: "/mentorDashboard",
    },
    {
      element: <MentorEmploye />,
      path: "/mentorEmployee",
    },
    {
      element: <ResetPassword />,
      path: "/batch",
    },
    {
      element: <LineChartComponent />,
      path: "/mentoremployeechart",
    },
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default MentorRoute;
