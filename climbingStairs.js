/**
 * @param {number} n
 * @return {number}
 */
const dic = {};
var climbStairs = function (n) {
    // 4 > [ 1 1 1 1 | 2 2 | 1 2 1 | 2 1 1 | 1 1 2 ]
    if (dic[n]) return dic[n];
    if (n <= 2) return n;
    dic[n] = climbStairs(n - 1) + climbStairs(n - 2);

    return dic[n];
};

console.log(climbStairs(99));