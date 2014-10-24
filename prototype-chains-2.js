// Getting and setting the prototype
// ECMAScript 6: __proto__
//   not yet a standard - some browsers support it

// ECMAScript 5: Object.create()
//               Object.getPrototypeOf()
var PersonProto = {
    describe: function() {
        return 'Person named ' + this.name;
    }
};

// Creates fresh new empty object using PersonProto
var jane = Object.create(PersonProto);
jane.name = "Jane";

// Then we can make a check
Object.getPrototypeOf(jane) === PersonProto // returns true