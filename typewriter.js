const typeWriter = function (sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
      // avoid automatically adding an extra "newline character" at the end each time.
    }, delay); // <= 1s delay to make it noticeable. Can dial it down later.
    (delay += 50), "\n";
  }
};

typeWriter("hello there from lighthouse labs");

// const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   setTimeout(() => {
//     // print the char here
//   }, 1000); // <= 1s delay to make it noticeable. Can dial it down later.

//   process.stdout.write(char);
// }
