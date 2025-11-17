const countriesJson = require("../../../utils/countries.json");
const countriesArray = countriesJson.countries;

const visitsData = countriesArray.map((country) => {
  return {
    country_name: country,
    is_visited: false,
  };
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("countries").del();
  await knex("countries").insert(visitsData);
};
