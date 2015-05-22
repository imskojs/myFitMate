angular.module('myFitMate')
.controller('fitMate.details',function(
  $scope, Data, Utility, $timeout, $animate
){ $scope.$on('$ionicView.beforeEnter', function(){

var $ = Utility;
//Get and load post
$scope.manage = false;
$scope.createdComment={};

$.startLoading();
$.post.getById( $.getStateParam('fitMatePostId') )
.then(
  function( response ){
    $scope.currentPost = response;
    $.stopLoading();
  },
  $.errorMessage.bind(null, '삭제된 내용입니다.')
);
//correcting post;
$scope.processCorrect = function () {
  Data.fitMate.details.requestCorrection = true;
  Data.fitMate.details.correctionPostId = $.getStateParam('fitMatePostId');
  $.goToState('fitMate.write');
}

$scope.processDelete = function (){
  // delete post with current stateParam
  $.post.delete($.getStateParam('fitMatePostId'))
  .then(
    function (response){
      $scope.currentPost = {};
      $.warningMessage('포스트 내용이 지워졌습니다.');
      $timeout($.goToState.bind(null, 'fitMate.list'), 1500);
    },
    $.errorMessage.bind(null, '삭제못하는 내용입니다.')
  );
};

$scope.processComment = function(createdComment){
  createdComment.createdBy = Data.init.login.userName;
  createdComment.post = $.getStateParam('fitMatePostId');
  $.comment.send(createdComment)
  .then(
    function(response){
      $scope.createdComment = {}
      return $.post.getById( $.getStateParam('fitMatePostId') );
    },
    $.errorMessage.bind(null, '댓글을 달수가 없습니다.')
  )
  .then( 
    function(response){
      $scope.currentPost = response;
      $.warningMessage('댓글을 다셨습니다. 멋진 FITMATE가 곧 생길꺼에요!');
    },
    $.errorMessage.bind(null, '삭제된 내용입니다.')
  )
};

$scope.processDeleteComment = function ($index, commentObj){

}



// END 
});
});