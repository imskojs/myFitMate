angular.module('myFitMate')
.controller('fitMate', function(
  $scope, Data, Utility, $timeout
){
var $ = Utility;

//// Default values.
$scope.categories = Data.fitMate.categories;
// KANGNAM at first visit.
if(Data.fitMate.firstVisit){
  $timeout(function (){
    angular.element('#0').trigger('click');
    Data.fitMate.firstVisit = false;
  }, 0);
}

//// Menu click handler.
$scope.selectHandler = function(categories, categoryMenu, $index, $event, num, category){
  Data.fitMate.selectedCategory = category;
  console.log(Data.fitMate.selectedCategory);
  $.subHeaderMenuScroller(categories, categoryMenu, $index, $event, num, category);
  // load post with the data.
  $.goTo('fitMate.list');
  $.Post.find({category: category.data, number: '10'})
  .then(function(response){
    $scope.posts = response.posts;
  }, function (error){
    $.errorMessage.bind(null, '요청하신 자료가 없습니다.');
  })
};



})