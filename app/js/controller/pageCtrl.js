module.exports = function ($scope, $state) {
    $scope.content = $state.$current.data.content || [];
};