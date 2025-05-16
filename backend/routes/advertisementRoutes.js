const express = require("express");
const router = express.Router();

const {
    getAdvertisement, addAdvertisement, upload, editAdvertisement, clearAndUpload
} = require("../controllers/advertisementController");

router.get("/", getAdvertisement);
router.post("/add", upload.single("image"), addAdvertisement)
router.put("/edit", clearAndUpload, upload.single("image"), editAdvertisement)

module.exports = router;