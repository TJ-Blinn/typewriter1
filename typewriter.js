const greeting = "hello there from lighthouse labs";

const typeWriter = function (sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
      // process.stdout.write writing  -> out info to console, allows us to stay on the same line for output
      // avoid automatically adding an extra "newline character" at the end each time.
    }, delay); // <= 1s delay to make it noticeable. Can dial it down later.
    delay += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay);
  // delay will be sentence * 50 as it is increased throughout the for loop (line 11)
  // creating functionality to create a new line on Terminal (process.stdout.write) doesn't have this built in
  // process.stdout.write("\n");
};

typeWriter(greeting);

// for (const char of sentence) {
//   setTimeout(() => {
//     // print the char here
//   }, 1000); // <= 1s delay to make it noticeable. Can dial it down later.

//   process.stdout.write(char);
// }
