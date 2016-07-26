'use strict';

const Game = require('../src/game');
const AnswerGenerator = require('../src/answer-generator');

describe('play this game', ()=> {

    it('should print congratulations', ()=> {

        spyOn(AnswerGenerator, 'getNumber').and.returnValue('1234');

        expect(Game.play()).toEqual('congratulations');
    });
});