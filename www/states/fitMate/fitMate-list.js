angular.module('myFitMate')
.controller('fitMate.list', function(
  $scope, Data, Utility, $timeout
){ $scope.$on('$ionicView.beforeEnter', function(){

var $ = Utility;

$scope.goTo = function (post){
  $.goTo('fitMate.details', {fitMatePostId: post.postId});
}

$scope.moreData = function (){
  return Data.fitMate.moreData;
}

$scope.loadMore = function (){
  $.Post.findOld({category: Data.fitMate.selectedCategory.data, number: '10', postId: Data.fitMate.lastPost.postId})
  .then(function(response){
    response.posts.forEach(function (post){
      $scope.posts.push(post)
    })
    $scope.$broadcast('scroll.infiniteScrollComplete')
    Data.fitMate.lastPost = $scope.posts[$scope.posts.length -1];
    console.dir(Data.fitMate.lastPost);
  })
}








// END beforeEnter
});
// END controller factory function.
});