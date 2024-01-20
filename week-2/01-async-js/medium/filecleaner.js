const fs = require("fs");

function readdata() {
  return new Promise((resolve) => {
    const data = fs.readFile("filetoberead.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

function cleandata(data) {
  return new Promise((resolve) => {
    data = data.split(" ");
    console.log(data);
    let res = [];
    for (let i = 0; i < data.length; i++) {
      if (!data[i].includes(" ")) {
        res.push(data[i]);
      }
    }
    console.log(res);
    resolve(res.join(" "));
  });
}
function writedata(data) {
  return new Promise((resolve) => {
    fs.writeFile("cleanedfile.txt", data, (err) => {
      if (err) {
        throw Error("An error occured");
      }
      console.log(data);
      resolve("Success");
    });
  });
}

readdata().then((data) => {
  cleandata(data).then((data) => {
    writedata(data).then((data) => {
      console.log(data);
    });
  });
});
