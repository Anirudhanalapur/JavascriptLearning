const arr = ['a', 'b', 'c'];

Array.prototype.MyReducer = function(cb, initialValue) {
    let acc = initialValue;
    for(let i = 0; i<this.length; i++) {
       acc =  cb(acc, this[i], i)
    }
    return acc
}


const opp =  arr.MyReducer((accumulator, current) => {
    return {...accumulator, [current]: current}
}, {})

console.log(opp);



// Array.prototype.anirudhMap = function(cb) {
//     let newArry = [];
//     for(let i = 0; i<this.length; i++) {
//        newArry.push(cb(this[i], i , this));
//     }
//     return newArry;
// }

// var multiplyNums = nums.anirudhMap((item, i , arr) => {
//     return {index: i, mul: item*3}
// })

// console.log(multiplyNums);
// // ----------------------------------------------------------------------------------------

// var filterNums = nums.filter((item, i) => {
//     return item > 1;
// })

// console.log(filterNums);

// Array.prototype.anirudhFilter = function(cb) {
//     let newArry = [];
//     for(let i = 0; i<this.length; i++) {
//         if(cb(this[i], i , this)) {
//             newArry.push(this[i]);
//         }
//     }
//     return newArry;
// }

// var filterNums = nums.anirudhFilter((item, i , arr) => {
//     return item > 1;
// })
// console.log(filterNums);
// // ----------------------------------------------------------------------------------------