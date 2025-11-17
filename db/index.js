const knex = require("knex");
const knexConfig = require("./knexfile");
require("dotenv").config();

module.exports = knex(knexConfig);
// if (process.env.NODE_ENV === "development") {
//   module.exports = knex(knexConfig.development);
// }
// if (process.env.NODE_ENV === "production") {
//   module.exports = knex(knexConfig.production);
// }
