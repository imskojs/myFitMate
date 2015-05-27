angular.module('myFitMate')
.controller('findFit.map', function (
$scope, Data, Utility, $timeout, $ionicModal
){ $scope.$on('$ionicView.enter', function(){


var windowWidth = angular.element('body').width();

// Create Map;
var DOM = angular.element('.daum-map-container')[0]
var mapOptions = {
  center: new daum.maps.LatLng(33.450701, 126.570667),
  level: 3
}
var map = new daum.maps.Map(DOM, mapOptions)

var locs = Data.findFit.map.locations;

// Marker style.
var markerWidth = windowWidth * .111;
var markerHeight = windowWidth * .055;
var markerSrc = 'img/04_map/1080x1920/icon_map_unselect.png';

var markerSize = new daum.maps.Size(markerWidth, markerHeight);
var markerImg = new daum.maps.MarkerImage(markerSrc, markerSize);

// Setting up modal.
$ionicModal.fromTemplateUrl('states/misc/findFitModal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function(modal){
  $scope.modal = modal;
})
// Create and attach event listener to markers
locs.forEach(function(value, i, self){
  var marker = new daum.maps.Marker({
    map: map,
    position: locs[i].latlng,
    title: locs[i].title,
    image: markerImg,
    clickable: true
  });
  daum.maps.event.addListener(marker, 'click', function() {
    // $scope.modal.show();
    var marker = this;
    console.log(marker.getPosition());
    console.log(marker.getTitle());
  });
})
// We have a data for each entity ordered.
// request data for all entities
// save to Data.findFit.map.locations
// Make marker with LatLng, title as index number,
//and attach click event for each marker.
// on click get information at title (index) from the locations array
// show modal with information in that array.



// after Enter view
})
// End of controller 
})