const hasDuplicateIDs = require ('./hasduplicateids');

describe('DOM Tree Has Duplicate IDs', () => {
    let root;
    beforeEach(() => {
        console.log('beforeEach ran...');
         // Create mock elements
         root = document.createElement('div');
         const child1 = document.createElement('div');
         const child2 = document.createElement('div');
         
         root.appendChild(child1);
         root.appendChild(child2);
 
    });

    afterEach(() => {
        console.log('afterEach ran...');
        root = null;
    })
    it('should be a function', () => {
        expect(typeof hasDuplicateIDs).toEqual('function');
    });
    it('should return a boolean', () => {
        expect(typeof hasDuplicateIDs()).toEqual('boolean');
    });
    it('should return false if no root', () => {
        expect(hasDuplicateIDs()).toBeFalsy();
    });
    it('should return true if there are duplicate IDs', () => {
        // Add Duplicate IDs
        root.id = 'root';
        root.children[0].id = 'child';
        root.children[1].id = 'child';

        const result = hasDuplicateIDs(root);
        expect(result).toBeTruthy();
    });
    it('should return false if there are no duplicate IDs', () => {
        // Add IDs
        root.id = 'root';
        root.children[0].id = 'child1';
        root.children[1].id = 'child2';
        

        const result = hasDuplicateIDs(root);
        expect(result).toBeFalsy();
    });
})