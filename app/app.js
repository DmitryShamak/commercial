var styles = require("./style/main.scss");

var templates = {
    navigation: require("./html/navigation.html"),

    pending: require("./templates/pending.temp"),
    language: require("./templates/language.temp"),

    header: require("./templates/header.temp"),
    subtitle: require("./templates/subtitle.temp"),
    list: require("./templates/list.temp"),
    info: require("./templates/info.temp"),
    stats: require("./templates/stats.temp"),
    form: require("./templates/form.temp"),
    input: require("./templates/input.temp"),
    textarea: require("./templates/textarea.temp"),
    submit: require("./templates/submit.temp"),
    map: require("./templates/map.temp")
};

(function() {
    angular.module('app', ['ui.router', 'ngResource'])
        .config(require("./js/config.js"))
        .run(function($rootScope, $state, $stateParams, $injector, $location) {
            var localizations = require("./js/content/localizations.js");
            var Language = require("./js/helpers/language.js");
            var currentLanguage = $stateParams.language;

            $rootScope.safeApply = function(scope) {
                if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
                    scope.$apply();
                }
            };

            $rootScope.languages = require("./js/content/languages.js");
            $rootScope.language = new Language(currentLanguage);

            $rootScope.translate = function(string) {
                var key = string && string.toLowerCase().trim().replace(/\./g, "").replace(/\s/g, "_");
                if(key && localizations && localizations[$rootScope.language.active]) {
                    return localizations[$rootScope.language.active][key] || string + " (no translation)";
                }

                return string + "[NO SUCH TRANSLATION]";
            };

            $rootScope.$on('$stateChangeStart', function(event, toState) {
                $rootScope.pageTitle = toState.data.pageTitle || "Shamak";
            });

            $rootScope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
                if(!$rootScope.language.active) {
                    $rootScope.language.active = toParams.language || $rootScope.language.default;
                    $state.go(toState.name, {
                        language: $rootScope.language.active
                    })
                }
            });
        })

        .controller('PageCtrl', require("./js/controller/pageCtrl.js"))
        .controller('LandingCtrl', require("./js/controller/landingCtrl.js"))

        .directive('navigation', function() {
            return {
                restrict: 'A',
                template: templates.navigation,
                controller: require("./js/controller/navigationCtrl.js")
            }
        })

        .directive('attrName', require("./js/directive/attr_name.js"))
        .directive('pending', require("./js/directive/pending.js")(templates.pending))
        .directive('language', require("./js/directive/language.js")(templates.language))

        .directive('customHeader', require("./js/directive/static.js")(templates.header))
        .directive('customSubtitle', require("./js/directive/static.js")(templates.subtitle))
        .directive('customList', require("./js/directive/static.js")(templates.list))
        .directive('customInfo', require("./js/directive/static.js")(templates.info))
        .directive('customStats', require("./js/directive/static.js")(templates.stats))
        .directive('customForm', require("./js/directive/static.js")(templates.form))
        .directive('customInput', require("./js/directive/static.js")(templates.input))
        .directive('customTextarea', require("./js/directive/static.js")(templates.textarea))
        .directive('customSubmit', require("./js/directive/static.js")(templates.submit))
        .directive('customMap', require("./js/directive/static.js")(templates.map))

        .factory('api', function() {
            return require("./js/helpers/api.js");
        })
})();

