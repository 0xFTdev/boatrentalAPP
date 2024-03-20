import "./App.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddShip from "./components/AddShip";
import EditShip from "./components/EditShip";
import AddReservation from "./components/AddReservation";
import Home from "./routes/Home";
import ShipDetail from "./routes/ShipDetail";
import Reservations from "./routes/Reservations";
import ShipGallery from "./routes/ShipGallery";
import ReservationDetail from "./routes/ReservationDetail";
import { useAppState } from "./context";
import EditReservation from "./components/EditReservation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ships",
    element: <ShipGallery />,
  },
  {
    path: "/ships/:id",
    element: <ShipDetail />,
  },
  {
    path: "/addship",
    element: <AddShip />,
  },
  { path: "/ships/:id/edit", element: <EditShip /> },
  { path: "/reservations/:id/edit", element: <EditReservation /> },

  { path: "/addreservation", element: <AddReservation /> },

  {
    path: "/reservations",
    element: <Reservations />,
  },
  {
    path: "/reservations/:id",
    element: <ReservationDetail />,
  },
]);

function App() {
  const { updateShips, updateBookings, updateCounter } = useAppState();
  useEffect(() => {
    updateShips();
    updateBookings();
    updateCounter();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
