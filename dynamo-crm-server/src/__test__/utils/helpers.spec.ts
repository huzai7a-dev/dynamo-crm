import {
  comparePassword,
  getPagination,
  hashPassword,
} from "../../utils/helper";

describe("Helpers", () => {
  describe("getPagination", () => {
    it("should return pagination data", () => {
      const { limit, paginationData, skip } = getPagination(1, 10);
      expect(limit).toBe(10);
      expect(skip).toBe(0);
      expect(paginationData).toBeInstanceOf(Object);
    });
  });

  describe("hashPassword", () => {
    it("should return hashed password", async () => {
      const password = "password";
      const hashedPassword = await hashPassword(password);
      expect(hashedPassword).not.toBe(password);
      expect(hashedPassword).not.toBeFalsy();
    });
  });

  describe("comparePassword", () => {
    it("should return true", async () => {
      const password = "password";
      const hashedPassword = await hashPassword(password);
      const isMatch = await comparePassword(password, hashedPassword);
      expect(isMatch).toBe(true);
    });
  });
});
