const CompareNumber = require('../src/compare-number');
const AnswerGenerator = require('../src/answer-generator');

class Guess {

    static guess(inputs) {
        const numbers = AnswerGenerator.getNumber();
        const result = CompareNumber.compareNumber(inputs, numbers);

        return result;
    }
}

module.exports = Guess;