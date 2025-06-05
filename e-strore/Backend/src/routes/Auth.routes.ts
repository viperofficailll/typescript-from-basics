import express from "express";
import {
  customerRegisterHandler,
  sellerRegisterHandler,
  loginHandler,
  refreshTokenHandler,
  getMeHandler,
  logoutHandler,
  firstadmincreater
} from "../controllers/auth.controller";
import { authenticateToken } from "../middlewares/authenticatetoken";

const router = express.Router();

// Public routes (no authentication required)
router.post("/register", customerRegisterHandler);
router.post("/seller/register", sellerRegisterHandler);
router.post("/login", loginHandler);
router.post("/refresh-token", refreshTokenHandler);
router.post("/setup/super-admin", firstadmincreater);

// Protected routes (authentication required)
router.get("/me", authenticateToken, getMeHandler);
router.post("/logout", authenticateToken, logoutHandler);

// TODO: Add these routes later
// router.post("/forgot-password", forgotPasswordHandler);
// router.post("/reset-password", resetPasswordHandler);
// router.post("/verify-email", verifyEmailHandler);

export default router;
