angular.module('myFitMate')
.controller('club.details', function (
  $scope, Data, Utility, $timeout, $ionicScrollDelegate
){$scope.$on('$ionicView.enter', function(){
var $ = Utility;
var locs = Data.findFit.map.locations;
var index = $.getStateParam('clubId');
var center = locs[index].latlng;
$scope.currentContent = locs[index];
// Map
var DOM = angular.element('#club-details .daum-map-container')[0]
var mapOptions = {
  center: new daum.maps.LatLng(center[0], center[1]),
  level: 3
}
$scope.$apply(function (){
  var map = new daum.maps.Map(DOM, mapOptions);
})
// clicks
$scope.write = function (){
  $.goTo('club.write', {writeId: index})
};

//// END
});
});