import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAppState } from "../context";

const ShipGallery = () => {
  const shipsState = useAppState();
  console.log(shipsState);
  return (
    <>
      <Nav />
      <div>
        {shipsState.ships.map((ship) => (
          <Link key={ship._id} to={`${ship._id}`}>
            <p>{ship.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ShipGallery;
