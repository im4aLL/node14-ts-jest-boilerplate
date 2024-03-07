import { add, multiply, Example } from "./math";

describe("Math functions", () => {
    it("should multiply 5 by 3", () => {
        const result = multiply(5, 3);
        expect(result).toEqual(15);
    });

    it("should add 5 by 3", () => {
        const result = add(5, 3);
        expect(result).toEqual(8);
    });

    it("should add 5 by 3 inside class", () => {
        const result = new Example().add(5, 3);
        expect(result).toEqual(8);
    });
});
