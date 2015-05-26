angular.module('myFitMate')
.controller('consult.write', function(
  $scope, Data, Utility
){ $scope.$on('$ionicView.beforeEnter', function(){
var $ = Utility;
$scope.buttonText= "등록하기";
$scope.form = {};

(function createOrUpdateChecker(){
  if(Data.consult.details.requestCorrection){
    $scope.buttonText = "수정하기";
    $.loadingOn();
    $.Post.findOne({id: Data.consult.details.correctionPostId})
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
  if(!Data.consult.details.requestCorrection){
    content.category = "CONSULT";
    content.createdBy = Data.init.login.userName;
    content.createdById = Data.init.login.userId
    promiseObj = $.Post.create(content)
  } else {
    Data.consult.details.requestCorrection = false;
    var parts = {};
    parts.title = content.title;
    parts.content = content.content
    promiseObj = $.Post.update({id: Data.consult.details.correctionPostId}, parts)
  }
  promiseObj
  .then (function (response){
  console.log('test')
    Data.consult.details.correctionPostId = null;
    $.Post.resetPost(content);
    $.loadingOff();
    $.goTo('consult.details', {consultPostId: response.postId})
  }) 
  .catch(
    $.errorMessage.bind(null, '제목과 내용을 입력해주세요')
  );
};


// END beforeEnter
});
// END controller factory function.
});