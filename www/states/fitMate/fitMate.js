angular.module('myFitMate')
.controller('fitMate', function(
  $scope, $state, Data, Utility
){

  $scope.categories = Data.fitMate.categories;
  $scope.subHeaderMenuScroller = Utility.subHeaderMenuScroller;

})