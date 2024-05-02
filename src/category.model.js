import mongoose from 'mongoose';

const {Schema, model} = mongoose;
const CategorySchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
}, {timestamps: true});

export const Category = model('Category', CategorySchema);