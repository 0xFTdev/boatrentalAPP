import express from "express";
import { Ship } from "../models/ship.js";
import multer from "multer";

const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  try {
    const ships = await Ship.find().lean();
    res.json(ships);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ship = await Ship.findById(req.params.id).lean();
    res.json(ship);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.post("/", mult.none(), async (req, res) => {
  console.log(req.body);
  try {
    const newShip = new Ship({
      name: req.body.name,
      baujahr: req.body.baujahr,
      serialNumber: req.body.serialNumber,
      imageUrl: req.body.imageUrl,
      material: req.body.material,
      shipType: req.body.shipType,
    });

    const saveResult = await newShip.save();
    res.status(201).json(saveResult);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

export default router;
