function createController(knex) {
  const table = "countries";
  const list = async (req, res) => {
    const rowData = await knex.select().from(table);
    const result = rowData;
    (result[8] = {
      id: 9,
      country_name: "Australia",
      is_visited: true,
      visit_date: new Date(),
      memo: "楽しかった！",
      picture: null,
    }),
      (result[185] = {
        id: 186,
        country_name: "United States",
        is_visited: true,
        visit_date: new Date(),
        memo: "でかい！",
        picture: null,
      }),
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
