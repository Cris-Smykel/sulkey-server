const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 5000;

const clientsRouter = require("./routes/clientsRoutes");
const businessRouter = require("./routes/businessRoutes");

app.use(cors({ credentials: true, origin: "http://localhost:5000" }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use("/api/clients/", clientsRouter);
app.use("/api/business/", businessRouter);

app.listen(port, () => {
  return;
});
