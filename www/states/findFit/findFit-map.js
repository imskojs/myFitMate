angular.module('myFitMate')
.controller('findFit.map', function (
$scope, Data, Utility, $timeout, $ionicModal, $state
){ $scope.$on('$ionicView.enter', function(){
var $ = Utility;


var windowWidth = angular.element('body').width();
// Marker style.
var markerWidth = windowWidth * .111;
var markerHeight = windowWidth * .055;
var markerSrc = 'img/04_map/1080x1920/icon_map_unselect.png';
var markerSize = new daum.maps.Size(markerWidth, markerHeight);
var markerImg = new daum.maps.MarkerImage(markerSrc, markerSize);
// Map options;
var DOM = angular.element('#findFit-map .daum-map-container')[0]
var mapOptions = {
  center: new daum.maps.LatLng(33.450701, 126.570667),
  level: 3,
  draggable: true
}
// Map, markers, and listeners.
var index;
$scope.$apply(function(){
  //TODO: Request locations data
  var locs = Data.findFit.map.locations;
  var map = new daum.maps.Map(DOM, mapOptions)
  locs.forEach(function(value, i, self){
    var position =  new daum.maps.LatLng(locs[i].latlng[0], locs[i].latlng[1])
    var marker = new daum.maps.Marker({
      map: map,
      position: position,
      title: String(i),
      image: markerImg,
      clickable: true,
    });
    daum.maps.event.addListener(marker, 'click', function() {
      var marker = this;
      $scope.$apply(function (){
        $scope.modal.show();
        index = Number(marker.getTitle());
        $scope.selectedFit = Data.findFit.map.locations[index];
      })
    });
  })
});

$scope.goToDetailsWithParam = function (){
  $scope.modal.hide()
  .then(function(){
    $.goTo('club.details', {clubId: index})
  });
}
// Setting up modal.
$ionicModal.fromTemplateUrl('states/misc/findFitModal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function(modal){
  $scope.modal = modal;
})

////END
})
})