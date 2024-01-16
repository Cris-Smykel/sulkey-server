const Clients = require("../database/models/Clients");

class ClientsController {
  constructor() {
    this.postSuccess = 201;
    this.badData = 400;

    this.clients = new Clients();
  }

  async create(req, res) {
    try {
      const dataCreated = await this.clients.create();

      res.status(this.postSuccess).json({ success: true, data: dataCreated });
    } catch (error) {
      res.status(this.badData).json({
        success: false,
        msg: "There was an error on Clients Controller.",
      });
    }
  }
}

module.exports = ClientsController;
