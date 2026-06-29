const express = require("express");
const router = express.Router();

const controller = require(
    "../controllers/scheduleController"
);

router.get(
    "/schedule",
    controller.getSchedule
);

module.exports = router;