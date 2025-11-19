const knex = require("../server");

exports.mochaGlobalTeardown = async () => {
  try {
    await knex.destroy();
    console.log("✅ Closed database connection");
  } catch (error) {
    console.error(error);
  }
};
