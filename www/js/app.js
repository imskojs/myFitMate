// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myFitMate', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('login', {
    url: "/login"
  })

  .state('favorite', {
    url: "/favorite"
  })

  .state('main', {
    url: "/main",
    templateUrl: "states/main.html",
    controller: 'MainController'
  })

  //////////////////////////////////////
  /////////////// 0 MAP /////////////
  //////////////////////////////////////
  .state('findFit', {
    abstract: true,
    url: '/findFit'
  })
  .state('findFit.map', {
    url: "/map" //modal()
  })
  .state('findFit.info', {
    url: "/info/:locationId",
  })

  .state('findFit.receive', {
    url: "/receive/:locationId"
  })

  //////////////////////////////////////
  /////////////// 1 FIT MATE /////////////
  //////////////////////////////////////
  .state('fitMate', {
    abstract: true,
    url: "/fitMate",
    templateUrl: "states/fitMate/fitMate.html",
    controller: "FitMateListController"
  })

  .state('fitMate.list', {
    url: "/list",
    templateUrl: "states/fitMate/fitMate-list.html",
  })

  .state('fitMate.write', {
    url: "/write",
    templateUrl: "states/fitMate/fitMate-write.html"
  })

  .state('fitMate.details', {
    url: "/details/:fitMatePostId",
    templateUrl: "states/fitMate/fitMate-details.html"
  })
  //////////////////////////////////////
  ///////////// 2 FIT INFO /////////////
  ////////////////////////////////////// 
  .state('fitInfo', {
    abstract: true,
    url: '/fintInfo',
    templateUrl: "states/fitInfo/fitInfo.html",
  })
  .state('fitInfo.list', {
    url: "/list",
    templateUrl: "states/fitInfo/fitInfo-list.html"
  })
  .state('fitInfo.write', {
    url: "/info/:infoPostId",
    templateUrl: "states/fitInfo/fitInfo-write.html"
  })

  .state('fitInfo.details', {
    url: "/details/:locationId",
    templateUrl: "states/fitInfo/fitInfo-details.html"
  })

  //////////////////////////////////////
  /////////////// 3 Consult  ///////////
  //////////////////////////////////////
  .state('consult', {
    abstract: true,
    url: "/consult",
    templateUrl: "states/consult/consult.html"
  })

  .state('consult.list', {
    url: "/list",
    templateUrl: "states/consult/consult-list.html"
  })
  .state('consult.write', {
    url: "/write",
    templateUrl: "states/consult/consult-write.html"
  })

  .state('consult.details', {
    url: "/details:consultPostId",
    templateUrl: "states/consult/consult-details.html"
  })
  //////////////////////////////////////
  //////////////  4 Event  /////////////
  //////////////////////////////////////
  .state('event', {
    abstract: true,
    url: "/event",
    templateUrl: "states/event/event.html"
  })

  .state('event.list', {
    url: "/list",
    templateUrl: "states/event/event-list.html"
  })
  .state('event.write', {
    url: "/write",
    templateUrl: "states/event/event-write.html"
  })

  .state('event.details', {
    url: "/event",
    templateUrl: "states/event/event-details.html"
  });

  $urlRouterProvider.otherwise('/main');
});
