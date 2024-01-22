import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Registration from "../pages/registration/Registration";
import List from "../pages/list/List";
import Hotel from "../pages/hotel/Hotel";
import Login from "../pages/Login/Login";
import ProfilePage from "../pages/profile/ProfilePage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registrationform",
        element: <Registration />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/hotels",
        element: <List />,
      },
      {
        path: "/hotels/:id",
        element: <Hotel />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
