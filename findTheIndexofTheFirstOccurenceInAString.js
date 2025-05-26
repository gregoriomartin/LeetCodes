/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            let x = i;
            let y = 0;
            while (haystack[x] == needle[y]) {
                x++;
                y++;
                if (y == needle.length) {
                    return i;
                }
            }
        }
    }
    return -1;
};

console.log(strStr("mississippi", "issip")); // Output: 2