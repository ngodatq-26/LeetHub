/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var size = s.length;
    for (let i = 0; i < Math.round(size/2); i ++ ) {
        var num = s[i]
        s[i] = s[size - 1 -i];
        s[size - i -1] = num
    }
};