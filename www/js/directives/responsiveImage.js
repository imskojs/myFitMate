// TODO: fix responsive height;
angular.module('myFitMate')
.directive('imageHeight', function(){
  return {
    restrict: 'A',
    scope: {
      imageHeight: '@'
    },
    link: function($scope, el, attrs){
      $scope.$on('$viewContentLoaded', function(){

        var viewHeight = $('body').height();
        console.log(viewHeight);
        var heightPixel = viewHeight * Number(scope.imageHeight) / 100;
        el.height(heightPixel);
      })
    }
  }
})