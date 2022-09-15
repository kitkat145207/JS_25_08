let twoSum = (array, sum) => {
    let hashMap = {},
        results = []
    for (let i = 0; i < array.length; i++) {
        if (hashMap[array[i]]) {
            results.push([hashMap[array[i]], array[i]])
        } else {
            hashMap[sum - array[i]] = array[i];
        }
    }
    return results;
}
console.log(twoSum([1, 7, 9, 2, 5, 3, 8], 10));