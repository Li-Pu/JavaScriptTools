import Status from "./status";
import resolvePromise from "./resolvePromise";

export default function then(onFulfilled, onRejected) {
    onFulfilled =
        typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
        typeof onRejected === "function"
            ? onRejected
            : (err) => {
                  throw err;
              };
    let promise2 = new Promise((resolve, reject) => {
        if (this.status === Status.FULFILLED) {
            setTimeout(() => {
                try {
                    let x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        } else if (this.status === Status.REJECTED) {
            try {
                setTimeout(() => {
                    let x = onRejected(this.error);
                    resolvePromise(promise2, x, resolve, reject);
                }, 0);
            } catch (e) {
                reject(e);
            }
        } else {
            this.onResolvedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            });
            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.error);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            });
        }
    });
    return promise2;
}
