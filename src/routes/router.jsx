import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AllTrainer from "../pages/AllTrainer/AllTrainer";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import TrainerDetails from "../pages/TrainerDetails/TrainerDetails";
import TrainerBooking from "../pages/TrainerBooking/TrainerBooking";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "allTrainer",
        element: <AllTrainer></AllTrainer>,
      },
      {
        path: "trainer/:id",
        element: <TrainerDetails></TrainerDetails>,
      },
      {
        path: "trainerBooking",
        element: (
          <PrivateRoute>
            <TrainerBooking></TrainerBooking>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
