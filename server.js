const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://127.0.0.1:27017/health");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/auth"));
app.use("/", require("./routes/health"));
app.use("/recommend", require("./routes/recommend"));

app.listen(3000, () => console.log("Server running"));
