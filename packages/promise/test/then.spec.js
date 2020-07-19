import Promise from "../src/index";

describe("test with Promise.then method", () => {
    test("should value be passed", () => {
        [null, undefined, 1, true, false, "test", {}].forEach((value) => {
            new Promise((resolve, reject) => {
                resolve(value);
            })
                .then((res) => {
                    expect(res).toBe(value);
                    return res;
                })
                .then((res) => {
                    expect(res).toBe(value);
                    return res;
                });
        });
        [null, undefined, 1, true, false, "test", {}].forEach((value) => {
            new Promise((resolve, reject) => {
                reject(value);
            })
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
