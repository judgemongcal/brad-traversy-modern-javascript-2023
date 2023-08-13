const assert = require('assert');

const anagram = require('./anagram');

describe('Anagram', () => {
    it('should be a function', () => {
        expect(typeof anagram).toEqual('function');
    });
    it('should return a boolean', () => {
        expect(typeof anagram('input', 'test')).toEqual('boolean');
    });
    it('should show true if test is an anagram of input', () => {
        assert.deepEqual(anagram('cinema','iceman'), (true));
        assert.deepEqual(anagram('trap','part'), (true));
        assert.deepEqual(anagram('knee','keen'), (true));
        assert.deepEqual(anagram('earth','heart'), (true));
        assert.deepEqual(anagram('hello','world'), (false));
    });
});