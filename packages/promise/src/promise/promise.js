import Status from "./status";

export default class Promise {
    constructor(executor) {
        this.status = Status.PENDING;
        this.value = undefined;
        this.error = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = (value) => {
            if (this.status === Status.PENDING) {
                this.status = Status.FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.forEach((fn) => fn());
            }
        };
        let reject = (error) => {
            if (this.status === Status.PENDING) {
                this.status = Status.REJECTED;
                this.error = error;
                this.onRejectedCallbacks.forEach((fn) => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
}
