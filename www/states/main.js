angular.module('myFitMate')
.controller('MainController', function(
$scope, KoStateChangeUtility
){
  KoStateChangeUtility.forStatesActivateClass(['main','init.login', 'init.favorite'], 'transparentBackground');
})