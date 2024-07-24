import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreatePoint } from "./pages/CreatePoint";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-point",
    element: <CreatePoint />,
  },
]);
export function Routes() {
  return <RouterProvider router={router} />;
}
