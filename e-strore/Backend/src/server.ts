import { app } from "./app";
import { config } from "dotenv";
import path from 'path'
import { conn } from "./db/db.conn";
config({
    path:path.resolve(__dirname,"../.env")
})
const port = process.env.PORT
conn()
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})