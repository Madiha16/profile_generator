const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question('What do you listen to while doing that? ', (listenTo) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (dish) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
              console.log(`Thank you for your valuable feedback: ${name} loves listening to ${listenTo}
              while ${activity}, devouring ${dish} for ${meal}, prefers ${sport} over any other sport,
              and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

// // 3 nested cb funcs
// rl.question(`1 `, (name) => {
//   rl.question(`2 `, (activity) => {
//     rl.question('3 ', (music) => {
//       rl.close();
//     });
//   });
// });


// rl.question('3 ', (music) => {
//   rl.close();
// });