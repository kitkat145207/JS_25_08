function same(arr1, arr2) {
    var ans = [];
    for (let i of arr1) {
        for (let j of arr2) {
            if (i == j)
                ans.push(i);
        }
    }
    return ans;
}