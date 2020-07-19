import Promise from "./promise";
import then from "./then";
import resolve from './resolve';
import reject from './reject';

Promise.prototype.then = then;
Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
};

Promise.resolve = resolve;
Promise.reject = reject;

export default Promise;
