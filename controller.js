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

  const edit = async (req, res) => {
    const name = req.params.name;
    await knex(table).where("country_name", name).update(req.body);
    const data = await knex.first().from(table).where("country_name", name);
    res.status(200).json();
  };

  return { list, find, edit };
}
module.exports = { createController };
