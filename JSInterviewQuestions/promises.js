//----------------------------------------------------------
// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Resolved promise');
//     }, 2000)
// })

// setTimeout(() => {
//     console.log('setTimeOut');
// }, 1000)

// // const p1 = Promise.resolve('Resolved promise')

// p1.then((data) => {
//     console.log(data);
// })
//----------------------------------------------------------





// const promise = new Promise((resolve, reject) => {
//     console.log('Request started');
//     setTimeout(() => resolve('Data fetched'), 1000);
// });

// async function promisesExamples() {
//     // const pr1 = new Promise((res, reject) => {
//     //     setTimeout(() => res('pr1'), 10000);
//     // })

//     // pr1.then((data) => console.log(data));
//     // const pr1 = new Promise((res, reject) => {
//     //     setTimeout(() => reject('pr1'), 10000);
//     // })

//     // pr1.catch((data) => console.log(data)).finally(() => console.log('promose done'));


//     // const pr1 = new Promise((res, reject) => {
//     //     setTimeout(() => reject('pr1'), 10000);
//     // })

//     // const p2 = Promise.resolve(2);

//     // const p3 = Promise.resolve(3);

//     // Promise.all([pr1,p2, p3]).then((data) => {
//     //     console.log(data);

//     // })

//     // try {
//     //     let data = await new Promise((res, rej) => {
//     //         setTimeout(() => res('fetched Data'), 10000);
//     //     })
//     //     return data
//     // }
//     // catch(err) {
//     //     console.log(err);
//     // }

// }

// promisesExamples().then((data) => console.log(data));




// // implement callback hell

// function printFn(str) {
//     console.log(str);
// }

// // function printWelcomeMessage(cb, timer) {
// //     setTimeout(() => {
// //         printFn('Welcome to callback hell')
// //         cb()
// //     }, timer)
// // }

// // function greet(cb, timer, name) {
// //     setTimeout(() => {
// //         console.log("Sit back for callback hell demo", name);
// //         cb()
// //     }, timer)
// // }

// // function declareAge(cb, timer) {
// //     setTimeout((...args) => {
// //         cb(...args)
// //     }, timer)
// // }

// // printWelcomeMessage(() => {
// //     greet(() => {
// //         declareAge(() => {
// //             console.log('End of demo.');
// //         }, 5000)
// //     }, 8000, 'anirudh')
// // }, 1000)

// // solution with promises

// function printWelcomeMessage(timer) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             printFn('Welcome to callback hell')
//             resolve();
//         }, timer)
//     })
// }

// function greet(timer) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Sit back for callback hell demo, this is rejected promise");
//             resolve();
//         }, timer)
//     })
// }

// function declareAge(timer) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("demo completed");
//             resolve();
//         }, timer)
//     })
// }

// async function helperFun() {
//     await Promise.all([
//         printWelcomeMessage(2000),
//         greet(2000),
//         declareAge(10000)
//     ]).then(() => {
//         console.log('inside promise.all');
//     });
// }

// helperFun();



function promAndSetTimeOut() {
    // const p1 = new Promise((res, reject) => {
    //     setTimeout(() => {
    //         res()
    //     })
    // })
    // p1.then(() => {
    //     console.log('Promise');
    // })

    // Promise.resolve().then(() => {
    //     console.log('Promise');
    // })

    // setTimeout(() => {
    //     console.log('setTimeout');
    // })

    console.log('Start'); // Main macrotask

    setTimeout(() => {
        console.log('Timeout 1'); // Macrotask
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promise 1'); // Microtask
    });

    setTimeout(() => {
        console.log('Timeout 2'); // Macrotask
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promise 2'); // Microtask
    });

    console.log('End'); // Main macrotask


}
// promAndSetTimeOut();


