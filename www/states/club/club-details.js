angular.module('myFitMate')
.controller('club.details', function (
  $scope, Data, Utility, $timeout, $ionicScrollDelegate
){$scope.$on('$ionicView.enter', function(){
var $ = Utility;
$scope.currentContent = {};

var locs = Data.findFit.map.locations;
var index = $.getStateParam('clubId');
var center0 = locs[index].latitude;
var center1 = locs[index].longitude;
  angular.extend($scope.currentContent,  locs[index]);

// Map
$scope.$apply(function (){
  var DOM = angular.element('#club-details .daum-map-container')[0]
  var mapOptions = {
    center: new daum.maps.LatLng(center0, center1),
    level: 5,
    marker: {
      position: new daum.maps.LatLng(center0, center1)
    }
  }
  var map = new daum.maps.StaticMap(DOM, mapOptions);
})
// clicks
$scope.write = function (){
  $.goTo('club.write', {writeId: index})
};


//// END
});
});