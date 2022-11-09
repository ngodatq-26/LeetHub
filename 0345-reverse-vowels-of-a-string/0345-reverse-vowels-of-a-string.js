/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var str = [];
    for (let i = 0; i < s.length; i ++) {
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U' ) {
            str.push(s[i]);
        }
    }
    str.reverse();
    var j =0;
    var str2 = [];
    for (let i = 0; i < s.length; i++) {
        str2[i] = s[i];
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U' ) {
            str2[i]= str[j];
            j++;
        }
    }
    var result = str2.join("");
    return result;
};