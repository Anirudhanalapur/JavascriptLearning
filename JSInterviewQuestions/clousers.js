function find(index) {
    let temp = []
    for (let i = 0; i < 100000; i++) {
        temp[i] = i;
    }
    return function () {
        console.log(temp[index]);
    }

}
// const clouser = find();
// console.time('6')
// clouser(7);
// console.timeEnd('6')
// console.time('61')
// clouser(7);
// console.timeEnd('61')

// ---------------------------------------------------------------------
function bigNumMuplity(num1, num2) {
    console.log(this);
    for (let i = 1; i <= 10000000; i++) { }
    return num1 * num2;
}
// ---------------------------------------------------------------------


function memoize(fn) {
    let cache = {};
    return function (...args) {
        const argsCache = JSON.stringify(args);
        if (cache[argsCache]) {
            console.log('from cache');
            return cache[argsCache]
        }
        const res = fn.call(this, ...args)
        cache[argsCache] = res;
        return res;
    }
}
const numMultiply = memoize(bigNumMuplity)
console.log( (200, 876));
console.log(numMultiply(200, 86));

// ---------------------------------------------------------------
function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}
console.log(add(1)(6)(100)(1001)());
// ---------------------------------------------------------------

function curry(fn) {
    console.log(fn.length);
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args); // If enough arguments, call the function
        } else {
            return function (...moreArgs) {
                return curried(...args, ...moreArgs); // Otherwise return a new function
            }
        }
    }
}

//   function add(a, b, c) {
//     return a + b + c;
//   }
function multiply(a, b, c) {
    return a * b * c;
}
const curriedAdd = curry(multiply);
console.log(curriedAdd(1)(2)(3)); // Output: 6

// ---------------------------------------------------------------
function asyncOp() {
    let res = 'init';
    setTimeout(function() {
        res = 'test';
        console.log(res);
    }, 1000)
    return function() {
        console.log(res);
    }
  }
  const asynHelp = asyncOp()();
// ---------------------------------------------------------------


