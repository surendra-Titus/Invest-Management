import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import AddInvestment from "./components/AddInvestment";
import Investments from "./components/Investments";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          errorElement: <Error />,
        },
        {
          path: "/investments",
          element: <Investments />,
        },
        {
          path: "/add-investment",
          element: <AddInvestment />,
        },
        {
          path: "/error",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
