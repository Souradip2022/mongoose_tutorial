import mongoose, {Mongoose} from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  diagonisedWith: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  gender:{
    type: String,
    enum: ["Male", "Female"],
    required: true
  },
  admittedIn:{
    type:Mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
  }
}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);