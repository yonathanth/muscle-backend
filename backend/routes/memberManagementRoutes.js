const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  updateUserStatus,
  renewUser,
} = require("../controllers/memberManagementController");

router.get("/:id/profile", getUserProfile);
router.put("/:id/status", updateUserStatus);
router.patch("/:id", renewUser);

module.exports = router;
