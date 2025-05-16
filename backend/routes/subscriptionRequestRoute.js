const express = require("express");
const {
  updateSubscriptionRequestStatus,
  requestSubscriptionExtension,
  checkSubscriptionStatus,
  getSubscriptionRequests,
} = require("../controllers/subscriptionController");

const router = express.Router();

// Route for requesting a subscription extension
router.post("/:id", requestSubscriptionExtension);
// Route for updating the subscription request status
router.patch("/:id/changeStatus", updateSubscriptionRequestStatus);
// Route for checking a user's subscription status
router.get("/:id/subscriptionStatus", checkSubscriptionStatus);
// Route for getting all subscription requests
router.get("/", getSubscriptionRequests);

module.exports = router;
