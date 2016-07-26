'use strict';

const Guess = require('../src/guess');
const AnswerGenerator = require('../src/answer-generator');

describe('guess', ()=> {
    
    const inputs = '1234';
    
    it('should be correct answer', ()=> {
        spyOn(AnswerGenerator, 'getNumber').and.returnValue('1234');
        let systemNumber = AnswerGenerator.getNumber();
        const result = Guess.guess(inputs);

        expect(result).toEqual('4A0B');
    })
});