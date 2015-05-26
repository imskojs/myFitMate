angular.module('myFitMate')
.controller('fitInfo.write', function(
  $scope, Data, Utility
){ $scope.$on('$ionicView.beforeEnter', function(){
var $ = Utility;
$scope.buttonText= "등록하기";
$scope.form = {};

(function createOrUpdateChecker(){
  if(Data.fitInfo.details.requestCorrection){
    $scope.buttonText = "수정하기";
    $.loadingOn();
    $.Post.findOne({id: Data.fitInfo.details.correctionPostId})
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
  if(!Data.fitInfo.details.requestCorrection){
    content.category = Data.fitInfo.selectedCategory.data;
    content.createdBy = Data.init.login.userName;
    content.createdById = Data.init.login.userId
    promiseObj = $.Post.create(content)
  } else {
    Data.fitInfo.details.requestCorrection = false;
    var parts = {};
    parts.title = content.title;
    parts.content = content.content
    promiseObj = $.Post.update({id: Data.fitInfo.details.correctionPostId}, parts)
  }
  promiseObj
  .then (function (response){
    Data.fitInfo.details.correctionPostId = null;
    $.Post.resetPost(content);
    $.loadingOff();
    $.goTo('fitInfo.details', {fitInfoPostId: response.postId})
  }) 
  .catch(
    $.errorMessage.bind(null, '제목과 내용을 입력해주세요')
  );
};


// END beforeEnter
});
// END controller factory function.
});