const express = require("express");
const router = express.Router();

const {
    getBroadcasts, addBroadcast, editBroadcast
} = require("../controllers/broadcastController");

router.get("/", getBroadcasts);
router.post("/add", addBroadcast)
router.put("/edit", editBroadcast)

module.exports = router;