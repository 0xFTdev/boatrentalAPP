export const getShips = () => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/ships`).then((response) =>
    response.json()
  );
};

export const postShip = (newShip) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/ships`, {
    method: "POST",
    body: newShip,
  }).then((response) => response.json());
};

export const patchShip = "test";

export const deleteShipDB = (id) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/ships/${id}`, {
    method: "DELETE",
  });
};
