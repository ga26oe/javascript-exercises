const removeFromArray = function(arr, ...nums) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (nums.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }
    return arr;
};


module.exports = removeFromArray;