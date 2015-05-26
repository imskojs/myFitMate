angular.module('myFitMate')
.controller('fitMate', function(
  $scope, Data, Utility, $timeout
){
var $ = Utility;

$scope.categories = Data.fitMate.categories;
if(Data.fitMate.firstVisit){
  $timeout(function (){
    angular.element('#0').trigger('click');
    Data.fitMate.firstVisit = false;
  }, 0);
}

$scope.selectHandler = function(categories, categoryMenu, $index, $event, num, category){
  Data.fitMate.moreData = false;
  Data.fitMate.selectedCategory = category;
  $.subHeaderMenuScroller(categories, categoryMenu, $index, $event, num, category);
  $.goTo('fitMate.list');
  $.Post.find({category: Data.fitMate.selectedCategory.data, number: '10'})
  .then(function(response){
    $scope.posts = response.posts;
    if(response.posts.length === 10){
      Data.fitMate.moreData = true;
    } else {
      Data.fitMate.moreData = false;
    }
    Data.fitMate.lastPost = response.posts[response.posts.length - 1];
  }, function (error){
    $.errorMessage.bind(null, '요청하신 자료가 없습니다.');
  })
};


});