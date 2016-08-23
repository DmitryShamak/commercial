var styles = require("./style/main.scss");

var templates = {
    navigation: require("./html/navigation.html"),
    footer: require("./templates/footer.temp"),

    pending: require("./templates/pending.temp"),
    language: require("./templates/language.temp"),

    header: require("./templates/header.temp"),
    subtitle: require("./templates/subtitle.temp"),
    list: require("./templates/list.temp"),
    statistic: require("./templates/statistic.temp"),
    info: require("./templates/info.temp"),
    background: require("./templates/background.temp"),
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
            var Language = require("./js/helpers/language.js");
            var currentLanguage = $stateParams.language;

            $rootScope.appReady = false;

            $rootScope.safeApply = function(scope) {
                if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
                    scope.$apply();
                }
            };

            $rootScope.languages = require("./js/content/languages.js");
            $rootScope.language = new Language(currentLanguage);

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
                $rootScope.pageTitle = toState.data.pageTitle || "Shamak";

                $rootScope.language.active = toParams.language || $rootScope.language.default;
            });

            $rootScope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
                if(!$rootScope.language.active) {
                    $rootScope.language.active = toParams.language || $rootScope.language.default;
                    $state.go(toState.name, {
                        language: $rootScope.language.active
                    })
                }

                $rootScope.appReady = true;
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
        .directive('translate', require("./js/directive/translate.js"))

        .directive('customHeader', require("./js/directive/static.js")(templates.header))
        .directive('customSubtitle', require("./js/directive/static.js")(templates.subtitle))
        .directive('customList', require("./js/directive/static.js")(templates.list))
        .directive('customInfo', require("./js/directive/static.js")(templates.info))
        .directive('customStatistic', require("./js/directive/static.js")(templates.statistic))
        .directive('customBackground', require("./js/directive/static.js")(templates.background))
        .directive('customForm', require("./js/directive/static.js")(templates.form))
        .directive('customInput', require("./js/directive/static.js")(templates.input))
        .directive('customTextarea', require("./js/directive/static.js")(templates.textarea))
        .directive('customSubmit', require("./js/directive/static.js")(templates.submit))
        .directive('customMap', require("./js/directive/map.js")(templates.map))
        .directive('customFooter', require("./js/directive/static.js")(templates.footer))

        .factory('api', function() {
            return require("./js/helpers/api.js");
        })
})();

