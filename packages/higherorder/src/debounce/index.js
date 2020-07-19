import { canInstrument } from "babel-jest";

export default function debounce(func, delay, isImmediate = false) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        if (timer) clearTimeout(timer);
        if (isImmediate) {
            let rightNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (rightNow) func.apply(context, args);
        } else {
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        }
    };
}
