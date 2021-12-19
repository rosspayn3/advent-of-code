const fs = require("fs");

const commands = fs.readFileSync("input.txt", "utf8").split("\r\n");

let xpos = 0,
    ypos = 0,
    aim = 0;

commands.forEach((command) => {
    let [direction, amount] = command.split(" ");
    // console.log("d: ", direction, " \ta:", amount)
    switch (direction) {
        case "forward":
            xpos += parseInt(amount);
            ypos += aim * amount;
            break;
        case "up":
            aim -= parseInt(amount);
            break;
        case "down":
            aim += parseInt(amount);
            break;

        default:
            break;
    }
});

console.log(xpos, ypos, xpos * ypos);
