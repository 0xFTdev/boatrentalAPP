import { createContext, useContext, useState } from "react";
import { getShips, postShip, patchShip } from "./api";

const StateContext = createContext({
  ships: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const updateShips = async () => {
    try {
      const ships = setShips(await getShips());
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

  return (
    <StateContext.Provider
      value={{ ships, updateShips, addShip, incrementRockets }}
    >
      {children}
    </StateContext.Provider>
  );
};
