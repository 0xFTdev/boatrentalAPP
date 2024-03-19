import { createContext, useContext, useState } from "react";
import { getShips, postShip, patchShip, deleteShipDB } from "./api";

const StateContext = createContext({
  ships: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const updateShips = async () => {
    try {
      const newShips = await getShips();
      console.log({ newShips });
      setShips(newShips);
    } catch (err) {
      console.error(err);
    }
  };

  const addShip = async (shipData) => {
    try {
      await postShip(shipData);
      updateShips();
    } catch (err) {
      console.error(err);
    }
  };

  const incrementRockets = async (name) => {
    const currentRockets = Number(
      ships.find((ship) => ship.name === name).rockets
    );
    try {
      await patchShip(name, { rockets: currentRockets + 1 });
      updateShips();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteShip = async (id) => {
    try {
      await deleteShipDB(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StateContext.Provider
      value={{ ships, updateShips, addShip, deleteShip, incrementRockets }}
    >
      {children}
    </StateContext.Provider>
  );
};
