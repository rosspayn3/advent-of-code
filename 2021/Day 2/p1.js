const fs = require("fs");

const commands = fs.readFileSync("input.txt", "utf8").split("\r\n");

let xpos = 0,
    ypos = 0;

commands.forEach((command) => {
    let [direction, amount] = command.split(" ")
    // console.log("d: ", direction, " \ta:", amount)
    switch (direction) {
        case 'forward':
            xpos += parseInt(amount);
            break;
        case 'up':
            ypos -= parseInt(amount);
            break;
        case 'down':
            ypos += parseInt(amount);
            break;
    
        default:
            break;
    }
});

console.log(xpos, ypos, xpos * ypos)