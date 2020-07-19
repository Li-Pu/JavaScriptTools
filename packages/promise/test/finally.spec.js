import Promise from "../src/index";

describe("test with Promise.finally method", () => {
    test("should executor be called", () => {
        let a = 1;
        Promise.resolve(2).finally(() => {
            a++;
        });
        setTimeout(() => expect(a).toBe(2), 0);
        Promise.reject(2)
            .catch((e) => {})
            .finally(() => a++);
        setTimeout(() => expect(a).toBe(3), 0);
    });
});
