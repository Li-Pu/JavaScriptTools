export default function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        reject(new TypeError("Chaining cycle detected for promise"));
    }
    let called;
    if (
        x !== null &&
        x !== undefined &&
        (typeof x === "object" || typeof x === "function")
    ) {
        try {
            let then = x.then;
            if (typeof then === "function") {
                then.call(
                    x,
                    (y) => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    (r) => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                );
            } else {
                resolve(x);
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}
