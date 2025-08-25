import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import { crossOriginResourcePolicy } from "helmet";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// ----------------------------------- Routes imports -----------------------------------

import dashboardRoutes from "./routes/dashboardRoutes.js";
// import dashboardRoutes from "./routes/dashboardRoutes";


// ----------------------------------- Configration -----------------------------------

dotenv.config();  
const app = express();
app.use(helmet());
app.use(express.json());
app.use(
  crossOriginResourcePolicy({ policy: "cross-origin" })
);
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());






// ----------------------------------- Routes -----------------------------------

app.use("/dashboard", dashboardRoutes)

app.get("/", async (req, res) => {
  try {
    res.json('server is running!');
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({msg:"failed to start server", status: "error", data: null, succuss: false});
  }
});




// ----------------------------------- server -----------------------------------

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});