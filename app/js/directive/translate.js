module.exports = ["$http", "$rootScope", function($http, $rootScope) {
    var localizations = [],
        langStore = require("../content/localizations.js");//{};
        $rootScope.$emit("TRANSLATION_READY", langStore);

    // $http.get("/localization").success(function(res){
    //     localizations = res ? res.data : [];
    //     localizations.forEach(function(translate){
    //         var name = Object.keys(translate)[0];
    //         var languages = Object.keys(translate[name]);
    //         languages.forEach(function(lang){
    //             if(!langStore[lang]) {
    //                 langStore[lang] = {};
    //             }
    //             langStore[lang][name] = translate[name][lang];
    //         });
    //     });
    //
    //     $rootScope.$emit("TRANSLATION_READY", langStore);
    // });

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

            if(key && langStore && langStore[language]) {
                translation = langStore[language][key];
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
}];