/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // [1,2,3,0,0,0] - [2,5,6]
    // [1,2<,2,3,5<,6<]

    // Pick next n1 and n2, who is bigger?
    // . the bigger one needs to be accomodated to the last space
    // . repeat


    let pN1 = m - 1; // 2
    let pN2 = n - 1; // 2
    let p = nums1.length - 1; // 5
    while (pN1 >= 0 || pN2 >= 0) { // 
        let current;
        if (pN1 < 0 || pN2 < 0) {
            current = pN1 === 0 ? nums2[pN2] : nums1[pN1];
            pN2--;
        }
        else if (nums1[pN1] < nums2[pN2]) {
            current = nums2[pN2];
            pN2--;
        }
        else {
            current = nums1[pN1];
            pN1--;
        }

        nums1[p] = current;
        p--;
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]