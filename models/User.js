import mongoose from "mongoose";
import { auth, currentUser } from "@clerk/nextjs/server"; // ✔️ Valid, but… used differently

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
  cartItems: { type: mongoose.Schema.Types.Mixed, default: {} },
}, { minimize: false });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;