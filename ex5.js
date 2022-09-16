/* Lấy ra 1 mảng mới gồm các phần tử trùng nhau trong 2 mảng, mỗi phần tử xuất hiện đúng 1 lần ở mảng mới
const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
=> [3,5,9]
*/

const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
const output = arr2.filter(function(obj) {
    return arr1.indexOf(obj) !== -1;
});
console.log(output);

// [ 3, 5, 9 ]