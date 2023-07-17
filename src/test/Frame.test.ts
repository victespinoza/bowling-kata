import Frame from "../main/Frame";
import FullFrameException from "../main/FullFrameException";

describe('Frame',()=>{
    it ('Should throw error if roll is called more than 2 times',()=>{
        const frame = new Frame();
        frame.roll(4);
        frame.roll(4);
        expect(() => frame.roll(4)).toThrow(FullFrameException);
    })

    it ('Should throw error on the second roll When first roll is called with 10',()=>{
        const frame = new Frame();
        frame.roll(10);
        expect(() => frame.roll(4)).toThrow(FullFrameException);
    })
})