angular.module('myFitMate')
.controller('CategoryMenuController', function(
$scope, $ionicScrollDelegate, LocationData 
){


  var menuLength = LocationData.locations.length
  $scope.menuClickHandler = function($index, $event, target){
    var menuPixelLength = angular.element('.location-ul').prop('offsetWidth');
    var pixelPerItem = menuPixelLength / menuLength 
    var currentTarget = angular.element($event.currentTarget)
    var currentId = currentTarget.attr('id');

    currentTarget.siblings().removeClass('active');
    currentTarget.addClass('active')

    var pixelLocation = pixelPerItem * ($index - 2.8);
    $ionicScrollDelegate.$getByHandle('categoryMenu').scrollTo(pixelLocation, 0, true) 
  }

})