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


//myFilter
Array.prototype.myFilter = function(callbackFunction) {
    let ans = []
    for (let i = 0; i < this.length; i++) {
        if (callbackFunction(this[i]))
            ans.push(this[i])
    }

    return ans;
}


//myReduce
Array.prototype.myReduce = function(callbackFunction) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined || this[i] === null) {
            continue;
        }
        ans = callbackFunction(ans, this[i], i, this);
    }
    return ans;
};