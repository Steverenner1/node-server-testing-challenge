const db = require("../data/dbConfig.js");

const { insert } = require("./carModel.js");

describe("cars model", function() {
  describe("insert()", function() {
    beforeEach(async () => {
      await db("cars").truncate();
    });

    it("should insert a car", async function() {
      // insert a car into the db
      await insert({ name: "Audi" });

      // check if it was inserted into the db
      const cars = await db("cars"); // read from db directly
      expect(cars).toHaveLength(1); // at least we know one record was inserted
    });

    it("should insert the provided car", async function() {
      await insert({ name: "Audi" });
      await insert({ name: "BMW" });

      const cars = await db("cars"); // read from db directly

      expect(cars).toHaveLength(2); // both records are there
      expect(cars[0].name).toBe("Audi"); // the first record is Audi
      expect(cars[1].name).toBe("BMW"); // the second record is BMW
    });

    it("should return the inserted car", async function() {
      let car = await insert({ name: "Audi" });
      expect(car.name).toBe("Audi");
      expect(car.id).toBeDefined(); // now I know it's coming from the db

      car = await insert({ name: "BMW" });
      expect(car.name).toBe("BMW");
      expect(car.id).toBeDefined();
    });
  });
});