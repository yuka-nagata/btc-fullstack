const countriesJson = require("../../../utils/countries.json");
const visitDataJson = require("../../../utils/visitData.json");
const countriesArray = countriesJson.countries;
const visitDataArray = visitDataJson.data;

const visitsData = countriesArray.map((country) => {
  const found = visitDataArray.find((obj) => obj.country_name === country);

  if (found === undefined) {
    return {
      country_name: country,
      is_visited: false,
    };
  } else {
    return found;
  }
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
