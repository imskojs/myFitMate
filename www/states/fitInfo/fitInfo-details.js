angular.module('myFitMate')
.controller('fitInfo.details',function(
  $scope, Data, Utility, $timeout, $animate
){ $scope.$on('$ionicView.beforeEnter', function(){
var $ = Utility;

$scope.manage = false;
$scope.createdComment={};

$.loadingOn();

$.Post.findOne( {id: $.getStateParam('fitInfoPostId')} )
.then(function( response ){
  $scope.currentPost = response;
  $.loadingOff();
})
.catch(
  $.errorMessage.bind(null, '삭제된 내용입니다.')
);

$scope.updatePost = function () {
  Data.fitInfo.details.requestCorrection = true;
  Data.fitInfo.details.correctionPostId = $.getStateParam('fitInfoPostId');
  $.goTo('fitInfo.write');
}

$scope.destroyPost = function (){
  // TODO: Check currentUserId is the same as createdById of the post.
  $.Post.destroy({id: $.getStateParam('fitInfoPostId')})
  .then(function (response){
    $scope.currentPost = {};
    $.warningMessage('포스트 내용이 지워졌습니다.');
    $timeout($.goTo.bind(null, 'fitInfo.list'), 1500);
    $timeout(function (){
      angular.element('#' + Data.fitInfo.selectedCategory.id).trigger('click');
      Data.fitInfo.firstVisit = false;
      $.goTo('fitInfo.list')
    }, 1500);
  })
  .catch(
    $.errorMessage.bind(null, '삭제못하는 내용입니다.')
  );
};

$scope.createComment = function(commentObj){
  commentObj.createdBy = Data.init.login.userName;
  commentObj.post = $.getStateParam('fitInfoPostId');
  $.Comment.create(commentObj)
  .then(function(response){
    $scope.commentObj = {}
    return $.Post.findOne( {id: $.getStateParam('fitInfoPostId')} );
  }, function (error){
    $.errorMessage('댓글을 달수가 없습니다.');
  })
  .then(function(response){
    $scope.currentPost = response;
    $scope.createdComment.content = '';
    $.warningMessage('댓글을 다셨습니다. 멋진 fitInfo가 곧 생길꺼에요!');
  }, function (error){
    $.errorMessage('삭제된 내용입니다.');
  })
};

$scope.destroyComment = function (commentObj){
  // TODO: Check currentUserID is the same as createdById of the post
  $.Comment.destroy({id: commentObj.id})
  .then(function(){
    $.warningMessage('댓글을 지우셨습니다.');
    return $.Post.findOne({id: $.getStateParam('fitInfoPostId')})
  })
  .then(function(updatedPost){
    $scope.currentPost = updatedPost;
  })
  .catch(function(error){
    $.errorMessage('댓글을 삭제할수 없습니다.')
  })
};

$scope.goBack = function (){
  $.goTo('fitInfo.list');
  $timeout(function (){
    angular.element('#' + Data.fitInfo.selectedCategory.id).trigger('click');
    Data.fitInfo.firstVisit = false;
  }, 0);
};



// END 
});
});