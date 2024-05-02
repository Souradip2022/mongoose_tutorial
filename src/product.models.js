import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const ProductSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  productImage: {type: String},
  price: {
    type: Number,
    default: 0
  },
  stock:{
    type: Number,
    default: 0,
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, {timestamps: true});
const Product = mongoose.model('Product', ProductSchema);

// console.log(Schema.Types.Number);