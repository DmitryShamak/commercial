var styles = require("./style/main.scss");

var templates = {
    navigation: require("./html/navigation.html"),
    footer: require("./templates/footer.temp"),

    pending: require("./templates/pending.temp"),
    language: require("./templates/language.temp"),

    header: require("./templates/header.temp"),
    subtitle: require("./templates/subtitle.temp"),
    list: require("./templates/list.temp"),
    slider: require("./templates/slider.temp"),
    statistic: require("./templates/statistic.temp"),
    prices: require("./templates/prices.temp"),
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
            $rootScope.stateReady = false;
            $rootScope.translateReady = false;

            $rootScope.safeApply = function(scope) {
                if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
                    scope.$apply();
                }
            };

            $rootScope.languages = require("./js/content/languages.js");
            $rootScope.language = new Language(currentLanguage);

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
                $rootScope.pageTitle = toState.data.pageTitle || "Gravis";

                $rootScope.language.active = toParams.language || $rootScope.language.default;
            });

            $rootScope.$on('TRANSLATION_READY', function(){
                $rootScope.translateReady = true;
                $rootScope.appReady = $rootScope.stateReady && $rootScope.translateReady;
            });


            $rootScope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
                if(!$rootScope.language.active) {
                    $rootScope.language.active = toParams.language || $rootScope.language.default;
                    $state.go(toState.name, {
                        language: $rootScope.language.active
                    })
                }

                $rootScope.stateReady = true;
                $rootScope.appReady = $rootScope.stateReady && $rootScope.translateReady;
            });
        })

        .controller('PageCtrl', require("./js/controller/pageCtrl.js"))
        .controller('LandingCtrl', require("./js/controller/landingCtrl.js"))
        .controller('AdminCtrl', require("./js/controller/adminCtrl.js"))

        //filters
        .filter("id", require("./js/filter/id.js"))
        //filters end

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
        .directive('customSlider', require("./js/directive/slider.js")(templates.slider))
        .directive('customInfo', require("./js/directive/static.js")(templates.info))
        .directive('customStatistic', require("./js/directive/static.js")(templates.statistic))
        .directive('customPrices', require("./js/directive/static.js")(templates.prices))
        .directive('customBackground', require("./js/directive/static.js")(templates.background))
        .directive('customForm', require("./js/directive/static.js")(templates.form))
        .directive('customInput', require("./js/directive/static.js")(templates.input))
        .directive('customTextarea', require("./js/directive/static.js")(templates.textarea))
        .directive('customSubmit', require("./js/directive/static.js")(templates.submit))
        .directive('customMap', require("./js/directive/map.js")(templates.map))
        .directive('customFooter', require("./js/directive/static.js")(templates.footer))

        .factory('api', function() {
            return require("./js/helpers/api.js");
        });

    //COMPONENTS
    require("./components/adminPageEditor/adminPageEditor.js");
    //COMPONENTS END
})();

