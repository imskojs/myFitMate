angular.module('myFitMate')
.controller('fitMate.list', function(
  $scope, Data, Utility, $timeout
){ $scope.$on('$ionicView.beforeEnter', function(){

var $ = Utility;

$scope.goTo = function (post){
  $.goTo('fitInfo.details', {fitInfoPostId: post.postId});
}

$scope.moreData = function (){
  return Data.fitInfo.moreData;
}

$scope.loadMore = function (){
  $.Post.findOld({category: Data.fitInfo.selectedCategory.data, number: '10', postId: Data.fitInfo.lastPost.postId})
  .then(function(response){
    response.posts.forEach(function (post){
      $scope.posts.push(post)
    })
    $scope.$broadcast('scroll.infiniteScrollComplete')
    Data.fitInfo.lastPost = $scope.posts[$scope.posts.length -1];
    console.dir(Data.fitInfo.lastPost);
  })
}








// END beforeEnter
});
// END controller factory function.
});