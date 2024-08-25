const express = require("express");
const dotenv = require("dotenv");
const connectToMongoDB = require("./db");

dotenv.config();

const app = express();

// Middlewares
const logging = require("./middleware/logging");
// Routes
const userRoutes = require("./route/user.route");

// Middlewares
app.use(express.json());
app.use(logging.requestLogging);
// Routes
app.use("/user", userRoutes);

connectToMongoDB();

app.get("/status", (req, res) => {
    res.send("Backend is up and running.");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});