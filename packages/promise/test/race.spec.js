import Promise from "../src/index";

describe("test with Promise.race function", () => {
    test("should value be passed", () => {
        Promise.race(
            [1, 2, 3, 4, 5, 6].map(
                (value) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => resolve(value), value * 1000);
                    })
            )
        ).then((res) => {
            expect(res).toBe(1);
        });
    });
});
