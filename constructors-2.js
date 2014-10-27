// How does instance of work?

jane instanceof Person // return true



// It is checked wether Constr.prototype is in the prototype chain of value

value instanceof Constr
// Equivalent to
Constr.prototype.isPrototype(value) 