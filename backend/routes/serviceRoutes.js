const express = require("express");
const router = express.Router();
const {
  getServices,
  addService,
  addMultipleServices,
  editService,
  deleteService,
  getServiceById,
} = require("../controllers/serviceController");

router.get("/", getServices);

router.post("/", addService);
router.post("/bulk", addMultipleServices);
router.patch("/:id", editService);

router.delete("/:id", deleteService);
router.get("/:id", getServiceById);

module.exports = router;
