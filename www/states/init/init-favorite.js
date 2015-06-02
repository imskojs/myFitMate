angular.module('myFitMate')
.controller('init.favorite', function ($scope, Data, Utility){

  var $ = Utility
  $scope.options = Data.init.favorite.options;

  $scope.selectedOption = $scope.options[0];

  $scope.save = function (option){
    $.empty(Data.init.favorite.selectedOption);
    console.log(Data.init.favorite.selectedOption)
    $.extend(Data.init.favorite.selectedOption, option)
    console.log(Data.init.favorite.selectedOption)
  }

});