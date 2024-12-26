let temp = [1, 3,4]

// temp[5] = 'anirudh123';
// temp[6] = 'anirudh';

const afrom = Array.from(temp);

console.log(afrom);
console.log(temp);



function NotArray(length) {
    console.log('test', length)
}

console.log(Array.from.call(NotArray, {length: 1, 0: 'a'}))