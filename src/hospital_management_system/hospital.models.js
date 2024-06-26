import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: {
    type: String,
    required: true
  },
  addressLine3: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  pinCode: {
    type: String, //Recommended type for pinCode is String
    required: true
  },
  speciacializedIn: {
    type: String,
    required: true
  }
}, {timestamps: true});

export const Hospital = mongoose.model("Hospital", hospitalSchema);