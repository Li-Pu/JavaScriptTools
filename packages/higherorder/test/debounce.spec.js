import debounce from "../src/debounce/index";

describe("test debounce function", () => {
    it("debounce without immediate", () => {
        let test = 1;
        function testPlus(addCount = 1) {
            test += addCount;
        }
        let dTestPlus = debounce(testPlus, 1000);
        dTestPlus();
        dTestPlus();
        dTestPlus();
        dTestPlus();
        dTestPlus();
        setTimeout(() => {
            expect(test).toBe(2);
            dTestPlus(2);
            dTestPlus(3);
            dTestPlus(4);
            dTestPlus(5);
            dTestPlus(6);
            setTimeout(() => {
                expect(test).toBe(4);
            }, 1000);
        }, 1000);
    });
    it("debounce with immediate", () => {
        let test = 1;
        function testPlus() {
            test++;
        }
        let dTestPlus = debounce(testPlus, 1000, true);
        dTestPlus();
        expect(test).toBe(2);
        dTestPlus();
        dTestPlus();
        dTestPlus();
        dTestPlus();
        setTimeout(() => {
            expect(test).toBe(2);
            dTestPlus(2);
            expect(test).toBe(4);
            dTestPlus(3);
            dTestPlus(4);
            dTestPlus(5);
            dTestPlus(6);
        }, 1000);
    });
});
