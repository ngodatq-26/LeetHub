/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    var a = num.toString();
    var arr = [];
    for (let i = 0; i < a.length; i++) {
        arr.push(a[i]);
    }
    arr.sort();
    var num1 = arr[0] + arr[2];
    var num2 = arr[1] + arr[3];
    console.log(num1, num2)
    return num1*1 + num2 *1;
};
