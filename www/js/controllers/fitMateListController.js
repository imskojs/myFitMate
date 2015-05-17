angular.module('myFitMate')
.controller('FitMateListController', function(
  $rootScope, $scope, $state, $ionicHistory, LocationData, PostData){

  $scope.locations = LocationData.locations;
  $scope.posts = PostData.posts;

})