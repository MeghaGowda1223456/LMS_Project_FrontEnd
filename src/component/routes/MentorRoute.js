import { useRoutes } from "react-router-dom";
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
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default MentorRoute;
