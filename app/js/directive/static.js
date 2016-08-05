module.exports = function(template) {
    return function() {
        return {
            restrict: 'A',
            replace: true,
            template: template,
            scope: {content: "="},
            link: function($scope, element, attr) {
                $scope.onsubmit = function(data) {
                    //todo: validate (required*)
                    console.log(data);
                }
            }
        }
    }
};