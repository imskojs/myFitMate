angular.module('myFitMate')
.controller('fitMate.details',function(
  $scope, Data, Utility, $timeout, $animate
){ $scope.$on('$ionicView.beforeEnter', function(){

var $ = Utility;
//Get and load post
$scope.manage = false;
$scope.createdComment={};

//Load with given stateParam
$.loadingOn();
$.Post.findOne( {id: $.getStateParam('fitMatePostId')} )
.then(function( response ){
  $scope.currentPost = response;
  $.loadingOff();
})
.catch(
  $.errorMessage.bind(null, '삭제된 내용입니다.')
);

//Pre-updatePost, logic to move to updating page with params;
$scope.updatePost = function () {
  Data.fitMate.details.requestCorrection = true;
  Data.fitMate.details.correctionPostId = $.getStateParam('fitMatePostId');
  $.goTo('fitMate.write');
}

// Delete Post
$scope.destroyPost = function (){
  // TODO: Check currentUserId is the same as createdById of the post.

  // delete post with current stateParam
  $.Post.destroy({id: $.getStateParam('fitMatePostId')})
  .then(function (response){
    $scope.currentPost = {};
    $.warningMessage('포스트 내용이 지워졌습니다.');
    $timeout($.goTo.bind(null, 'fitMate.list'), 1500);
  })
  .catch(
    $.errorMessage.bind(null, '삭제못하는 내용입니다.')
  );
};

// Create Comment for this post, then re-query same post
$scope.createComment = function(commentObj){
  // add comment creator detail
  commentObj.createdBy = Data.init.login.userName;
  // comment containing post detail
  commentObj.post = $.getStateParam('fitMatePostId');
  // create comment
  $.Comment.create(commentObj)
    // reload post with comments added
  .then(function(response){
    $scope.commentObj = {}
    return $.Post.findOne( {id: $.getStateParam('fitMatePostId')} );
  }, function (error){
    $.errorMessage('댓글을 달수가 없습니다.');
  })
  .then(function(response){
    $scope.currentPost = response;
    $scope.createdComment.content = '';
    $.warningMessage('댓글을 다셨습니다. 멋진 FITMATE가 곧 생길꺼에요!');
  }, function (error){
    $.errorMessage('삭제된 내용입니다.');
  })
};

$scope.destroyComment = function (commentObj){
  // TODO: Check currentUserID is the same as createdById of the post

  // {content: 'hello', createdAt: '2015/05/26 09:14:53', createdBy:'Seunghoon Ko', id: 99, post: 163}
  // get comment.id
  var id = commentObj.id
  // send delete request by id 
  $.Comment.destroy({id: commentObj.id})
  .then(function(){
    $.warningMessage('댓글을 지우셨습니다.');
    return $.Post.findOne({id: $.getStateParam('fitMatePostId')})
  })
  .then(function(updatedPost){
    $scope.currentPost = updatedPost;
  })
  .catch(function(error){
    $.errorMessage('댓글을 삭제할수 없습니다.')
  })

  // send get request byPostId by current stateParams.
  // Message "뎃글이 지워졌습니다."
  // update $scope.currentPost
}



// END 
});
});