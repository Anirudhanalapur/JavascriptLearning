
// function print12(n , i, arr) {
//     if(i === n) {
//         console.log(arr);
//         return;
//     };
//     arr[i] = 1;
//     print12(n, i+ 1, arr);
//     arr[i] = 2;
//     print12(n, i+ 1, arr);
// }


// print12(2, 0, [])


// [1,1]
// [1,2]
// [2,1]
// [2,2]


let arr = [1,2,4,6,8]


function getSum(a, b) {
   let ps = convertToPS();
   if(a === 0) {
    return ps[b]   
   }
   return ps[b]- ps[a-1];
}


function convertToPS() {
    let ps = [];
    ps[0] = arr[0];
    for (let i = 1; i <= arr.length - 1; i++) {
        ps[i] = ps[i - 1] + arr[i];
    }
    return ps;
}


const psSumAns = getSum(0,3);
console.log(psSumAns);


let arr1 = [0, 0, 0, 0, 0]


function PsSumForGivenIndices(query) {
    let index = 0;
    while (index < query.length) {
        index++;
    }
}

PsSumForGivenIndices([[0,4], [1,3]])