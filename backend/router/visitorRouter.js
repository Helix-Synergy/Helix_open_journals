const express = require("express");
const router = express.Router();
const { getVisitorCount, incrementVisitorCount } = require("../controller/visitorController");

router.get("/count", getVisitorCount);
router.post("/increment", incrementVisitorCount);

module.exports = router;
