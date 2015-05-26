angular.module('myFitMate')
.controller('fitMate.list', function(
  $scope, Data, Utility, $timeout
){ $scope.$on('$ionicView.beforeEnter', function(){

// Default
var $ = Utility;
var lastPost = {};
// retrigger currently selected. To load data. (selectHandler in fitMate)
$timeout(function(){
  angular.element('#' + Data.fitMate.selectedCategory.id).trigger('click')
}, 0);

var category = Data.fitMate.selectedCategory;
console.dir(category)
$scope.goTo = function (post){
  console.log(post)
  $.goTo('fitMate.details', {fitMatePostId: post.postId});
}


$scope.loadMore = function (){
  // $.Post.findOld({category: category.data, number: '10', postId: lastPost.postId})
  $.Post.findOld({category: 'KANGNAM', number: '10', postId: 9999})
  .then(function(response){
    console.log(response)
    $scope.posts = $scope.posts.concat(response.posts);
    lastPost = $scope.posts[$scope.posts.length -1];
  })
  $scope.$broadcast('scroll.infiniteScrollComplete')
}


// $.Post.find({category: category.data, number: '10'})
// .then(function(response){
//   $scope.posts = response.posts;
//   lastPost = $scope.posts[$scope.posts.length - 1];
// }, function (error){
//   $.errorMessage.bind(null, '요청하신 자료가 없습니다.');
// })






// END beforeEnter
});
// END controller factory function.
});