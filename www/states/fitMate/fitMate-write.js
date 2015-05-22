angular.module('myFitMate')
.controller('fitMate.write', function(
  $scope, Data, Utility
){ $scope.$on('$ionicView.beforeEnter', function(){
console.log(Data.fitMate.details.correctionPostId);

var $ = Utility;

$scope.buttonText= "등록하기"


if(Data.fitMate.details.requestCorrection){
  $scope.buttonText = "수정하기";
  $.startLoading();
  $.post.getById(Data.fitMate.details.correctionPostId)
  .then(
    function(response){
      $scope.form = response;
      $.stopLoading();
    },
    $.errorMessage.bind(null, '수정불가합니다.')
  );
}

$scope.processPost = function (content){
  $.startLoading();
  if(!Data.fitMate.details.requestCorrection){
    content.category = Data.fitMate.selectedCategory.data;
    content.createdBy = Data.init.login.userName;
    $.post.send(content)
    .then(
      function (response){
        $.post.resetPost(content);
        $.stopLoading();
        $.goToState('fitMate.details', {fitMatePostId: response.postId})
      }, 
      $.errorMessage.bind(null, '제목과 내용을 입력해주세요')
    );
  } else {
    var parts = {};
    parts.title = content.title;
    parts.content = content.content
    $.post.update(Data.fitMate.details.correctionPostId, parts)
    .then(
      function (response){
        $.post.resetPost(content);
        $.stopLoading();
        $.goToState('fitMate.details', {fitMatePostId: response.postId})
      }, 
      $.errorMessage.bind(null, '제목과 내용을 입력해주세요')
    )
  }
};


$scope.goToState = $.goToState; 
// save form
$scope.form = Data.fitMate.write.form;

// END beforeEnter
});
});