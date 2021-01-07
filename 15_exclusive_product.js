// 2021-01-02
function exclusiveProduct(nums) {
    let overallProduct = null;
    let retVal = [];
    for (let index in nums) {
        let item = exclusiveProductHelper(overallProduct, index, nums);
        overallProduct = item.overallProduct;
        retVal.push(item.product);
    }
    return retVal;
}

function exclusiveProductHelper(overallProduct, index, nums) {
    if (!overallProduct) {
        overallProduct = 1;
        for (let num of nums) {
            overallProduct = overallProduct *= num;
        }
        let product = overallProduct / nums[0];
        return {product: product, overallProduct: overallProduct};
    } else {
        let divisor = nums[index];
        let dividend = overallProduct;
        return {product: dividend/divisor, overallProduct: overallProduct};
    }
}

console.log(exclusiveProduct([1, 2, 3]))

// runtime: O(n) yeees
// space: O(n) yes? yes