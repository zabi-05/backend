import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  cuisine: String
});

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);
