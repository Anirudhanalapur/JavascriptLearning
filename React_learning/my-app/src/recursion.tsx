// import { useEffect, useState } from 'react';
// import './App.css'


// function App() {
//   // RECURSION PROBLEMS

//   // function flattenArray(arrData: any[]) {
//   //   const result: any[] =[];
//   //   for(let i = 0 ; i< arrData.length; i++) {
//   //     if(Array.isArray(arrData[i])) {
//   //       const flattenArr = flattenArray(arrData[i]);
//   //       result.push(...flattenArr)
//   //     } else {
//   //       result.push(arrData[i])
//   //     }
//   //   }

//   //  return result
//   // }

//   // function returnFirstRepeatingChar(str: string) {
//   //   let charCount: any = {}
//   //   for(let char of str) {
//   //     // strChar[char] !== undefined ?  (strChar[char] += 1)   : (strChar[char] = 1)
//   //     charCount[char] = (charCount[char] || 0) + 1;
//   //   }
//   //   for(let nonRepChar of str) {
//   //     if(charCount[nonRepChar] == 1) {
//   //         return nonRepChar
//   //       }
//   //   }
//   // }

//   // function writeFactorialOfNumberUsingRecursion(num: number): number {
//   //   if(num == 1 || num == 0) {
//   //     return 1
//   //   } else {
//   //     return num * (writeFactorialOfNumberUsingRecursion(num - 1));
//   //   }
//   // }

//   // function printIntegersInRange(a , b) {
//   //   let rangeStr  = ''
//   //   if(a < b -1) {
//   //     a = a + 1;
//   //     rangeStr = rangeStr.concat(a);
//   //     rangeStr = rangeStr.concat(printIntegersInRange(a, b));
//   //   }
//   //   return rangeStr;
//   // }

//   function getUserData(userId) {
//     // setTimeout(() => {
//     //   console.log('Fetching user data...');
//     //   callback({ id: userId, name: 'John' });
//     // }, 1000);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Fetching user data...');
//        resolve({ id: userId, name: 'John' });
//       }, 1000);
//     })

//   }
  
//   function getUserPosts(userId) {
//     // setTimeout(() => {
//     //   console.log('Fetching user posts...');
//     //   callback(['post1', 'post2']);
//     // }, 1000);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Fetching user posts...');
//        resolve(['post1', 'post2']);
//       }, 1000);
//     })
//   }
  
//   function getPostComments(postId) {
//     // setTimeout(() => {
//     //   console.log('Fetching post comments...');
//     //   callback(['comment1', 'comment2']);
//     // }, 1000);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Fetching post comments...');
//        resolve(['comment1', 'comment2']);
//       }, 1000);
//     })
//   }
  
//   // Nested callbacks (Callback Hell):
 

// useEffect(() => {
 
  
//   // getUserData(1, (user) => {
//   //   console.log(`User: ${user.name}`);
//   //   getUserPosts(user.id, (posts) => {
//   //     console.log(`Posts: ${posts}`);
//   //     getPostComments(posts[0], (comments) => {
//   //       console.log(`Comments: ${comments}`);
//   //     });
//   //   });
//   // }));

//   // const fetchData = async () => {
//   //   const userData = await getUserData(1);
//   //   console.log(userData);
//   //   const userPost  = await getUserPosts(userData.id)
//   //   console.log(userPost);
//   //   const postComments  = await getPostComments(userPost[0])
//   //   console.log(postComments);

    
//   // }

//   fetchData();
  
//   // let arr = [1, 2,3, [4,5,6, [7,8]]]
//   // const arrf = flattenArray(arr)
//   // console.log(arrf);
//   // console.log(returnFirstRepeatingChar('swiss'));  
//   // console.log(writeFactorialOfNumberUsingRecursion(3));
//   // console.log(printIntegersInRange(1, 9));
// }, [])

//   return (

//     <></>
//       // <BuggyComp />

//   )
// }

// export default App;
 