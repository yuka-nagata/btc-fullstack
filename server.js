const cors = require("cors");
const path = require("path");

//expressの設定
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//knexの設定
const knexConfig = require("./db/knexfile");
const knex = require("knex")(knexConfig.development);

const { createController } = require("./controller");
const controller = createController(knex);

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);

app.use("/api", (req, res) => {
  res.send("つながったqq");
});

//全てのデータを取得
app.get("/countries", controller.list);
app.get("/countries/:name", controller.find);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
