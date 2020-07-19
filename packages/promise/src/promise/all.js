export default function all(promises) {
    let results = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((res) => {
                results[index] = res;
                if (++count === promises.length) {
                    resolve(results);
                }
            }, reject);
        });
    });
}
