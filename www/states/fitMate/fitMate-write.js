angular.module('myFitMate')
.controller('fitMate.write', function(
  $scope, Data, Utility
){

  $scope.goToState = Utility.goToState; 
  $scope.form = Data.fitMate.write.form;
  $scope.processPost = Utility.processPost;

})