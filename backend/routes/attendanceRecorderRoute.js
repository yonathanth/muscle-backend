const express = require("express");
const router = express.Router();
const { getAttendanceByDate } = require("../controllers/attendanceRecorder");

// Route to get users who attended on a specific date
router.get("/", getAttendanceByDate);

module.exports = router;
