const cors = require("cors");
const path = require("path");

//expressの設定
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//knexの設定
const knexConfig = require("./db/knexfile");
let knex;
require("dotenv").config();
if (process.env.NODE_ENV === "development") {
  knex = require("knex")(knexConfig.development);
}
if (process.env.NODE_ENV === "production") {
  knex = require("knex")(knexConfig.production);
}

const { createController } = require("./controller");
const controller = createController(knex);

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);

// app.use("/api", (req, res) => {
//   res.send("つながった");
// });

//全てのデータを取得
app.get("/countries", controller.list);
app.get("/countries/:name", controller.find);
app.patch("/countries/:name", controller.edit);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
