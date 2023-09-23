import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Favorites from "../pages/Favorites";
import Forecast from "../pages/Forecast";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Favorites",
        element: <Favorites />,
      },
      {
        path: "/Forecast",
        element: <Forecast />,
      },
      {
        path: "/Login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
