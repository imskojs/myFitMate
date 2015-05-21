angular.module('myFitMate')
.controller('fitInfo', function(
  $scope, $state, Data, Utility
){

  $scope.categories = Data.fitInfo.categories;
  $scope.subHeaderMenuScroller = Utility.subHeaderMenuScroller;

})