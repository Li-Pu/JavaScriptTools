import Status from "./status";

export default function then(onFulfilled, onRejected) {
    if (this.status === Status.FULFILLED) {
        onFulfilled(this.value);
    } else if (this.status === Status.REJECTED) {
        onRejected(this.error);
    } else {
        this.onResolvedCallbacks.push(() => {
            onFulfilled(this.value);
        });
        this.onRejectedCallbacks.push(() => {
            onRejected(this.error);
        });
    }
}
