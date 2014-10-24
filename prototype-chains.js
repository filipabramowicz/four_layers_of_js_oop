// Problem: sharing data
// Solution: prototype chains

var jane = {
    name: 'Jane',
    describe: function() {
        return 'Person named ' + this.name;
    }
};

var tarzan = {
    name: 'Tarzan',
    describe: function() {
        return 'Person named ' + this.name;
    }
};