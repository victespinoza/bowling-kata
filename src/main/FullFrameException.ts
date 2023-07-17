export default class FullFrameException extends Error{
    constructor(){
        super('Frame does not allow more rolls')
    }
}