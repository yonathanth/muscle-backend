const express = require("express");
const router = express.Router();

const {
    getWorkouts,
    getWorkout, createWorkout, updateWorkout, deleteWorkout, upload
} = require("../controllers/workoutController");

router.get("/", getWorkouts);
router.get("/:id", getWorkout)
router.post("/add", upload.single("image"),createWorkout);
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
