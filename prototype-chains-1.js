// jane and tarzan share the same prototype object
// both prototype chains work like single objects

var PersonProto = {
    describe: function() {
        return 'Person named ' + this.name;
    }
};

var jane = {
    __proto__: PersonProto,
    name: 'Jane'
};

var tarzan = {
    __proto__: PersonProto,
    name: "Tarzan"
};

// Getting and setting the prototype
// ECMAScript 6: __proto__
//   not yet a standard - some browsers support it
// ECMAScript 5: Object.create()
//               Object.getPrototypeOf()