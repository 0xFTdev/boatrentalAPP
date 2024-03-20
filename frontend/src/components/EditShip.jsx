import { useRef, useEffect, useState } from "react";
import { useAppState } from "../context";
import Nav from "./Nav";
import { useParams, useNavigate } from "react-router-dom";

const EditShip = () => {
  const { editShip, ships, updateShips } = useAppState();
  const formRef = useRef();
  const [existingShipData, setExistingShipData] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const editSpecificShip = ships.find((ship) => ship._id === id);
    if (editSpecificShip) {
      setExistingShipData(editSpecificShip);
    }
  }, [id, ships]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    await editShip(id, formData);
    await updateShips();
    formRef.current.reset();
    navigate("/ships");
  };
  return (
    <>
      <Nav />
      <form
        className="text-black flex flex-col p-3 gap-2 justify-items-center items-center"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <label>
          <p>Name of Spaceship</p>
          <input
            type="text"
            required={true}
            name="name"
            placeholder="Name of Spaceship"
            defaultValue={existingShipData.name || ""}
          />
        </label>
        <label>
          <p>Date of Production</p>
          <input
            type="number"
            required={true}
            name="baujahr"
            placeholder="Date of Production"
            defaultValue={existingShipData.baujahr || ""}
          />
        </label>
        <label>
          <p>Serial Number</p>
          <input
            type="text"
            required={true}
            name="serialNumber"
            placeholder="Serial Number of Ship"
            defaultValue={existingShipData.serialNumber || ""}
          />
        </label>
        <label>
          <p>Image URL</p>
          <input
            type="text"
            required={true}
            name="imageUrl"
            placeholder="Image URL"
            defaultValue={existingShipData.imageUrl || ""}
          />
        </label>
        <label>
          <p>Material</p>
          <input
            type="text"
            required={true}
            name="material"
            placeholder="Material of Ship"
            defaultValue={existingShipData.material || ""}
          />
        </label>
        <label>
          <p>Type of Ship</p>
          <input
            type="text"
            required={true}
            name="shipType"
            placeholder="Type of Ship"
            defaultValue={existingShipData.shipType || ""}
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Edit Ship
        </button>
      </form>
    </>
  );
};

export default EditShip;
