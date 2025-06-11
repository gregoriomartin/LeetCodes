/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [];
    let i = 0;
    let y = 0;
    while (i < nums1.length || y < nums2.length) {
        if (nums1[i] > nums2[y] || i >= nums1.length) {
            arr.push(nums2[y]);
            y++;
        }
        else
        {
            arr.push(nums1[i]);
            i++;
        }
    }

    if(arr.length % 2 !== 0){
        return arr[Math.floor(arr.length / 2)];
    }
    
    return (arr[(arr.length / 2)] + arr[(arr.length / 2 - 1)]) / 2;
};

console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5