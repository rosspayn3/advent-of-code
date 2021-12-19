const fs = require("fs");

const readings = fs.readFileSync("input.txt", "utf8").split("\r\n");

// console.log(readings);

let numLarger = 0;
let prevReading = parseInt(readings[0]);

readings.forEach((reading) => {
    if (parseInt(reading) > prevReading) {
        numLarger++;
    }
    prevReading = reading;
});

console.log(numLarger);
