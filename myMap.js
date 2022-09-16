/*          Viết 3 methods myMap, myFilter, myReduce của Array 
sao cho công dụng và cách dùng giống với map, filter, reduce (sử dụng prototype của Array, this trong JS)*/

// myMap
Array.prototype.myMap = function(callbackFunction) {
    let ans = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] == null)
            continue;
        ans.push(callbackFunction(this[i]));
    }
    return ans;
}
const arr1 = [0, 1, 2, 3, 4];

const tripleArr1 = arr1.myMap(x => x * 3);

console.log(tripleArr1);
//[ 0, 3, 6, 9, 12 ]