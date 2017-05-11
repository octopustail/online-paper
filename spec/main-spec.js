const main = require('../main/main');

describe('main()', () => {

    it('should calculate the sum', () => {
      expect(main("123")).toBe(6);
      expect(main("102")).toBe(3);
    });

});
