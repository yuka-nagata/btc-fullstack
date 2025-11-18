function createController(knex) {
  const table = "countries";
  const list = async (req, res) => {
    const rowData = await knex.select().from(table);
    const result = rowData;
    res.status(200).json(result);
  };

  const find = async (req, res) => {
    const name = req.params.name;
    const data = await knex.first().from(table).where("country_name", name);
    res.status(200).json(data);
  };

  return { list, find };
}
module.exports = { createController };
