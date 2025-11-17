function createController(knex) {
  const table = "countries";
  const list = async (req, res) => {
    const result = await knex.select().from(table);
    res.status(200).json(result);
  };

  return { list };
}
module.exports = { createController };
