// Update with your config settings.
require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.POSTGRES_USER || "postgres",
      database: process.env.DB_NAME || "visits",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
