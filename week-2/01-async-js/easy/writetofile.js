//Solved

const fs = require("fs");

function writedata() {
  const data = "This is the dataa to be written";
  return new Promise((resolve) => {
    fs.writeFile("writtenfile.txt", data, (err) => {
      if (err) {
        throw Error("An error occured");
      }
      resolve("Success");
    });
  });
}

writedata().then((data) => {
  console.log(data);
});
