angular.module('myFitMate')
.controller('club.write', function (
$scope, Data, Utility
){$scope.$on('$ionicView.enter', function(){
var $ = Utility;
var index = $.getStateParam('writeId')
var postId = Data.findFit.map.locations[index].id

//Current data object
$scope.writeContent = Data.findFit.map.locations[index];
//From
$scope.form = {};
$scope.form.title = null;
$scope.form.tel = null;
$scope.form.content = null;

// Use postId === data_id to send notification to the registered business
// send form to registered user.
console.log(postId);
$scope.register = function (){
  // send to server

  // reset form.
  for(var key in $scope.form){
    $scope.form[key] = null
  }
  $.goTo('club.details', {clubId: index});


}

// END
});
});