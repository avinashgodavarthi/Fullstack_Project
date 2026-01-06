require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const connectToDatabase = require("./database/db");

var ProductsRoutes = require("./routes/ProductsRoutes")

const app = express();

// ✅ CORS FIRST
app.use(cors());

// ✅ Body parser
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/auth", authRoutes);


// for products//
app.use("/api/products",ProductsRoutes)


// Connect MongoDB
connectToDatabase();

// Start server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));