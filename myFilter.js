/*          Viết 3 methods myMap, myFilter, myReduce của Array 
sao cho công dụng và cách dùng giống với map, filter, reduce (sử dụng prototype của Array, this trong JS)*/

//myFilter
Array.prototype.myFilter = function(callbackFunction) {
    let ans = []
    for (let i = 0; i < this.length; i++) {
        if (callbackFunction(this[i]))
            ans.push(this[i])
    }

    return ans;
}

const arr1 = [3, 6, 9, 12, 100, 101, 102];
const oddArr = arr1.myFilter(x => x % 2 == 1)
console.log(oddArr)
    // [ 3, 9, 101 ]