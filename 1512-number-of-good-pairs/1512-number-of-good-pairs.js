var numIdenticalPairs = function(nums) {
    var count  = 0;
    var map = new Map;
    for (let i in nums) {
        var arr = [i];
        if(map.has(nums[i])) {
            map.get(nums[i]).push(i);
        }
        else map.set(nums[i], arr);
    }

    map.forEach((values, key) => {
       var n = values.length;
       if(n > 1) {
            if (n === 2) {
               count += 1 *1;
            } else {
                count += 1*n*(n-1)/2;
            }
        }
    })

    return count;
};
