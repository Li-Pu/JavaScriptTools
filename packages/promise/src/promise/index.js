import Promise from "./promise";
import then from "./then";
import resolve from "./resolve";
import reject from "./reject";
import all from "./all";
import race from "./race";

Promise.prototype.then = then;
Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
};
Promise.prototype.finally = function (callback) {
    let constructor = this.constructor;
    if (typeof callback === "function") {
        return this.then(
            (value) => constructor.resolve(callback()).then(() => value),
            (error) =>
                constructor.resolve(callback()).then(() => {
                    throw error;
                })
        );
    }
    return this.then(callback, callback);
};

Promise.resolve = resolve;
Promise.reject = reject;
Promise.all = all;
Promise.race = race;

export default Promise;
