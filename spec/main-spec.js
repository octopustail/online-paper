let fs = require("fs");
let main = require("src/index.js");

describe('main()', () => {

    it('should pass', () => {
      expect(fs.statSync("src/index.html").isFile()).toBe(true);
    });

});
