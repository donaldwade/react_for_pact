import test from 'blue-tape';

const myFunction = (yes) => {
  return new Promise((resolve, reject) => {
    if (yes) {
      resolve(() => {
        console.log("Resolving");
        return "BOOOO";
      });
    } else {
      reject(() => {
        console.log("Rejecting");
        return "YOOOO";
      });
    }
  });
}

// myFunction(true)
//   .then((response) => {
//     console.log(response());
//     console.log("Yere")  
//   }).catch((response) => {
//     console.log(response());
//     console.log("Were")  
//   })
// 
// myFunction(false)
//   .then((response) => {
//     console.log(response());
//     console.log("Were")  
//   }).catch((response) => {
//     console.log(response());
//     console.log("Were")  
//   })

// test("Function resolves", (t) => {
//   return myFunction(true)
//     .then((response) => {
//       t.ok(response() === "BOOOO")
//     });
// })
// 
// test("Function rejects", (t) => {
//   return t.shouldFail(myFunction(false))
// });
// 
// test("Function should reject with 'YOOOO'", (t) => {
//   return myFunction(false)
//     .catch((response) => {
//       t.ok(response() === "YOOOO")
//     });
// });
