const fs = require("fs");

const readings = fs.readFileSync("input.txt", "utf8").split("\r\n");

// console.log(readings);

let values = new Map();
let firstVal = readings[0];
let gamma = [];
let epsilon = [];
let gammaDecimal = 0;
let epsilonDecimal = 0;

// **** initialize values map ****

for (let index = 0; index < firstVal.length; index++) {
    values.set(index, 0);
}

// console.log(values);




// **** get most common bit value for each position the readings ****

for (let index = 0; index < readings.length; index++) {
    const reading = readings[index];
    for (let index = 0; index < reading.length; index++) {
        let numOnes = values.get(index);
        const bit = reading[index];
        if (bit == "1") {
            values.set(index, ++numOnes);
        }
    }
}




// **** build gamma and epsilon binary strings ****

values.forEach((value, key) => {
    // console.log("position: ", key, "value: ", value);
    if (value > readings.length / 2) {
        gamma.push(1);
        epsilon.push(0);
    } else {
        epsilon.push(1);
        gamma.push(0);
    }
});

// console.log("gamma binary: ", gamma, "epsilon binary: ", epsilon);




// **** get decimal representation of gamma and epsilon binary strings ****

let binaryValue = 1;

for (let index = gamma.length - 1; index >= 0; index--) {
    const gammaBit = gamma[index];
    const epsilonBit = epsilon[index];

    if (gammaBit == "1") {
        gammaDecimal += binaryValue;
    }
    if (epsilonBit == "1") {
        epsilonDecimal += binaryValue;
    }

    binaryValue = binaryValue * 2;
}

// console.log("decimal values: ", gammaDecimal, epsilonDecimal);




// **** calculate power consumption of submarine ****

let powerConsumption = gammaDecimal * epsilonDecimal;
// console.log(powerConsumption)




// **** find oxygenator and CO2 scrubber ratings ****

let position = 0;

for (let index = 0; index < readings.length; index++) {
    const reading = readings[index];
    
    
    
    position++;
}
