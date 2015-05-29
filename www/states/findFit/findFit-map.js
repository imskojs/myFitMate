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
  center: new daum.maps.LatLng(33.460701, 126.580667),
  level: 5,
  draggable: true
}
// Map, markers, and listeners.
var index;
var map;
var ps = new daum.maps.services.Places();
$scope.$apply(function(){
  //TODO: Request locations data
  var locs = Data.findFit.map.locations;
  map = new daum.maps.Map(DOM, mapOptions)
  locs.forEach(function(value, i, self){
    var position =  new daum.maps.LatLng(locs[i].latitude, locs[i].longitude)
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

// Search
$scope.$watch('search.place', function (value, prev){
  if(value !== prev){
    ps.keywordSearch(value, function(status, data, pagination){
      var array = data.places
     // firstMatch
// {
//   "phone": "054-1600-7788",
//   "newAddress": "",
//   "imageUrl": "",
//   "direction": "",
//   "zipcode": "",
//   "placeUrl": "http://place.map.daum.net/26796698",
//   "id": "26796698",
//   "title": "백두대간협곡열차 V-train",
//   "category": "교통,수송 > 기차,철도",
//   "distance": "",
//   "address": "경북 봉화군 소천면 분천리 964",
//   "longitude": "129.0581560401413",
//   "latitude": "36.932994724777515",
//   "addressBCode": "4792035027"
// } 
      var firstMatch = array[0];
      var lat = firstMatch.latitude;
      var lng = firstMatch.longitude;
      var location = new daum.maps.LatLng( lat, lng );
      map.panTo(location);

      // request data with latitude +- .3,  longitude +- .6
      var minLat = lat - .3;
      var maxLat = lat + .3;
      var minLng = lng - .6;
      var maxLng = lng + .6;

      var reqQueryData ={
        category: Data.init.favorite.selectedOption,
        latitude: {
          '>': minLat,
          '<': maxLat,
        },
        longitude: {
          '>': minLng,
          '<': maxLng
        }
      }

      // on response;
      // Draw pins.
      // Delete markers;
      Data.findFit.map.locations = response.locations;
      var locs = Data.findFit.map.locations;
      locs.forEach(function(value, i, self){
        var position =  new daum.maps.LatLng(locs[i].latitude, locs[i].longitude)
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
