const express = require("express");
const router = express.Router();

const {
    getAdvertisement, addAdvertisement, editAdvertisement
} = require("../controllers/advertisementController");

router.get("/", getAdvertisement);
router.post("/add", addAdvertisement);
router.put("/edit", editAdvertisement);

module.exports = router;