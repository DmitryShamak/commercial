module.exports = function($compile) {
    return {
        restrict: 'A',
        compile: function(scope, element, attributes) {
            return {
                pre: function(scope, element, attributes) {
                    var attrName = "custom-" + attributes.attrName;
                    if(!element.attr(attrName)) {
                        element.attr(attrName, attrName);
                        $compile(element)(scope);
                    }
                }
            }
        }
    }
};