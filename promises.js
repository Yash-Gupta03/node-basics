const { promises } = require("stream");

console.log("a");

console.log("b");

async function sequence() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c");
      resolve();
    }, 3000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("d");
      resolve();
    }, 0);
  });

  console.log("e");
}

sequence();
