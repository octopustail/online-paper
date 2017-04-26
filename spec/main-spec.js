const main = require('../main/main');

describe('main()', () => {

    it('should return "Hello World!"', () => {
        spyOn(console, 'log');
        main();
        expect(console.log).toHaveBeenCalledWith('Hello World!');
    });
});