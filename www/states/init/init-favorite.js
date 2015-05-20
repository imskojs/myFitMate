angular.module('myFitMate')
.controller('init.favorite', function ($scope, Data){
  $scope.options = Data.init.favorite.options;
  $scope.selectedOption = null;
})