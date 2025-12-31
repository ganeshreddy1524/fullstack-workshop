function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);
    }
    return result;
}

function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

function myreduce(arr, callback, initialValue) {
    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }
    return result;
}

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
}

function myFlat(arr, depth = 1) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (Array.isArray(value) && depth > 0) {
            let flattened = myFlat(value, depth - 1);
            for (let j = 0; j < flattened.length; j++) {
                result[result.length] = flattened[j];
            }
        } else {
            result[result.length] = value;
        }
    }
    return result;
}

// Output using template literals
console.log(`myMap result: ${myMap([1, 3, 4], x => x * 2)}`);
console.log(`myFilter result: ${myFilter([1, 2, 3, 4], x => x > 2)}`);
console.log(`myReduce result: ${myreduce([1, 2, 3], (a, b) => a + b, 0)}`);
console.log(`myFind result: ${myFind([1, 2, 3], x => x > 1)}`);
console.log(
    `myFlat result: ${myFlat([1, [2, [3, [4, [5, [6]]]]]], 3)}`
);

// Demo use of array method (review suggestion)
[myMap, myFilter, myreduce, myFind, myFlat].map(fn =>
    console.log(`Function implemented: ${fn.name}`)
);
