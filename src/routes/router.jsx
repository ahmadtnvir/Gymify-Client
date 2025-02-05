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
import Career from "../pages/Forms/Career/Career";
import Payment from "../pages/Payment/Payment";
import Classes from "../pages/Classes/Classes";
import Blogs from "../pages/Blogs/Blogs";
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
      {
        path: "career",
        element: (
          <PrivateRoute>
            <Career></Career>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
