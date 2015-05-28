angular.module('myFitMate')
.directive('touched', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {

      element.on('touchstart', function(event) {
        scope.$apply(function() {
          element.addClass('touched');
        });
      });

      element.on('touchend', function(event) {
        scope.$apply(function() {
          element.removeClass('touched');
        });
      });
    }
  }
});