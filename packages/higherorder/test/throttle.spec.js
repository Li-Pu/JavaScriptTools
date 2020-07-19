import throttle from "../src/throttle/index";
describe("test throttle function", () => {
    it("throttle without immediate", () => {
        let test = 1;
        function testPlus(addCount = 1) {
            test += addCount;
        }
        let dTestPlus = throttle(testPlus, 1000);
        dTestPlus();
        setTimeout(() => {
            expect(test).toBe(2);
            dTestPlus();
            setTimeout(() => {
                expect(test).toBe(3);
            }, 1000);
            dTestPlus();
            dTestPlus();
            dTestPlus();
            dTestPlus();
        }, 1000);
        dTestPlus();
        dTestPlus();
        dTestPlus();
        dTestPlus();
    });
    it("throttle with immediate", () => {
        let test = 1;
        function testPlus() {
            test++;
        }
        let dTestPlus = throttle(testPlus, 1000, true);
        dTestPlus();
        expect(test).toBe(2);
        setTimeout(() => {
            expect(test).toBe(2);
            dTestPlus();
            expect(test).toBe(3);
        }, 1000);
        dTestPlus();
        dTestPlus();
        dTestPlus();
        dTestPlus();
    });
});
