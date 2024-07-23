import Product from "../models/Product";

// Define seed data
const products = [
  {
    name: "Product 1",
    description: "Description for Product 1",
    price: 29.99,
    category: "Category 1",
    stock: 100,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 2",
    description: "Description for Product 2",
    price: 19.99,
    category: "Category 2",
    stock: 50,
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add 10 more products with unique details
  {
    name: "Product 3",
    description: "Description for Product 3",
    price: 9.99,
    category: "Category 3",
    stock: 70,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 4",
    description: "Description for Product 4",
    price: 49.99,
    category: "Category 4",
    stock: 120,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 5",
    description: "Description for Product 5",
    price: 39.99,
    category: "Category 1",
    stock: 30,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 6",
    description: "Description for Product 6",
    price: 59.99,
    category: "Category 2",
    stock: 200,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 7",
    description: "Description for Product 7",
    price: 99.99,
    category: "Category 3",
    stock: 10,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 8",
    description: "Description for Product 8",
    price: 15.99,
    category: "Category 4",
    stock: 90,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 9",
    description: "Description for Product 9",
    price: 25.99,
    category: "Category 1",
    stock: 60,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 10",
    description: "Description for Product 10",
    price: 5.99,
    category: "Category 2",
    stock: 40,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 11",
    description: "Description for Product 11",
    price: 75.99,
    category: "Category 3",
    stock: 80,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Product 12",
    description: "Description for Product 12",
    price: 85.99,
    category: "Category 4",
    stock: 20,
    imageUrl: "https://via.placeholder.com/150",
  },
];

export const seedProducts = async () => {
  // Clear existing data
  await Product.deleteMany({});
  console.log("Existing data cleared...");

  // Insert seed data
  await Product.insertMany(products);
  console.log("Seed data inserted...");
};
