module.exports = function ($scope, $state, $timeout) {
    $scope.content = $state.$current.data.content || [];
};