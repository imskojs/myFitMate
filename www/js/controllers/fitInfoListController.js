angular.module('myFitMate')
.controller('FitInfoListController', function(
  $rootScope, $scope, $state, $ionicHistory, LocationData, PostData){

  $scope.fitnessType = LocationData.fitnessType;
  $scope.posts = PostData.posts;

})