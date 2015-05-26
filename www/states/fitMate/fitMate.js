angular.module('myFitMate')
.controller('fitMate', function(
  $scope, Data, Utility
){
  var $ = Utility;

  // Default values.
  $scope.categories = Data.fitMate.categories;
  // $scope.subHeaderMenuScroller = $.subHeaderMenuScroller;

  $scope.selectHandler = function(categories, categoryMenu, $index, $event, num, category){
    Data.fitMate.selectedCategory = category;
    $.subHeaderMenuScroller(categories, categoryMenu, $index, $event, num, category);

    // load post with the data.
    $.goTo('fitMate.list');
    $.Post.find({category: category.data, number: '10'})
    .then(function(response){
      $scope.posts = response.posts;
    }, function (error){
      $.errorMessage.bind(null, '요청하신 자료가 없습니다.');
    })

  }

})