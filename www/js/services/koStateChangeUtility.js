angular.module('myFitMate')
.factory('KoStateChangeUtility', function($rootScope){

  var forStatesActivateClass = function (statesArray, classToActivate){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      // state to apply ng-class={'class-to-activate': classToActivate}
      if(_.indexOf(statesArray, toState.name) != -1){
        $rootScope[classToActivate] = true;
      } else {
        $rootScope[classToActivate] = false;
      }
    });
  }

  return {
    forStatesActivateClass: forStatesActivateClass
  }
})
