angular.module('myFitMate')
.controller('fitMate', function(
  $scope, Data, Utility
){
  var $ = Utility;
  $scope.categories = Data.fitMate.categories;
  $scope.subHeaderMenuScroller = $.subHeaderMenuScroller;

})