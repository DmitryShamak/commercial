module.exports = function(template) {
    return function($state) {
        return {
            restrict: 'A',
            scope: {
                lang: "=language"
            },
            template: template,
            link: function($scope, element, attributes) {
                $scope.$root.$watch('language.active', function(result) {
                    $scope.lang.active = result === $scope.lang.id;
                });

                $scope.set = function() {
                    $scope.$root.language.active = $scope.lang.id;

                    $state.go($state.$current.name, {
                        language: $scope.lang.id
                    });
                }
            }
        }
    }
};