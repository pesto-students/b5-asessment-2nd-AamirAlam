
// Foreach array function implementation
Array.prototype.customForEach = function (callbackFunc) {
    // console.log(arguments[0].length)
    for (const [index, value] of this.entries()){
        callbackFunc(value, index, this)
    }
}

// map array function implementation
Array.prototype.customMap = function (callbackFunc) {
    // console.log(this)
    let res = []
    for(const [index, value] of this.entries() ) {
        res.push(callbackFunc(value, index, this))
    }

    return res;
}



// filter array function implementation

Array.prototype.customFilter = function (callbackFunc) {
    let res = [];
    for(const [index, value] of this .entries() ) {
        callbackFunc(value, index, this) ? res.push(value) : "pass";
    }
    return res;
}


// reduce array function implementation

Array.prototype.customReduce = function (callbackFunc, initialAccumulatorValue) {
    let res = initialAccumulatorValue;
    for(const [index, value] of this .entries() ) {
        res  =  callbackFunc(res, value)
    }
    return res;
}



export {
  forEach,
  map,
  filter,
  reduce,
}
