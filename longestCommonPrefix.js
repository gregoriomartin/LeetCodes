/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // agarro la string mas corta
    let prefix = "";
    let smallerStr = strs[0];
    for (let str of strs) {
        if (smallerStr.length > str.length) {
            smallerStr = str;
        }
    }

    // recorro las strings
    // mientras el prefix sea igual agarro el prefix y lo guardo
    for (let i = 0; i < smallerStr.length; i++) {
        for (let str of strs) {
            if (str[i] != smallerStr[i]) {
                return prefix;
            }
        }
        prefix += smallerStr[i];
    }

    return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"