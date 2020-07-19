export default function reject(error) {
    return new Promise((resolve, reject) => reject(error));
}
