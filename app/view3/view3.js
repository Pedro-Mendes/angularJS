'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function($scope) {
  $scope.first = 1;
  $scope.second = 1;
  $scope.updateValue = function() {
    $scope.calculation = $scope.first + ' + '
    alert('you clicked the button!');
  }
}]);