/*          Viết 3 methods myMap, myFilter, myReduce của Array 
sao cho công dụng và cách dùng giống với map, filter, reduce (sử dụng prototype của Array, this trong JS)   */

// myReduce
Array.prototype.myReduce = function(callbackFunction) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined || this[i] === null) {
            continue;
        }
        ans = callbackFunction(ans, this[i], i, this);
    }
    return ans;
};

// Test with examples
const arr = [10, 22, 45, 0, 9]
const myArr = arr.reduce((acc, cur) => {
    acc.total += cur;
    acc.doubleArr.push(cur * 2);
    return acc;
}, { total: 0, doubleArr: [] });
console.log(myArr);

// { total: 86, doubleArr: [ 20, 44, 90, 0, 18 ] }