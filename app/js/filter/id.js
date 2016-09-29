module.exports = function() {
    return function(input) {
        var output = input ? input.toLowerCase().trim().replace(/\./g, "").replace(/\s/g, "_") : "";

        return output;

    }

};