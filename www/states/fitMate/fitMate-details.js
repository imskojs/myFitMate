angular.module('myFitMate')
.controller('fitMate.details',function(
  $scope, Data, Utility
){
var $ = Utility;
//Get and load post
$scope.$on('$ionicView.beforeEnter', function(){
  $.startLoading();
  $.post.getById( $.getStateParam('fitMatePostId') )
  .then(
    function( response ){
      $scope.currentPost = response;
      $.stopLoading();
    },
    $.errorMessage.bind(null, '삭제된 내용입니다.')
  );
});
//correcting post;
$scope.processCorrect = function () {
  // set correction parameter to true
  Data.fitMate.details.requestCorrection = true;
  Data.fitMate.details.correctionPostId = $.getStateParam('fitMatePostId');
  // move to fiMate.write state
  $.goToState('fitMate.write');
  // check fitMatePostId param
  // load post with fitMatePostId
  // if correction parameter is true then request update existing
  // change text from register to update.
  // else request post new post.
  // on update set correction parameter to false.
  // move to corrected post.
}





// END
});