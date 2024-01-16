const express = require("express");
const router = express.Router();

const ClientsController = require("../controllers/ClientsController");
const clientsController = new ClientsController();

router.post("/", clientsController.create.bind(clientsController));

module.exports = router;
