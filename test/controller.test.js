const { expect } = require("chai");

const visitData = require("../utils/visitData.json");
const path = require("path");
const knexConfig = require("../db/knexfile").development;
knexConfig.migrations = {
  directory: path.join(__dirname, "../db/data/migrations"),
};
knexConfig.seeds = {
  directory: path.join(__dirname, "../db/data/seeds"),
};
const knex = require("knex")(knexConfig);
const { createController } = require("../controller");

const COUNTRIES_TABLE = "countries";

describe("controller", () => {
  let controller;

  before(async () => {
    await knex("countries").truncate();

    await knex.migrate
      .forceFreeMigrationsLock()
      .then(() => knex.migrate.rollback({ all: true }))
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
      .catch(console.error);

    controller = createController(knex);
  });

  describe("list", () => {
    it("should return an array of visit data", async () => {
      let capturedJson;
      let capturedStatus;

      const req = { params: {} };

      const res = {
        status: function (code) {
          capturedStatus = code;
          return this;
        },
        json: function (data) {
          capturedJson = data;
          return null;
        },
      };

      await controller.list(req, res);

      expect(capturedStatus).to.equal(200);
      expect(capturedJson[0]).to.have.property("id");
      expect(capturedJson[0]).to.have.property("country_name");
      expect(capturedJson[0]).to.have.property("is_visited");
      expect(capturedJson[0]).to.have.property("visit_date");
      expect(capturedJson[0]).to.have.property("memo");
      expect(capturedJson[0]).to.have.property("picture1");
    });
  });

  describe("find", () => {
    it("should return visit data with specified id", async () => {
      let capturedJson;
      let capturedStatus;

      const req = { params: { name: "Japan" } };
      const res = {
        status: function (code) {
          capturedStatus = code;
          return this;
        },
        json: function (data) {
          capturedJson = data;
          return null;
        },
      };

      await controller.find(req, res);

      expect(capturedStatus).to.equal(200);
      expect(capturedJson).to.have.property("country_name");
      expect(capturedJson["country_name"]).to.be.equals("Japan");
    });
  });
});
