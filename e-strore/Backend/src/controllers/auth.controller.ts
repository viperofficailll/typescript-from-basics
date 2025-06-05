import { z } from "zod";
import { Request, Response } from "express";
import  { User } from "../models/User.model";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const customerRegisterHandler = async (req: Request, res: Response) => {
  const expectedBody = z.object({
    firstName: z.string().min(3).max(100),
    lastName: z.string().min(3).max(100),
    email: z.string().email(),
    password: z.string().min(5).max(50),
    confirmPassword: z.string().min(5).max(50),
  });

  const verifiedBody = expectedBody.safeParse(req.body);

  if (!verifiedBody.success) {
     res.status(400).json({
      error: "Invalid credentials",
      details: verifiedBody.error.errors,
    });
    return
  }

  const { firstName, lastName, email, password, confirmPassword } =
    verifiedBody.data;

  if (password !== confirmPassword) {
     res.status(400).json({ error: "Passwords do not match" });
     return
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
       res.status(400).json({ message: "Email already exists" });
       return
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "customer", // Optional
    });

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      res.status(500).json({ message: "JWT secret not set" });
      return
    }

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, secret, {
      expiresIn: "7d",
    });

    res.status(201).json({
      message: "Customer registered successfully",
      user: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
  

export const sellerRegisterHandler = async (req: Request, res: Response) => {
  const expectedBody = z.object({
    firstName: z.string().min(3).max(100),
    lastName: z.string().min(3).max(100),
    email: z.string().email(),
    password: z.string().min(5).max(50),
    confirmPassword: z.string().min(5).max(50),
    businessName: z.string().min(2).max(200),
    businessType: z.string().min(2).max(100),
  });

  const verifiedBody = expectedBody.safeParse(req.body);

  if (!verifiedBody.success) {
    res.status(400).json({
      error: "Invalid credentials",
      details: verifiedBody.error.errors,
    });
    return
  }

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    businessName,
    businessType,
  } = verifiedBody.data;

  // Check if passwords match
  if (password !== confirmPassword) {
    res.status(400).json({
      error: "Passwords do not match",
    });
    return
  }

  try {
    // TODO: Add your seller registration logic here
    // - Check if seller already exists
    // - Hash the password
    // - Save seller to database
    // - Generate JWT token

    res.status(201).json({
      message: "Seller registered successfully",
      seller: {
        firstName,
        lastName,
        email,
        businessName,
        businessType,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};


export const loginHandler = async (req: Request, res: Response) => {};
export const refreshTokenHandler = async(req:Request,res:Response)=>{}
export const getMeHandler = async (req: Request, res: Response) => {};
export const logoutHandler = async (req: Request, res: Response) => {};


/**
 * First Admin Creator - Creates the initial super admin account
 * This should only be used once during initial setup
 */
 export const firstadmincreater = async (req:Request, res:Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      adminSecretKey
    } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword || !adminSecretKey) {
       res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
      return
    }

    // Validate admin secret key
    if (adminSecretKey !== process.env.ADMIN_SECRET_KEY) {
      res.status(403).json({
        success: false,
        message: 'Invalid admin secret key'
      });
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
       res.status(400).json({
        success: false,
        message: 'Passwords do not match'
      });
      return;
    }

    // Validate email format
    
    // Validate password strength

    }
catch{
console.log("error")
}}
   