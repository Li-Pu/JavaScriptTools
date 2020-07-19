export default function throttle(func, delay, immediate = false) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;

        if (!timer) {
            if (immediate) {
                func.apply(context, args);
                timer = setTimeout(() => {
                    timer = null;
                }, delay);
            } else {
                timer = setTimeout(() => {
                    func.apply(context, args);
                    timer = null;
                }, delay);
            }
        }
    };
}
