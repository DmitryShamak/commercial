module.exports = function ($scope, $state) {
    $scope.links = require("../content/navigation.js");

    $scope.toggleCollapse = function(ev) {
        var container = $(ev.target).closest(".collapse-wrapper");
        var target = $(container).children(".collapse-content");

        if(target && target.length) {
            container.toggleClass("active");
            target.toggleClass("hidden-xs");
        }
    }
};