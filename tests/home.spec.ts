import request from "supertest";
import app from "../src/app";

const endpoint = "/home";

describe("GET /home", () => {
  beforeAll(async () => {
    await app.ready();
  });

  describe("Given all fields", () => {
    it("should return 200 status code", async () => {
      const response = await request(app.server).get("/home").send();

      expect(response.statusCode).toBe(200);
    });
  });
});
