/*
Từ ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'] trả về object {'face': 2, 'zalo': 3, 'gmail':1}
*/

const arr = ['zalo', 'face', 'gmail', 'zalo', 'zalo', 'face'];
const arrayNoDuplicate = [...new Set(arr)]; // remove the same elements
const object = {} // create an empty object
arrayNoDuplicate.forEach((v2) => {
    // counter the number of appearing for each diferent element.
    let counter = 0
    arr.forEach((v1) => {
        if (v1 === v2) return counter++;
    });
    // create properties and assign index
    return object[v2] = counter++;
})

console.log(object);
// { zalo: 3, face: 2, gmail: 1 }