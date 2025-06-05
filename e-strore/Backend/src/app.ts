import  express from "express";
import router from "./routes/Auth.routes";
export const app =express()

app.use('/api/v1/auth',router)
