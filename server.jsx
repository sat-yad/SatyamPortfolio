const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
// dotenv config
dotenv.config();

// rest objects
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// static files

app.use(express.static(path.join(__dirname, "./Portfolio-Client/dist")));
// routes
const Route = require("./routes/Route.jsx"); // Ensure this path is correct
app.use("/api/v1/portfolio", Route);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Portfolio-Client/dist/index.html"));
});
//port
const PORT = process.env.PORT || 5000;

//listen

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
