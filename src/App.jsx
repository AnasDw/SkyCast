import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShearedLayOut from "./components/ShearedLayOut";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShearedLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/forecast",
        element: <Forecast />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
