import express from "express";
import { connectDB } from "./db.js";
import { personRouter } from "./routes/personRoutes.js";
import { menuRouter } from "./routes/menuItemRoutes.js";
import dotenv from 'dotenv'
dotenv.config()
const app = express();

app.use(express.json());

connectDB();
app.use('/person',personRouter)
app.use('/menuItem',menuRouter)
const port = process.env.PORT
app.listen(port, () => console.log("run",port));
