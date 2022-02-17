const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};

//create an empty object
//use answers.1 = answer
//answer.2 = answer2
//use string literals to console log paragraph at end

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('q2??', (answer2) => {
    console.log(`Thank you for answering twice: ${answer2}`);
    rl.question('q3', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
    });
  });
  rl.close();
});

// //// works in repl
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // rl.question(`1 `, (name) => {
// //   rl.question(`2 `, (activity) => {
// //     rl.question('3 ', (music) => {
// //       rl.close();
// //     });
// //   });
// // });

// rl.question('first q. music? ', (music) => {
//   rl.question("second q. food! ", (food) => {
//     console.log(`your fav music is ${music} and fav food is ${food}.`)
//     rl.close(); 
//   })
// });












// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.question("What's your name? Nicknames are also acceptable :)", (answer2) => {
//     console.log(`Thank you for your valuable feedback: ${answer2}`);
//     rl.question('What do you think of Node.js? ', (answer3) => {
//       console.log(`Thank you for your valuable feedback: ${answer2}`);
//       rl.question('What do you think of Node.js? ', (answer4) => {
//         console.log(`Thank you for your valuable feedback: ${answer2}`);
//         rl.question('What do you think of Node.js? ', (answer5) => {
//           console.log(`Thank you for your valuable feedback: ${answer2}`);
//           rl.question('What do you think of Node.js? ', (answer6) => {
//             console.log(`Thank you for your valuable feedback: ${answer2}`);
//             rl.question('What do you think of Node.js? ', (answer7) => {
//               console.log(`Thank you for your valuable feedback: ${answer2}`);
//               rl.question('What do you think of Node.js? ', (answer8) => {
//                 console.log(`Thank you for your valuable feedback: ${answer2}`);
//               });
//             });
//           });
//         });
//       });
//     });
//   });

//   rl.close();
// });