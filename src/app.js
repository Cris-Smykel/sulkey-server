const express = require("express");
const app = express();
const cors = require("cors");

const clientsRouter = require("./routes/clientsRoutes");
const businessRouter = require("./routes/businessRoutes");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/clients/", clientsRouter);
app.use("/api/business/", businessRouter);

app.listen(5000, () => {
  return;
});
