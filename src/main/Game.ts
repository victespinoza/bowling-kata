export default class Game {
    private globalScore = 0;
    private turns = 1;

    constructor(private max_turns: number){}

    public roll(droppedPines: number) {
        if (this.turns > this.max_turns)
            return;
        this.globalScore += droppedPines;
        this.turns++;
    }
    

    public score(): number {
        return this.globalScore;
    }
}