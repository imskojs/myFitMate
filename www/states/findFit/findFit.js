angular.module('myFitMate')
.controller('findFit', function (
$scope
){

$scope.search = {};
$scope.search.place = '' 
$scope.event = {};

$scope.findMe = function (){
  navigator.geolocation.getCurrentPosition(function (position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
  })
}
////END
})
