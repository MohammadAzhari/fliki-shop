const config = {
  mongoUri:
    process.env.MONGO_URI || "mongodb://localhost:27017/fliki-ecommerce",
  port: process.env.PORT || 4000,
};

export default config;
