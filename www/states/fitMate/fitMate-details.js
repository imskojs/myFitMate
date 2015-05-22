angular.module('myFitMate')
.controller('fitMate.details',function(
  $scope, Data, Utility, $timeout
){ $scope.$on('$ionicView.beforeEnter', function(){

var $ = Utility;
//Get and load post
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
    }
  );
};




// END 
});
});