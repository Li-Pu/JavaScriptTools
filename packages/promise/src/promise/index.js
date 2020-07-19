import Promise from "./promise";
import then from "./then";

Promise.prototype.then = then;
Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
};

export default Promise;
