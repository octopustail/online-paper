const main = require('../main/main');

describe('main()', () => {

    it('should console log "Debug Info"', () => {
        spyOn(console, 'log');
        main();
        expect(console.log).toHaveBeenCalledWith('Debug Info');
    });

    it('should return "Hello World!"', () => {
        let actual = main();
        expect(actual).toBe('Hello World!');
    });
});