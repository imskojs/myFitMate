angular.module('myFitMate')
.controller('fitMate', function(
  $scope, $state, Data, Utility
){
  var $ = Utility;
  $scope.categories = Data.fitMate.categories;
  $scope.subHeaderMenuScroller = $.subHeaderMenuScroller;

})