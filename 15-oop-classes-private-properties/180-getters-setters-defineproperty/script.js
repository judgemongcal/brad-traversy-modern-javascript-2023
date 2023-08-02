// Constructor Function
function Person (first, last) {
    this._first = first;
    this._last = last;

    Object.defineProperty(this, 'first', {
        get: function() {
            return this.capitalizeFirst(this._first);
        },
        set: function (value) {
            this._first = value;
        }
    });

    Object.defineProperty(this, 'last', {
        get: function() {
            return this.capitalizeFirst(this._last);
        },
        set: function (value) {
            this._last = value;
        }
    });

    Object.defineProperty(this, 'fullName', {
        get: function() {
            return this.first + ' ' + this.last;
        }
    });
};

Person.prototype.capitalizeFirst = function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

// Object Literal 
const PersonObj = {
    _first: 'jane',
    _last: 'doe',

    get first() {
        return Person.prototype.capitalizeFirst(this._first);
    },

    set first(value) {
        this._first = value;
    },

    get last() {
        return Person.prototype.capitalizeFirst(this._last);
    },

    set last(value) {
        this._last = value;
    },

    get fullName() {
        return this.first + ' ' + this.last;
    }
}

const person1 = new Person('john', 'doe');

console.log(person1.first);
console.log(person1.last);
console.log(person1.fullName);

const person2 = Object.create(PersonObj);

console.log(person2.first);
console.log(person2.last);
console.log(person2.fullName);