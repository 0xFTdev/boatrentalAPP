import mongoose, { Schema } from "mongoose";

const reservedSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  ship: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Ship",
    },
  ],
});

export const Reserved = mongoose.model(
  "Reserved",
  reservedSchema,
  "reservations"
);
