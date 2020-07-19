import Promise from "./promise";
import then from "./then";

Promise.prototype.then = then;

export default Promise;
