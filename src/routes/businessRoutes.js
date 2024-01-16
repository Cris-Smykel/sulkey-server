const express = require("express");
const router = express.Router();

const BusinessController = require("../controllers/BusinessController");
const businessController = new BusinessController();

router.post("/", businessController.create.bind(businessController));

module.exports = router;
