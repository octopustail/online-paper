let fs = require("fs");
let main = require("../src/index");

describe('main()', () => {

    it('should pass', () => {
      expect(fs.statSync("src/index.html").isFile()).toBe(true);
    });
    it('should return correct score',()=>{
        let result = main();
        expect(result).toEqual(0);
    })

});
