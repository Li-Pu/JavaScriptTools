import Promise from "../src/index";

describe("test with promise constructor", () => {
    test("should executor be called", () => {
        let a = 1;
        new Promise((resolve, reject) => {
            a++;
            resolve(a);
        });
        expect(a).toBe(2);
    });
});
