import Promise from "../src/index";

describe("test with Promise.resolve function", () => {
    test("should value be passed", () => {
        [null, undefined, 1, true, false, "test", {}].forEach((value) => {
            Promise.resolve(value)
                .then((res) => {
                    expect(res).toBe(value);
                    return res;
                })
                .then((res) => {
                    expect(res).toBe(value);
                    return res;
                });
        });
    });
});
