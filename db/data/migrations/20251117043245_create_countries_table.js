/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("countries", (table) => {
    table.increments("id").primary();
    table.string("country_name").notNullable().unique();
    table.boolean("is_visited");
    table.date("visit_date");
    table.string("memo");
    table.string("picture1");
    table.string("picture2");
    table.string("picture3");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("countries");
};
