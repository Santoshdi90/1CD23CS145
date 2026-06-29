const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const scheduleRoutes = require("./routes/scheduleRoutes");

app.use("/api", scheduleRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});