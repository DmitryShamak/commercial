module.exports = function(template) {
    return function() {
        return {
            restrict: 'A',
            replace: true,
            template: template,
            scope: {content: "="},
            link: function($scope, element, attr) {
                if($scope.content.id) {
                    element.attr("id", $scope.content.id);
                }
            }
        }
    }
};