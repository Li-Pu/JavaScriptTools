import Status from "./status";

export default function then(onFulfilled, onRejected) {
    if (this.status === Status.FULFILLED) {
        setTimeout(() => {
            onFulfilled(this.value);
        }, 0);
    } else if (this.status === Status.REJECTED) {
        setTimeout(() => {
            onRejected(this.error);
        }, 0);
    } else {
        this.onResolvedCallbacks.push(() => {
            setTimeout(() => {
                onFulfilled(this.value);
            }, 0);
        });
        this.onRejectedCallbacks.push(() => {
            setTimeout(() => {
                onRejected(this.error);
            }, 0);
        });
    }
}
