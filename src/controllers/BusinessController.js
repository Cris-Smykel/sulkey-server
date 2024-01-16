const Business = require("../database/models/Business");

class BusinessController {
  constructor() {
    this.postSuccess = 201;
    this.badData = 400;

    this.Business = new Business();
  }

  async create(req, res) {
    try {
      const { name, email, phone, password } = req.body;

      const businessData = {
        name,
        email,
        phone,
        password,
      };

      const dataCreated = await this.Business.create(businessData);

      res.status(this.postSuccess).json({ success: true, data: dataCreated });
    } catch (error) {
      res.status(this.badData).json({
        success: false,
        msg: "There was an error on Business Controller.",
      });
    }
  }
}

module.exports = BusinessController;
