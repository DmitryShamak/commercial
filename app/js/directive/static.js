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

                if($scope.content.value) {
                    $scope.content.text = $scope.$root.translate($scope.content.value);
                }
                if($scope.content.titleValue) {
                    $scope.content.title = $scope.$root.translate($scope.content.titleValue);
                }
                if($scope.content.items) {
                    $scope.content.items.forEach(function(item) {
                        if(item.titleValue) {
                            item.title = $scope.$root.translate(item.titleValue);
                        }
                        if(item.value) {
                            item.text = $scope.$root.translate(item.value);
                        }
                    })
                }

                $scope.onsubmit = function(data) {
                    //todo: validate (required*)
                    console.log(data);
                }
            }
        }
    }
};