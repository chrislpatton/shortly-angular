angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);
  $scope.data = {};

  $scope.getLinks($scope.data);

});


