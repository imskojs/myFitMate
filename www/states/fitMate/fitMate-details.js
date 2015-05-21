angular.module('myFitMate')
.controller('fitMate.details',function(
  $scope, Data, Utility, $stateParams
){
  $scope.$on('$ionicView.beforeEnter', function(){
    Utility.getPostDetailsFromServer($stateParams.fitMatePostId).then(function(data){
      Utility.stopLoading();
      $scope.currentPost = data
      console.log($scope.currentPost);
    }, Utility.getDetailsErrorHandler)
  })



//// 
})