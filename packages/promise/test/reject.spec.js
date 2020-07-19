import Promise from "../src/index";

describe("test with Promise.reject function", () => {
    test("should value be passed", () => {
        [null, undefined, 1, true, false, "test", {}].forEach((value) => {
            Promise.reject(value)
                .then(undefined, (res) => {
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
