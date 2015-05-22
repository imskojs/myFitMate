angular.module('myFitMate')
.controller('fitMate.write', function(
  $scope, Data, Utility
){ 
var $ = Utility;

$scope.processPost = function (content){
  // fill post username, category
  content.category = Data.fitMate.selectedCategory.location;
  content.createdBy = Data.init.login.userName;
  // send post
  $.startLoading();
  $.post.send(content)
  .then(
    function (response){
      $.post.resetPost(content);
      $.stopLoading();
      $.goToState('fitMate.details', {postId: response.postId})
    }, 
    $.errorMessage.bind(null, '제목과 내용을 입력해주세요')
  );
};

$scope.goToState = $.goToState; 
// save form
$scope.form = Data.fitMate.write.form;

// END
})