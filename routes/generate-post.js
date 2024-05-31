const express = require("express");
const router = express.Router();
const { postGenerator } = require("../controllers/generatePostController");

// Define a route
router.post("/", postGenerator);

module.exports = router;
