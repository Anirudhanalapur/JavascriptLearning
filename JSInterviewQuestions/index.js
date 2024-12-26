// // --------------------------------------------
// // let input = {
// //     A: (a,b,c) => a+ b + c,
// //     B: (a,b,c) => a - b - c
// // }
// // function compute(a,b,c) {
// //     let keys = Object.keys(input);
// //     let outputObject = {}
// //     for(let i = 0; i<keys.length; i++) {
// //         outputObject[keys[i]]= input[keys[i]](a,b,c)
// //     }
// //     return outputObject;  
// // }
// // console.log(compute(1,1,1));
// /* o/p = {
//     "A": 3,
//     "B": -1
// }*/
// // --------------------------------------------

// // Remove duplicates from Array
// function reduceFnc(arr) {
//     return arr.reduce((accumulator, current) => {
//         // if(!accumulator.includes(current)){
//         //     accumulator.push(current)
//         // }
//         if (!accumulator.some(item => JSON.stringify(item) === JSON.stringify(current))) {
//             accumulator.push(current);
//         }
//         return accumulator
//     }, [])
// }
// console.log(reduceFnc([{name: 'vijay', age: 20}, {name: 'tony', age: 20}, {name: 'vijay', age: 20}]));

// // --------------------------------------------
// // const obj = [{
// //     key: 'samp1',
// //     data: "data1"
// // },{
// //     key: 'samp2',
// //     data: "data2"
// // },{
// //     key: 'samp1',
// //     data: "data1"
// // },{
// //     key: 'samp4',
// //     data: "data4"
// // }];

// // function transformData() {
// //     const output = {}
// //     obj.forEach((data) => {
// //         if(data.key in output) {
// //             output[data.key].push(data)
// //         } else {
// //             output[data.key] = [data]
// //         }
// //     })
// //     console.log(output);
// // }

// // function transformData() {
// //     const output = obj.reduce((acc, { key, data }) => {
// //         if (!acc[key]) {
// //             acc[key] = [];
// //         }
// //         acc[key].push({ key, data });
// //         return acc;
// //     }, {});

// //     console.log(output);
// // }

// // transformData();
// // -------------------------------------------------------------------

// // function memoisedFunc(fn) {
// //     const cache = {};
// //     return function (...args) {
// //         const key = JSON.stringify(args);

// //         if (cache[key]) {
// //             console.log("fetching from cache");
// //             return cache[key];
// //         }
// //         console.log('calculating');
// //         const res = fn(...args);
// //         cache[key] = res;
// //         return res;
// //     }
// // }
// // const add = (a, b) => a * b;
// // const exe = memoisedFunc(add);
// // console.log(exe(100, 2));
// // console.log(exe(100, 2));

// // / -------------------------------------------------------------------

// function flatArray(arr) {
//     return arr.reduce((acc, current) => {
//         if (Array.isArray(current)) {
//             acc = acc.concat(flatArray(current))
//         } else {
//             acc.push(current)
//         }
//         return acc
//     }, [])
// }
// console.log(flatArray([1, 2, 3, [4, 5], [6, [7, 8]]]))

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function pal(str) {
//     let left = 0;
//     let right = str.length -1;
//     while (left< right) {
//         if(str[left].toLowerCase() !== str[right].toLowerCase())return false;
//         left++;right--;
//         return true;
//     }
// }
// console.log(pal('Level'));
// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // function revStr (str) {
// //     let strSplit = str.split('');
// //     const reversedStr = str.split('').reduce((accumulator, currentChar) => {
// //         return currentChar + accumulator;
// //       }, '');
// //       console.log(reversedStr);
// // }

// // revStr("Hello, World!")
// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'banana'];

// function countOcc() {
//     // let map = {};
//     // fruits.map((fruit)=> {
//     //     if(!map[fruit]) {
//     //         map[fruit] = 1;
//     //     } else {
//     //         map[fruit] += 1
//     //     }
//     // })
//     // return map;

//     return fruits.reduce((acc, curr) => {
//        if(!acc[curr]) {
//         acc[curr] = 1
//        } else {
//         acc[curr] += 1
//        }
//        return acc;
//     }, {})
// }
// console.log(countOcc());
// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // function sum (a) {
// //     return function (b) {
// //         return function(c) {
// //             return a + b + c;
// //         }
// //     }
// // }

// //---------------------------------------------------------------------------------------------------------------------

// // function strReverse(str) {
// //     let spacesObj = [];
// //     for (let i = 0; i < str.length; i++) {
// //         if (str[i].includes(' ')) {
// //             spacesObj.push(i);
// //         }
// //     }
// //     let reverseStr = '';
// //     for (let i = str.length - 1; i >= 0; i--) {
// //         reverseStr = reverseStr.concat(str[i])
// //     }
// //     reverseStr = reverseStr.split(' ').join('');
// //     for (let i = 0; i < reverseStr.length; i++) {
// //         if (spacesObj.includes(i)) {
// //             reverseStr = reverseStr.slice(0, i).concat(' ', reverseStr.slice(i));
// //         }
// //     }
// //     return reverseStr;
// // }

// // console.log(strReverse('Troubleshooting complex bugs in a React.js application'))

// //---------------------------------------------------------------------------------------------------------------------



// // (function x() {
// //     setTimeout(() => {
// //         console.log(i);
// //     }, 1000);

// //     var i = 1;
// // })();


// // [
// //     [6, 3, 0],
// //     [7, 4, 1],
// //     [8, 5, 2]
// // ]
// let m = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// // // Step 1: Transpose the array
// // let transposed = m[0].map((rowindex, colIndex) =>  console.log({rowindex, colIndex}));
// let transposed = m[0].map((_, colIndex) => m.map(row => row[colIndex]));

// console.log(transposed);


// // let result = transposed.map(row => row.reverse());

// // console.log(result);


// // for(let i = 0; i< m.length; i++) {
// //     console.log(m[i][i]);
    
// // }

// // for(let i = m.length -1; i>= 0; i--) {
// //     console.log(m[i][i]);
    
// // }


// let a = [1,2,3, [4,5,6], {A: '1  '}]

// function flatArray(a) {
//     let out = []
//     for(let i = 0; i<a.length; i++) {
//         if(Array.isArray(a[i])) {
//           out = out.concat(flatArray(a[i]));
//         // out.push(...flatArray(a[i]))
//         }
//         else {
//             out.push(a[i]);
//         }
//     }
//     return out;
// }

// console.log(flatArray(a));


// // Get the parent element
// // const parentList = document.getElementById('parent-list');

// // // Attach event listener to the parent
// // parentList.addEventListener('click', function(event) {
// //     // event.target is the actual clicked element
// //     if (event.target.tagName === 'LI') {
// //         console.log('Clicked item:', event.target.textContent);
// //     }
// // });


// // function greet(Hi) {
// //     return `${Hi}, my name is ${this.name}`;
// // }

// // const person = {
// //     name: 'Charlie'
// // };

// // const greetCharlie = greet.bind(person); // Create a new function with `this` bound to `person`
// // console.log(greetCharlie('hi'));
  



// // function generatePascal(n) {
// //     let output = [[1]];
    
// //     if(n === 1) return output;
    
// //     for(let i = 1; i< n; i++) {
  
// //       let temp = [];
      
// //       for(let j = 0; j <i+1; j++) {
// //       let num1 = output[i-1][j-1] ?? 0;
// //       let num2 = output[i-1][j] ?? 0;
// //       temp.push(num1 + num2);
// //       }
// //       output.push(temp)
// //     }

// //     return output;
  
// //   }

// //   console.log(generatePascal(3));





// // // ----------------------------------------------------------------------------------------
// const nums = [1, 2, 3, 4];

// // var multiplyNums = nums.map((item, i , arr) => {
// //     return {index: i, mul: item*3}
// // })

// // console.log(multiplyNums);



// // var reducedNum = nums.reduce((acc,current) => {
// //     return acc * current;
// // })

// // console.log(reducedNum);


// Array.prototype.anirudhReduce = function(cb, initialValue) {
//     let accumulator = initialValue;
//     for(let i = 0; i<this.length; i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], i, this): this[i];
//     }
//     return accumulator;
// }

// var reducedNum = nums.anirudhReduce((acc,current) => {
//     return acc * current;
// }, 0)

// console.log(reducedNum);

// // let view;
// // function likeTheVideo(counter) {
// //     view = 'Anirudha';
// //     let called = 0;
// //     return function() {
// //         if(called === 0) {
// //             console.log("subscribe to", view);
// //             called++;
// //         } else {
// //             console.log("already called");
// //         }
// //     }
// // }
// // let isCalled = likeTheVideo();
// // isCalled();
// // isCalled();
// // isCalled();
// // isCalled();


// // const a = Array.from('123');

// // console.log(a);
// // a.push(1);
// // console.log(a);


// let testArr = ['add', 'bbc', 'cac', 'asatt', 'abc'];
// // // o/p = [1, 1, 0];

// // function checkRepeatingAdjacentLetters() {
// //     let opArr =[];
// //     for(let i = 0; i< testArr.length; i++) {
// //         const singleStr = Array.from(testArr[i]);
// //         let currentLetter = '';
// //         for(let j = 0; j < singleStr.length; j++) {
// //             opArr[i] = 0;
// //             if(currentLetter === singleStr[j]) {
// //                 opArr[i] = 1;
// //                 break;
// //             }
// //             currentLetter =singleStr[j];
// //         }
// //     }
// //     console.log(opArr);
    
// // }

// // checkRepeatingAdjacentLetters()


// // function checkRepeatingAdjacentLettersOptimised() {
// //     return testArr.map((str) => {
// //         for(let i = 1; i<=str.length; i++) {
// //             if(str[i] === str[i-1]) {
// //                 return 1;
// //             }
// //         } 
// //         return 0;
// //         })
// // }

// // console.log(checkRepeatingAdjacentLettersOptimised());


// function memoize(fn) {
//     let cache = {}
//     return function(...args) {
        
         
//         const res = fn(...args);

//     }
// }

// const memoHelper = memoize(factorial)
// console.log(memoHelper(5));





// // 3 = 3 * 2 * 1

// function factorial(number) {
//     if(number == 0 || number === 1) return 1;
//     return number * factorial(number - 1)
// }
// // console.log(factorial(8));


// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];


// function countStr() {
//     return Object.fromEntries( 
//     arr.reduce((accumulator, current) => {
//             accumulator.set(current , (accumulator.get(current) || 0 ) + 1)
//             return accumulator
//     }, new Map()))
// } 

// console.log(countStr());

// // function countStr() {
// //     let occ = new Map();
// //     arr.forEach((data, i) => {
// //         occ.set(data, (occ.get(data) || 0) + 1);
// //     })
// //     console.log(occ);
// // }

// // countStr();

// // const arr = [1, 2, 3, 4, 1, 3, 5];

// // function findDup() {
// //     let dup = new Map();
// //     let dupNumArr = []
// //     // arr.forEach((data) => {
// //     //  dup.set(data, (dup.get(data) || 0) + 1 )
// //     // })

// //     // arr.forEach((data) => {
// //     //     if(dup.get(data) > 1 && dupNumArr.indexOf(data) === -1) {
// //     //         dupNumArr.push(data)
// //     //     }
// //     // })

// //     arr.forEach((data) => {
// //     if(dup.has(data)) {
// //         dupNumArr.push(data)
// //     } else {
// //         dup.set(data, true)
// //     }
// //     })
   

// //     console.log(dupNumArr);
    
// // }

// // findDup()

// function TwoSum(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i]; // Return indices of the two numbers
//         }
//         map.set(nums[i], i);
//     }
// }


// const res = TwoSum([1, 3,7,8], 9)
// console.log(res);

// function reverse(str) {
//     let reverseStr = ''
//     str.split(' ').forEach((data) => {
//         let reducedValue = data.split('').reduce((acc, current) => {
//             acc = current + acc;
//             return acc;
//         }, '')
//         reverseStr = reverseStr.concat(reducedValue) + ' ';
//     })
//     return reverseStr
// }

// console.log(reverse('Hello world smile'))


// // let nums2 = [1, -4, 2, 3];
// // function sort() {
// //     let temp;

// //     for( let i = 0; i < nums2.length; i++) {
// //         for(let j = i + 1; j< nums2.length; j++) {
// //             if(nums2[i] > nums2[j]) {
// //                 temp = nums2[i];
// //                 nums2[i] = nums2[j]
// //                 nums2[j] = temp;
// //             }
// //         }
// //     }

// //     console.log(nums2);
    
// // }

// // sort();


// let words = ["zanana", "apple", "cherry", "date"];

// function sortWordsAscending(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) { 
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const sortedWords = sortWordsAscending(words);
// console.log(sortedWords); // Output: ['apple', 'banana', 'cherry', 'date']



let a = [1, 2, 4, 7, 8]

let b = [3, 2, 1, 5]


function mergeTwoArr() {
    let aPointer = 0;
    let bPointer = 0
    let opArr = [];
    while(aPointer <a.length && bPointer < b.length){
        if(a[aPointer] < b[bPointer]) {
            opArr.push(a[aPointer])
            aPointer ++;
        } else {
            opArr.push(b[bPointer])
            bPointer++
        }
    }

    while(aPointer < a.length) {
        opArr.push(a[aPointer])
        aPointer++
    }

    while(bPointer < b.length) {
        opArr.push(bPointer);
        bPointer++
    }
    console.log(opArr);

    // (9) [1, 2, 3, 2, 1, 4, 5, 7, 8
    for(let i = 0; i<opArr.length - 1; i++) {
        for(let j = 0; j<opArr.length -1 -i; j++) {
            let temp
            if(opArr[j] > opArr[j+1]) {
                temp = opArr[j]
                opArr[j] = opArr[j+ 1]
                opArr[j + 1] = temp;
            }
        }
    }

    console.log(opArr);

    
}

// mergeTwoArr();


// function findMissingNumber(arr) {
//     const n = arr.length + 1;  // Since one number is missing, the length of array is n-1
//     const expectedSum = (n * (n + 1)) / 2;  // Sum of numbers from 1 to n
//     const actualSum = arr.reduce((sum, num) => sum + num, 0);  // Sum of elements in the array
//     return expectedSum - actualSum;  // The difference is the missing number
// }

// // Example usage
// let arr = [3, 7, 1, 2, 6, 4, 5];  // Missing number is 6
// console.log(findMissingNumber(arr))


// x();
// y();
// function x () {
//     console.log('anirudh');
// }

// const y = () => {
//     console.log('anirudh');
    
// }

// let obj1 = {}

// let obj2 = {}

// console.log(Object.is(obj1, obj2));

let obj = {
    name: 'anirudh',
    getName() {
        return `My name is ${this.name}`
    }
}

let objToBind = {
    name: 'sudha'
}

Object.prototype.myBind = function(context, ...args) {
    const targetFunction = this;
    return function (...bindArgs) {
      return targetFunction.call(
        context,
        args.concat(bindArgs)
      );
    };
}


const method = obj.myBind(objToBind);

method();















