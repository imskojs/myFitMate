angular.module('myFitMate')
.controller('findFit.map', function (
$scope, Data, Utility, $timeout
){ $scope.$on('$ionicView.enter', function(){


var windowWidth = angular.element('body').width();

// Create Map;
var DOM = angular.element('.daum-map-container')[0]
var mapOptions = {
  center: new daum.maps.LatLng(33.450701, 126.570667),
  level: 3
}
var map = new daum.maps.Map(DOM, mapOptions)

var locs = Data.findFit.map.requestedLocations;

// Marker style.
var markerWidth = windowWidth * .111;
var markerHeight = windowWidth * .055;
var markerSrc = 'img/04_map/1080x1920/icon_map_unselect.png';

//TODO iwContent dynamic
var iwContent = '<div style="padding:5px"> Hello </div>';
var infoWindow = new daum.maps.InfoWindow({
  content: iwContent,
  removable: true 
});

for(var i = 0; i < locs.length; i++){
  var markerSize = new daum.maps.Size(markerWidth, markerHeight);
  var markerImg = new daum.maps.MarkerImage(markerSrc, markerSize);
  var marker = new daum.maps.Marker({
    map: map,
    position: locs[i].latlng,
    title: locs[i].title,
    image: markerImg,
    clickable: true
  })
  daum.maps.event.addListener(marker, 'click', function() {
        // 마커 위에 인포윈도우를 표시합니다
        console.log(marker)
        infoWindow.open(map, marker);  
  });
}




// after Enter view
})
// End of controller 
})