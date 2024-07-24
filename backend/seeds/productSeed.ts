import Product from "../models/Product";

// Define seed data
const products = [
  {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 109.95,
    category: "men's clothing",
    stock: 120,
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    name: "Mens Casual Premium Slim Fit T-Shirts",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    price: 22.3,
    category: "men's clothing",
    stock: 259,
    imageUrl:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    name: "Mens Cotton Jacket",
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    price: 55.99,
    category: "men's clothing",
    stock: 500,
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    name: "Mens Casual Slim Fit",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    price: 15.99,
    category: "men's clothing",
    stock: 430,
    imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    price: 695,
    category: "jewelery",
    stock: 400,
    imageUrl:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    name: "Solid Gold Petite Micropave",
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    price: 168,
    category: "jewelery",
    stock: 70,
    imageUrl:
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    name: "White Gold Plated Princess",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    price: 9.99,
    category: "jewelery",
    stock: 400,
    imageUrl:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    price: 10.99,
    category: "jewelery",
    stock: 100,
    imageUrl:
      "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    price: 64,
    category: "electronics",
    stock: 203,
    imageUrl: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    price: 109,
    category: "electronics",
    stock: 470,
    imageUrl: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },
  {
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    price: 109,
    category: "electronics",
    stock: 319,
    imageUrl: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  },
  {
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    price: 114,
    category: "electronics",
    stock: 400,
    imageUrl: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  },
];

export const seedProducts = async () => {
  // Clear existing data
  await Product.deleteMany({});
  console.log("Existing data cleared...");

  // Insert seed data
  await Product.insertMany(products).then(console.log);
  console.log("Seed data inserted...");
};
