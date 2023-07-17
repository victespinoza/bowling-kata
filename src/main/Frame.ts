import FullFrameException from "./FullFrameException";

const MAX_DROPPED_PINES = 10;
const MAX_ROLLS = 2;

export default class Frame{
    rolls = new Array();

    public roll(droppedPines: number){
        if (this.isFull())
            throw new FullFrameException();
        this.rolls.push(droppedPines);    

    }

    private isFull(): boolean{        
        return this.rolls[0] === MAX_DROPPED_PINES || this.rolls.length === MAX_ROLLS;
    }
}