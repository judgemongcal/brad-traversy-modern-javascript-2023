const reverseString = require('./reverseString');

describe('reverseString', () => {
    it('should be a function', () => {
        expect(typeof reverseString).toEqual('function');
    });

    it('should return a string', () => {
        expect(typeof reverseString('hello')).toEqual('string');
    });

    it('should return reverse a string', () => {
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('World')).toEqual('dlroW');
        expect(reverseString('everyOne')).toEqual('enOyreve');
        expect(reverseString('HelLo wOrlD')).toEqual('DlrOw oLleH');
        expect(reverseString('JavaScript Jest')).toEqual('tseJ tpircSavaJ');
    });

})