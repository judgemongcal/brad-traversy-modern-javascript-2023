const palindrome = require('./palindrome');
const booleanPal = require('./booleanpal');

describe('Palindrome',() => {
    it('should be a function',() => {
        expect(typeof palindrome).toEqual('function');
    });
    it('should return the word if not a palindrome', () => {
        expect(palindrome('string')).toEqual('string');
        expect(palindrome('microwave')).toEqual('microwave');
        expect(palindrome('artificial intelligence')).toEqual('artificial intelligence');
    });
    it('should return PALINDROME if its a palindrome', () => {
        expect(palindrome('kayak')).toEqual('PALINDROME');
        expect(palindrome('racecar')).toEqual('PALINDROME');
        expect(palindrome('wow')).toEqual('PALINDROME');
        expect(palindrome('rotator')).toEqual('PALINDROME');
    });

});

describe('Boolean Palindrome',() => {
    it('should be a function',() => {
        expect(typeof booleanPal).toEqual('function');
    });
    it('should return the word if not a palindrome', () => {
        expect(booleanPal('string')).toBeFalsy();
        expect(booleanPal('microwave')).toBeFalsy();
        expect(booleanPal('artificial intelligence')).toBeFalsy();
    });
    it('should return PALINDROME if its a palindrome', () => {
        expect(booleanPal('kayak')).toBeTruthy();
        expect(booleanPal('racecar')).toBeTruthy();
        expect(booleanPal('wow')).toBeTruthy();
        expect(booleanPal('rotator')).toBeTruthy();
    });

});