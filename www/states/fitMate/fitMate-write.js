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
  $.Post.findOne({id: Data.fitMate.details.correctionPostId})
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
    content.createdById = Data.init.login.userId
    $.Post.create(content)
    .then(
      function (response){
        $.Post.resetPost(content);
        $.stopLoading();
        $.goToState('fitMate.details', {fitMatePostId: response.postId})
      }, 
      $.errorMessage.bind(null, '제목과 내용을 입력해주세요')
    );
  } else {
    Data.fitMate.details.requestCorrection = false;
    var parts = {};
    parts.title = content.title;
    parts.content = content.content

    $.Post.update({id: Data.fitMate.details.correctionPostId}, parts)
    .then(
      function (response){
        $.Post.resetPost(content);
        $.stopLoading();
        $.goToState('fitMate.details', {fitMatePostId: response.postId})
        Data.fitMate.details.correctionPostId = null;
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