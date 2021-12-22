const fs = require("fs");

const bingoData = fs.readFileSync("input.txt", "utf8").split("\r\n");

let numbers = bingoData[0].split(",");
let drawnNumbers = [];
let bingoCards = [];
let round = 0;
let bingoWin = false;

// console.log(bingoData);

/**
 * fill bingo cards from input
 */
function fillCards() {
    let card = [];
    for (let index = 0; index < bingoData.length; index++) {
        let line = bingoData[index];
        if (line == "") {
            bingoCards.push(card);
            card = [];
        } else {
            card.push(line);
        }
    }
    // push last card onto cards array
    bingoCards.push(card);
}

/**
 * draw numbers for each round
 */
function drawNumbers() {
    let drawn = [];

    for (let index = 0; index < 5 + round; index++) {
        let number = numbers.shift();
        drawnNumbers.push(number);
    }
    console.log(drawnNumbers);
}

/**
 * checks each bingo card for a bingo
 */
function checkCards() {
    bingoCards.forEach((card) => {
        for (let index = 0; index < card.length; index++) {
            // check if any row in each card is in drawnNumbers
            // then check if any column in each card is in drawnNumbers
        }
    });
}

fillCards();
do {
    drawNumbers();
    checkCards();
    round++;
} while (!bingoWin && numbers.length > 0);
