// Instances created by the constructor:
//
// tarzan
// name: 'Tarzan'
// describe: function() {...}
//
// jane
// name: 'Jane'
// describe: function() {...}
//
// We can solve this by sharing methods

// Instance-specific properties
function Person(name) {
    this.name = name;
}

// Shared properties
Person.prototype.describe = function() {
    return 'Person named ' + this.name;
};

var jane = new Person('Jane');

Object.keys(jane);                          // returns name
Object.keys(Object.getPrototypeOf(jane));   // returns describe

// Overloaded terminology (two prototypes):
// prototype 1 - prototype relationship between objects
// prototype 2 - property prototype of constructors (the prototype of all instances)

// Disambiguation (if necessary): call prototype 2 the instance prototype