// Constructor is a normal function but instead invoking a function
// we create object by new operator

// new operator enables the constructor operation

function Person(name) {
    this.name = name;
    this.describe = function() {
        return 'Person named ' + this.name;
    };
}

var jane = new Person('Jane');
console.log(jane instanceof Person);   // true

// We can look into properties of object jane
console.log(Object.keys(jane));