angular.module('myFitMate')
.controller('consult.list', function(
  $scope, Data, Utility, $timeout
){ $scope.$on('$ionicView.beforeEnter', function(){
var $ = Utility;

$.Post.find({category: 'CONSULT', number: '10'})
.then(function(response){
  console.log(123)
  $scope.posts = response.posts;
  if(response.posts.length === 10){
    Data.consult.moreData = true;
  } else {
    Data.consult.moreData = false;
  }
  Data.consult.lastPost = response.posts[response.posts.length - 1];
}, function (error){
    $.errorMessage.bind(null, '요청하신 자료가 없습니다.');
})

//start
$scope.goTo = function (post){
  $.goTo('consult.details', {consultPostId: post.postId});
}

$scope.moreData = function (){
  return Data.consult.moreData;
}

$scope.loadMore = function (){
  $.Post.findOld({category: Data.consult.selectedCategory.data, number: '10', postId: Data.consult.lastPost.postId})
  .then(function(response){
    response.posts.forEach(function (post){
      $scope.posts.push(post)
    })
    $scope.$broadcast('scroll.infiniteScrollComplete')
    Data.consult.lastPost = $scope.posts[$scope.posts.length -1];
    console.dir(Data.consult.lastPost);
  })
}








// END beforeEnter
});
// END controller factory function.
});