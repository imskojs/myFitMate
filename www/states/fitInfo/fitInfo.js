angular.module('myFitMate')
.controller('fitInfo', function(
  $scope, Data, Utility, $timeout
){
var $ = Utility;
  // Start
$scope.categories = Data.fitInfo.categories;

if(Data.fitInfo.firstVisit){
  $timeout(function (){
    angular.element('#25').trigger('click');
    Data.fitInfo.firstVisit = false;
  }, 0);
}

$scope.selectHandler = function(categories, categoryMenu, $index, $event, num, category){
  Data.fitInfo.moreData = false;
  Data.fitInfo.selectedCategory = category;
  $.subHeaderMenuScroller(categories, categoryMenu, $index, $event, num, category);
  $.goTo('fitInfo.list');
  $.Post.find({category: Data.fitInfo.selectedCategory.data, number: '10'})
  .then(function(response){
    $scope.posts = response.posts;
    if(response.posts.length === 10){
      Data.fitInfo.moreData = true;
    } else {
      Data.fitInfo.moreData = false;
    }
    Data.fitInfo.lastPost = response.posts[response.posts.length - 1];
  }, function (error){
    $.errorMessage.bind(null, '요청하신 자료가 없습니다.');
  })
};
})