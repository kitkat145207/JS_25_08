/*
Trả về 1 mảng gồm các phần tử giống nhau trong 2 mảng
VD: array1 = [1,2,3,4,5,6];
	array2 = [3,4,8,9,12];
	=> [3,4]
*/
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
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 8, 9, 12];
var newArr = [];
newArr = same(arr1, arr2);
console.log(newArr)
    // [ 3, 4 ]
