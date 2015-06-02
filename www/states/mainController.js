angular.module('myFitMate')
.controller('root', function (
$scope, Utility, Data, $window, $cordovaSocialSharing
){
  var $ = Utility;
  $scope.selected = {
    item:''
  };

  $scope.resetCat = function (index){
    $scope.selected.item = index;
    $.empty(Data.init.favorite.selectedOption);
    $.extend(Data.init.favorite.selectedOption, Data.init.favorite.options[index]);
    console.log(Data.init.favorite.selectedOption);
  }
  $scope.logout = function (){
    console.log('TODO: OauthLogout')
  }
  $scope.applicatGo = function (){
    $window.location.href='http://applicat.co.kr'; 
  }
  $scope.share = function (){

    // $cordovaSocialSharing
    // .shareViaFacebook(
    //   'Placeholder message.', 
    //   'Placeholder message2', 
    //   'http://applicat.co.kr' 
    // )
    // .then(function (result){
    //   console.log('success');
    // }, function (error){
    //   console.log('error');
    // });
    $cordovaSocialSharing
    .share(
      'This is a message',
      'This is a subject',
      null,
      'http://applicat.co.kr'
    )
    .then(function (suc){
      console.log(suc);
    }, function (err){
      console.log(err);
    });
  };

})