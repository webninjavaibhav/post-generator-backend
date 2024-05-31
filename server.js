const express = require("express");
const bodyParser = require("body-parser");
const generatePostRoutes = require("./routes/generate-post");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/generate-post", generatePostRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
