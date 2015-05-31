angular.module('myFitMate')
.controller('findFit.map', function (
$scope, Data, Utility, $timeout, $ionicModal, $state, $ionicNavBarDelegate
){ 
var $ = Utility;
var windowWidth = angular.element('body').width();
Data.windowWidth = windowWidth
// Marker style.
var markerWidth = windowWidth * .111;
var markerHeight = windowWidth * .055;
var markerSrc = 'img/04_map/1080x1920/icon_map_unselect.png';
var markerClickedSrc = 'img/04_map/1080x1920/icon_map_select.png';
var markerSize = new daum.maps.Size(markerWidth, markerHeight);
var markerImg = new daum.maps.MarkerImage(markerSrc, markerSize);
var markerClickedImg = new daum.maps.MarkerImage(markerClickedSrc, markerSize);

// current location.
$scope.findMe = function (){
  navigator.geolocation.getCurrentPosition(function (position){
    console.log(position.coords);
    var lat = Data.findFit.currentLocation.latitude = position.coords.latitude;
    var lng = Data.findFit.currentLocation.longitude = position.coords.longitude;
    map.setCenter( new daum.maps.LatLng(lat, lng) );
    var params = $.calcNearBy(lat, lng);





  });
};

var DOM = angular.element('#findFit-map .daum-map-container')[0]
var mapOptions = {
  center: new daum.maps.LatLng(37.5691469, 126.978647),
  level: 5,
  draggable: true
}
var index;
var map;
var ps = new daum.maps.services.Places();
map = new daum.maps.Map(DOM, mapOptions)

$scope.$on('$ionicView.enter', function(){
// BEG
// var markers = [];
$scope.$watch('search.place', function (value, prev){
  if(value !== prev){
    ps.keywordSearch(value, function(status, data, pagination){
      // Look at the first result of the search and center the map there
      var daumResultArray = data.places
      var firstMatch = daumResultArray[0];
      var lat = Number(firstMatch.latitude);
      var lng = Number(firstMatch.longitude);
      var location = new daum.maps.LatLng( lat, lng );
      map.panTo(location);
      // request club data with latitude +- .3,  longitude +- .5
      var params = $.calcNearBy(lat, lng);

      $.Club.find(params)
      .then(function (response){
        // Delete current markers on map, and current clubs data.
        angular.forEach(markers, function (marker, i, self){
          marker.setMap(null);
          delete self[i]
        });
        angular.forEach(Data.findFit.map.locations, function(club, i, self){
          delete self[i];
        });
        // Save nearby club data.
        angular.extend(Data.findFit.map.locations, response.clubs);
        var locs = Data.findFit.map.locations;
        // Draw newly received markers.
        angular.forEach(locs, function(club, i, self){
          var position =  new daum.maps.LatLng(club.latitude, club.longitude);
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
              // change this image to selected. Rest unselected img
              angular.forEach(markers, function (marker, i, self){
                marker.setImage(markerImg);
              });
              marker.setImage(markerClickedImg);
              // load content based on location of the array
              $scope.modal.show();
              index = Number(marker.getTitle());
              $scope.selectedFit = Data.findFit.map.locations[index];
              Data.findFit.map.selectedClub = Data.findFit.map.locations[index];
            })
          });
          // Save markers for deleting in the future.
          markers.push(marker);
        })
      }, function (err){
        console.log('존재하지 않는 장소입니다')
      })
    });
  }
})

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
