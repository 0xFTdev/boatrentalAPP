import "./App.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddShip from "./components/AddShip";
import Home from "./routes/Home";
import ShipDetail from "./routes/ShipDetail";
import Reservations from "./routes/Reservations";
import { useAppState } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ships/:id",
    element: <ShipDetail />,
  },
  {
    path: "/addship",
    element: <AddShip />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
]);

function App() {
  const { updateShips } = useAppState();
  useEffect(() => {
    updateShips();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
