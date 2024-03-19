import { useAppState } from "../context";

const ShipGallery = () => {
  const shipsState = useAppState();
  console.log(shipsState);
  return (
    <>
      <div>
        {shipsState.ships.map((ship) => (
          <p key={ship._id}>{ship.name}</p>
        ))}
      </div>
    </>
  );
};

export default ShipGallery;
