require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }));
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
});
