angular.module('myFitMate')
.controller('init.favorite', function ($scope, Data){

  $scope.options = Data.init.favorite.options;

  $scope.selectedOption = $scope.options[0];

  $scope.save = function (option){
    Data.init.favorite.selectedOption = option; //{id: number, type:string}
    console.log(Data.init.favorite.selectedOption.id);
    console.log(Data.init.favorite.selectedOption.type);
  }

});