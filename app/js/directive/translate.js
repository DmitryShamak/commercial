module.exports = function() {
    var localizations = require("../content/localizations.js");

    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            var language = scope.$root.language.active;
            var string = attributes.translate;
            var attribute = attributes.translateAttr;
            var translate = !attributes.doNotTranslate;

            var key = string && string.toLowerCase().trim().replace(/\./g, "").replace(/\s/g, "_");
            var translation,
                result;

            if(key && localizations && localizations[language]) {
                translation = localizations[language][key];
            }
            result = translate ? translation || string : string;

            if(translate && !translation) {
                $(element).addClass("no-translation");
            }

            if(!attribute) {
                $(element).text(result);
            } else {
                $(element).attr(attribute, result);
            }
        }
    }
};