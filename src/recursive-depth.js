module.exports = class DepthCalculator {
    calculateDepth(arr) {
    let depth = 1;
    
        for (let i = 0; i < arr.length; i ++) {
        let interimDepth = 1;
        if (arr[i] instanceof Array) {
        interimDepth += this.calculateDepth(arr[i]);
        if (interimDepth > depth) {
        depth = interimDepth;
        }
        };
        };
    return depth;
    }
}