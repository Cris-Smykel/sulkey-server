const pool = require("../connection");

class Clients {
  constructor() {
    this.database = pool;

    this.table = {
      name: "clients",
      columns: {
        id: "",
        name: "name",
        email: "email",
        phone: "phone",
        password: "password",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    };
  }

  async create(clientData) {
    const query = "INSERT INTO ??(??, ??, ??, ??) VALUES(?, ?, ?, ?)";

    try {
      const fields = await this.database.query(query, [
        this.table.name,
        this.table.columns.name,
        this.table.columns.email,
        this.table.columns.phone,
        this.table.columns.password,
        clientData.name,
        clientData.email,
        clientData.phone,
        clientData.password,
      ]);

      return { success: true, msg: "Data was inserted successfully." };
    } catch (error) {
      return {
        success: false,
        msg: `There was an error on Clients model, create function. ${error}`,
      };
    }
  }
}

module.exports = Clients;
