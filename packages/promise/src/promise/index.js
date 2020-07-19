import Promise from "./promise";
import then from "./then";
import resolve from './resolve';
import reject from './reject';
import all from './all';
import race from './race';

Promise.prototype.then = then;
Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
};

Promise.resolve = resolve;
Promise.reject = reject;
Promise.all = all;
Promise.race = race;

export default Promise;
