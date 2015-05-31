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
})
.directive('enter', function (){
  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, ngModelCtrl){
      elem.bind('keyup', function (e){
        if(e.keyCode === 13){
          scope.$apply(function (){
            ngModelCtrl.$commitViewValue();
            elem[0].blur();
            try{
              cordova.plugins.Keyboard.close();
            } catch (err){
              console.log(err);
            }
            elem.text('');
          })
        }
      })
    }
  }
})
.directive('daum', function (Data, Utility, $timeout){
  var $ = Utility;
  return{
    link: function (scope, elem, attrs){
      var locs = Data.findFit.map.locations;
      var index = $.getStateParam('clubId');
      console.log(locs[index])
      var center0 = locs[index].latitude;
      var center1 = locs[index].longitude;
      var DOM = elem[0];
      var mapOptions = {
        center: new daum.maps.LatLng(center0, center1),
        level: 5,
        marker: {
          position: new daum.maps.LatLng(center0, center1)
        }
      };
      new daum.maps.StaticMap(DOM, mapOptions);
    }
  };
})