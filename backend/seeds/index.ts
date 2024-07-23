import connectDB from "../config/db";
import { seedProducts } from "./productSeed";

// Connect to MongoDB and seed data
const seedDatabase = async () => {
  try {
    await connectDB();

    // run other seeds
    await seedProducts();

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
