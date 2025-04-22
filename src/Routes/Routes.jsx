import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from '../Error-page';
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

const Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
      ]
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

export default Routes;
