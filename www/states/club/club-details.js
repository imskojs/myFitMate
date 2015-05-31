angular.module('myFitMate')
.controller('club.details', function (
  $scope, Data, Utility, $timeout, $ionicScrollDelegate, $ionicNavBarDelegate,
  $compile
){
var $ = Utility;
var locs = Data.findFit.map.locations;

$scope.$on('$ionicView.enter', function(){
  var index = $.getStateParam('clubId');
  // Empty current content 
  if(!$scope.currentContent){
    $scope.currentContent = {};
  } else {
    angular.forEach($scope.currentContent, function (value, key, self){
      delete self[key]
    })
  }
  // Update view content
  angular.extend($scope.currentContent, locs[index]);
  $ionicNavBarDelegate.title($scope.currentContent.title);

// clicks
$scope.write = function (){
  $.goTo('club.write', {writeId: index})
};
//// END
});
});