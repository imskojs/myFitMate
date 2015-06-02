angular.module('myFitMate')
.controller('fitMate.write', function(
  $scope, Data, Utility
){ $scope.$on('$ionicView.beforeEnter', function(){
var $ = Utility;
$scope.buttonText= "등록하기";
$scope.form = {};

(function createOrUpdateChecker(){
  if(Data.fitMate.details.requestCorrection){
    $scope.buttonText = "수정하기";
    $.loadingOn();
    $.Post.findOne({id: Data.fitMate.details.correctionPostId})
    .then(function(response){
      $scope.form = response;
      $.loadingOff();
    })
    .catch(
      $.errorMessage.bind(null, '수정불가합니다.')
    );
  }
})();

$scope.createPost = function (content){
  $.loadingOn();
  var promiseObj = {};
  if(!Data.fitMate.details.requestCorrection){
    content.category = Data.fitMate.selectedCategory.data;
    content.createdBy = Data.init.login.userName;
    content.createdById = Data.init.login.userId
    promiseObj = $.Post.create(content)
  } else {
    Data.fitMate.details.requestCorrection = false;
    var parts = {};
    parts.title = content.title;
    parts.content = content.content
    promiseObj = $.Post.update({id: Data.fitMate.details.correctionPostId}, parts)
  }
  promiseObj
  .then (function (response){
    Data.fitMate.details.correctionPostId = null;
    $.Post.resetPost(content);
    $.loadingOff();
    $.goTo('fitMate.details', {fitMatePostId: response.postId})
  }) 
  .catch(
    $.errorMessage.bind(null, '제목과 내용을 입력해주세요')
  );
};


// END beforeEnter
});
// END controller factory function.
});