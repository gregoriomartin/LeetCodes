/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let current = nums[0];
    let index = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > current) {
            current = nums[i];
            index++;
            nums[index] = current;
        }
    }

    return index + 1;
};