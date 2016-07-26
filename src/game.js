'use strict';
const scanf = require('scanf');
const AnswerGenerator = require('../src/answer-generator');
const CompareNumber = require('../src/compare-number');

class Game {
    static play() {
        const guessNumbers = AnswerGenerator.getNumber();
        let guessNumberString = '';
        for (let guessNumber of guessNumbers) {
            guessNumberString += guessNumber;
        }
        console.log('Welcome!\n');
        for (let i = 6; i > 0; i--) {
            console.log(`Please input your number(${i}): `);
            const userNumber = scanf('%s');
            let result = CompareNumber.compareNumber(userNumber, guessNumberString);
            if (result === '4A0B') {
                console.log('congratulations');
                return 'congratulations';
            }
            else {
                console.log(result);
            }
        }
        console.log('game over');
    }
}
module.exports = Game;