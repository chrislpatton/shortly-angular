angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
$scope.link = {};


$scope.addLink = function() {
  console.log('Links', Links);
  $scope.loading = true;
  Links.addLink($scope.link)
    .then(function(){
      $scope.loading = false;
      $location.path('/links');
    })
    .catch(function(error){
      console.log(error)
    });
  };  
});
