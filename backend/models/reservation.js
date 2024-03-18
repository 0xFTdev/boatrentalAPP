import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema({
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  ship: {
    type: mongoose.Types.ObjectId,
    ref: "Ship",
  },
});

export const Reservation = mongoose.model(
  "Reservation",
  reservationSchema,
  "reservations"
);
