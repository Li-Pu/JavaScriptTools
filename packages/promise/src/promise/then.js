import Status from "./status";
import resolvePromise from "./resolvePromise";

export default function then(onFulfilled, onRejected) {
    let promise2 = new Promise((resolve, reject) => {
        if (this.status === Status.FULFILLED) {
            setTimeout(() => {
                let x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject);
            }, 0);
        } else if (this.status === Status.REJECTED) {
            setTimeout(() => {
                let x = onRejected(this.error);
                resolvePromise(promise2, x, resolve, reject);
            }, 0);
        } else {
            this.onResolvedCallbacks.push(() => {
                setTimeout(() => {
                    let x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                }, 0);
            });
            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    let x = onRejected(this.error);
                    resolvePromise(promise2, x, resolve, reject);
                }, 0);
            });
        }
    });
    return promise2;
}
