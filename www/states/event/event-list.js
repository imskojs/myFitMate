angular.module('myFitMate')
.controller('event.list', function(
  $scope, Data, Utility, $timeout
){ $scope.$on('$ionicView.beforeEnter', function(){
var $ = Utility;

$.Post.find({category: 'EVENT', number: '10'})
.then(function(response){
  console.log(123)
  $scope.posts = response.posts;
  if(response.posts.length === 10){
    Data.event.moreData = true;
  } else {
    Data.event.moreData = false;
  }
  Data.event.lastPost = response.posts[response.posts.length - 1];
}, function (error){
    $.errorMessage.bind(null, '요청하신 자료가 없습니다.');
})

//start
$scope.goTo = function (post){
  $.goTo('event.details', {eventPostId: post.postId});
}

$scope.moreData = function (){
  return Data.event.moreData;
}

$scope.loadMore = function (){
  $.Post.findOld({category: Data.event.selectedCategory.data, number: '10', postId: Data.event.lastPost.postId})
  .then(function(response){
    response.posts.forEach(function (post){
      $scope.posts.push(post)
    })
    $scope.$broadcast('scroll.infiniteScrollComplete')
    Data.event.lastPost = $scope.posts[$scope.posts.length -1];
  })
}








// END beforeEnter
});
// END controller factory function.
});