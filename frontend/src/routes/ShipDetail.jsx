import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAppState } from "../context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ShipDetail = () => {
  const { ships } = useAppState();

  const id = useParams();

  const detailShip = ships.filter((ship) => {
    return ship._id === id.id;
  });

  return (
    <>
      <Nav />
      <main className="bg-white">
        <img
          src={detailShip[0]?.imageUrl}
          alt={detailShip[0]?.name}
          className="aspect-video h-40 w-full object-cover object-center"
        />
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {detailShip[0]?.name}
            </h2>
            <p>{detailShip[0]?.serialNumber}</p>

            <p className="mt-4 text-gray-500">{detailShip[0]?.shipType}</p>
          </div>

          <img
            src={detailShip[0]?.imageUrl}
            alt={detailShip[0]?.name}
            className="aspect-video h-full w-full object-cover object-center"
          />
        </div>
      </main>
    </>
  );
};

export default ShipDetail;
