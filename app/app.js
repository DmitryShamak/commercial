var styles = require("./style/main.scss");

var templates = {
    navigation: require("./html/navigation.html"),

    pending: require("./templates/pending.temp"),

    header: require("./templates/header.temp"),
    subtitle: require("./templates/subtitle.temp"),
    list: require("./templates/list.temp"),
    info: require("./templates/info.temp"),
    stats: require("./templates/stats.temp")
};

(function() {
    angular.module('app', ['ui.router', 'ngResource'])
        .config(require("./js/config.js"))
        .run(function($rootScope, $state, $injector, $location) {
            $rootScope.safeApply = function(scope) {
                if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
                    scope.$apply();
                }
            };

            $rootScope.$on('$stateChangeStart', function(event, toState) {
                $rootScope.pageTitle = toState.data.pageTitle || "Shamak A.S.";
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

        .directive('customHeader', require("./js/directive/static.js")(templates.header))
        .directive('customSubtitle', require("./js/directive/static.js")(templates.subtitle))
        .directive('customList', require("./js/directive/static.js")(templates.list))
        .directive('customInfo', require("./js/directive/static.js")(templates.info))
        .directive('customStats', require("./js/directive/static.js")(templates.stats))

        .factory('api', function() {
            return require("./js/helpers/api.js");
        })
})();

