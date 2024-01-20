//Solved

const fs = require("fs");

function readdata() {
  return new Promise((resolve) => {
    const data = fs.readFile("text.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

readdata().then((data) => {
  console.log(data);
});
