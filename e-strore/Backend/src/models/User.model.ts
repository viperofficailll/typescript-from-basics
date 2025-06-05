import mongoose from "mongoose";

enum Role {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer", 
}

const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true }, 
    password: String,
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.CUSTOMER,
    },
    isActive: { type: Boolean, default: true },
    isEmailVerified: { type: Boolean, default: false },
    avatar: String,
  },
  { timestamps: true }
);


export const User = mongoose.model("User", UserSchema);
