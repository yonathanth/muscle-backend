const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/massDownload");

router.get("/", getAllUsers);

module.exports = router;
