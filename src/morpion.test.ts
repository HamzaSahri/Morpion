import {Morpion} from './morpion';
import generate from '@babel/generator';

let m = new Morpion();

describe('morpion', () => {
    it('should work', () => {
        expect(true).toBe(true)
    })

})


describe('initialisation', () => {
    it('should return null', () => {
        expect(m.gameboard).toEqual(null);
    })
})

describe('generate board', () => {
    it('should return board', () => {
        m.generateGameboard()
        expect(m.gameboard).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
    })
})

describe('play Pawn', () => {
    it('should return board with middle pion', () => {
        m.playPawn(1,1,'X')
        expect(m.gameboard).toEqual([ [ '', '', '' ], [ '', 'X', '' ], [ '', '', '' ] ]);
    })
    it('should return board with first pion', () => {
        m.playPawn(0,0,'O')
        expect(m.gameboard).toEqual([ [ 'O', '', '' ], [ '', 'X', '' ], [ '', '', '' ] ]);
    })

    it('should return case occuped ', () => {
        m.playPawn(0,0,'O')
        expect(m.gameboard).toEqual([ [ 'O', '', '' ], [ '', 'X', '' ], [ '', '', '' ] ]);
    })
})

describe('play simulation', () => {
    it('should return board', () => {
        m.play();
        expect(m.gameboard).toEqual([ [ 'O', '', '' ], [ '', 'X', '' ], [ '', '', '' ] ]);
    })
})


