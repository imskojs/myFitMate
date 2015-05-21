angular.module('myFitMate')
.controller('fitMate', function(
  $scope, $state, $ionicScrollDelegate, Data, Utility
){

  $scope.categories = Data.fitMate.categories;
  $scope.subHeaderMenu = Utility.subHeaderMenu;

  // $scope.subHeaderMenu();
})