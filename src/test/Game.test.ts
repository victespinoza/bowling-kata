import Game from "../main/Game"

describe('Game',()=>{
    it ('Should return the right score when roll are played',()=>{
        const game = new Game();
        game.roll(8);
        expect(game.score()).toBe(8);
    })

})