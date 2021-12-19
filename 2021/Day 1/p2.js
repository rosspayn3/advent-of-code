const fs = require("fs");

const readings = fs.readFileSync("./input.txt", "utf8").split("\r\n");

// console.log(readings);

let numLarger = 0;
let sumA = 0,
    sumB = 0;

let a = readings.slice(0, 3);

a.forEach((number) => {
    sumA += parseInt(number);
});
console.log(a, sumA);

for (let index = 1; index < readings.length; index++) {
    let b = readings.slice(index, index + 3);
    b.forEach((number) => {
        sumB += parseInt(number);
    });
    console.log(b, sumB);

    if (sumB > sumA) {
        numLarger++;
    }

    sumA = sumB;
    sumB = 0;
}

console.log(numLarger);
