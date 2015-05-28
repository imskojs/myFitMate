angular.module('myFitMate')
.controller('club.details', function (
  $scope, Data, Utility
){
var $ = Utility;
var locs = Data.findFit.map.locations;
var $ = Utility;
var param = $.getStateParam('clubId');
$scope.currentContent = locs[param];

$scope.contactBack = function (){
  $.goTo('club.write', {clubId: $scope.currentContent.id})
};

















  // END
})