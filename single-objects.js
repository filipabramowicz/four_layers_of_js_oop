// Objects are atomic bulding blocks of JavaScript OOP
// - objects: maps from strings to values
// - properties: entries in the map
// - methods: properties whose values are functions
//      -this - refers to receiver of method call

// JS Advantage: create object directly, introduce abstractions later

// Object literal
var jane = {
    // Property
    name: 'Jane',
    
    // Method
    describe: function() {
        return 'Person named ' + this.name;
    }
};

// Objects versus maps:

// Similar
// - very dynamic: freely delete and add rpoperties

// Different
// - inheritance (via prototype chains)
// - fast access to properties (via constructors- if you don't add or remove 
//   properties after construction)