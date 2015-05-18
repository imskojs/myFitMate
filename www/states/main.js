angular.module('myFitMate')
.controller('MainController', function(
$scope, KoStateChangeUtility
){
  KoStateChangeUtility.forStatesActivateClass(['main'], 'transparentBackground');
})