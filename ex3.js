/*Tìm các cặp phần tử có tổng bằng 1 số cho trước
VD: [1,7,9,2,5,3,8]; sum = 10   => [1,9] ; [7,3]; [2,8]
*/
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
// [ [ 1, 9 ], [ 7, 3 ], [ 2, 8 ] ]
