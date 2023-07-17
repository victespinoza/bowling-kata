import Game from "../main/Game"

describe('Game',()=>{
    const MAX_TURNS = 20;

    it ('Should return the right score when roll are played',()=>{
        const game = new Game(MAX_TURNS);

        game.roll(8);

        expect(game.score()).toBe(8);
    })

    
    it ('Should allow a max of 20 rolls',()=>{
        const game = new Game(MAX_TURNS);
        const turns = 25;
        const droppedPines = 4;

        for(let i=0; i<turns; i++){
            game.roll(droppedPines);
        }

        expect(game.score()).toBe(MAX_TURNS*droppedPines);
    })
})