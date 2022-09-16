 // Tìm 2 phần tử có tổng lớn nhất trong 1 mảng
 // VD: [1,7,9,2,5,3,8] => [9,8]

 const arr = [1, 7, 9, 2, 5, 3, 8];

 const sortArr = arr.sort((a, b) => a - b);

 const theTwoMax = [sortArr[sortArr.length - 2], sortArr[sortArr.length - 1]];

 console.log(theTwoMax)

 // [ 8, 9 ]
