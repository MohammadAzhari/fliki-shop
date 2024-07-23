import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";
import connectDB from "./config/db";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import config from "./config/config";

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`app is running on port ${config.port}`);
});
