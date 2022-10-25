/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var size = s.length;
    var str = '';
    for (let i = size - 1; i >= 0; i -- ) {
        str = str + s[i];
    }

    var arr = str.split(" ");
    for (let i = 0; i < Math.round(arr.length/ 2); i ++) {
      var num = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i -1] = num;
    }

    s = arr.join(" ");
    return s;
};
