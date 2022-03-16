import { formatCurrency } from "./number";

describe("Number utils", () => {
  it("Format numbers as currency", () => {
    expect(formatCurrency(100)).toEqual("100.00");
    expect(formatCurrency(100.0)).toEqual("100.00");
    expect(formatCurrency(100.05)).toEqual("100.05");
  });
});
