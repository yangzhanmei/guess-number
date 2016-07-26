'use strict';

const CompareNumber = require('../src/compare-number');
const AnswerGenerator = require('../src/answer-generator');

describe('CompareNumber', ()=> {
    const inputs = '1234';

    it('if A and B all are 0', ()=> {
        const systems = '5678';
        const expectAnswer = '0A0B';
        const answer = CompareNumber.compareNumber(inputs, systems);
        expect(answer).toEqual(expectAnswer);
    });

    it('if B is 0', ()=> {
        const systems = '1234';
        const answer = CompareNumber.compareNumber(inputs, systems);
        const expectAnswer = '4A0B';
        expect(answer).toEqual(expectAnswer);
    });

    it('if A is 0', ()=> {
        const systems = '4321';
        const expectAnswer = '0A4B';
        const answer = CompareNumber.compareNumber(inputs, systems);
        expect(answer).toEqual(expectAnswer);
    });

    it('if A and B all are not 0', ()=> {
        const systems = '4738';
        const expectAnswer = '1A1B';
        const answer = CompareNumber.compareNumber(inputs, systems);
        expect(answer).toEqual(expectAnswer);
    })
});

describe('AnswerGenerator', ()=> {
    it('it should get number', ()=> {

        const isUnique = (item, index, array)=> {
            return array.lastIndexOf(item) === index
        };

        const number = AnswerGenerator.getNumber();
        expect(number.length).toEqual(4);
        expect(number.every(isUnique)).toBeTruthy();
    })
});
