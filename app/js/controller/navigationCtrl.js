module.exports = function ($scope, $state) {
    var scrollTarget = $("body");

    $scope.links = require("../content/navigation.js");

    $scope.goToState = function(state) {
        var self = this;
        return new Promise(function(resolve, reject) {
            if (state) {
                $state.go(state, {
                    language: $scope.language.active
                });

                return setTimeout(resolve.bind(self, state), 10);
            }

            reject("no state");
        });
    };

    $scope.goToId = function(id) {
        return new Promise(function(resolve, reject) {
            if(id) {
                var target = $("#" + id);

                if(target && target.length) {
                    var topPosition = target.offset().top;
                    scrollTarget.animate({scrollTop: topPosition}, '500', 'swing');
                }

                return resolve(id);
            }

            reject("no id");
        });
    };

    $scope.goTo = function(state, id) {
        var promise;
        if(state) {
            promise = $scope.goToState(state);
        }

        if(id) {
            promise ? promise.then($scope.goToId.bind(this, id)) : $scope.goToId(id);
        }

        $scope.toggleCollapse(null);
    };

    $scope.toggleCollapse = function(ev) {
        var target = ev ? ev.target : $("#sidebar .navigation-toggle-btn");
        var container = $(target).closest(".collapse-wrapper");
        var element = $(container).children(".collapse-content");

        if(element && element.length) {
            container.toggleClass("active");
            element.toggleClass("hidden-xs");
        }
    }
};