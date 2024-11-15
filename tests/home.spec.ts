import request from "supertest";
import app from "../src/app";

const endpoint = "/home";

describe("GET /home", () => {
  describe("Given all fields", () => {
    it("should 200 status code", async () => {
      const response = await request(app.server).get(endpoint).send();

      expect(response.statusCode).toBe(200);
    });
  });
});
