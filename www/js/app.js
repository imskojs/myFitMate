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
  //////////////////////////////////////
  //////////////// 0 INIT //////////////
  //////////////////////////////////////
  .state('init', {
    abstract: true,
    url: '/init',
    templateUrl: "states/init/init.html",
  })

  .state('init.login', {
    url: '/login',
    templateUrl: "states/init/init-login.html"
  })
  .state('init.favorite', {
    url: '/favorite',
    templateUrl: "states/init/init-favorite.html",
    controller: 'init.favorite'
  })


  //////////////////////////////////////
  //////////////// 0 MAIN //////////////
  //////////////////////////////////////
  .state('main', {
    url: "/main",
    templateUrl: "states/main.html",
    controller: 'MainController'
  })

  //////////////////////////////////////
  /////////////// 1 MAP /////////////
  //////////////////////////////////////
  .state('findFit', {
    abstract: true,
    url: '/findFit',
    templateUrl: "states/findFit/findFit.html"
  })
  .state('findFit.map', {
    url: "/map", //modal()
    templateUrl: "states/findFit/findFit-map.html"
  })

  //////////////////////////////////////
  /////////////// 2 CLUB /////////////
  //////////////////////////////////////

  .state('club', {
    abstract: true,
    url: '/club',
    templateUrl: "states/club/club.html"
  })
  .state('club.details', {
    url: '/details/:clubId',
    templateUrl: "states/club/club-details.html"
  })
  .state('club.write', {
    url: '/write/:clubId',
    templateUrl: "states/club/club-write.html"
  })


  //////////////////////////////////////
  /////////////// 3 FIT MATE /////////////
  //////////////////////////////////////
  .state('fitMate', {
    abstract: true,
    url: "/fitMate",
    templateUrl: "states/fitMate/fitMate.html",
    controller: "fitMate"
  })

  .state('fitMate.list', {
    url: "/list/:location",
    templateUrl: "states/fitMate/fitMate-list.html",
  })

  .state('fitMate.write', {
    url: "/write",
    templateUrl: "states/fitMate/fitMate-write.html",
    controller: 'fitMate.write'
  })

  .state('fitMate.details', {
    url: "/details",
    templateUrl: "states/fitMate/fitMate-details.html",
    params: {fitMatePostId: null},
    controller: 'fitMate.details'
  })
  //////////////////////////////////////
  ///////////// 4 FIT INFO /////////////
  ////////////////////////////////////// 
  .state('fitInfo', {
    abstract: true,
    url: '/fitInfo',
    templateUrl: 'states/fitInfo/fitInfo.html',
    controller: 'fitInfo'
  })
  .state('fitInfo.list', {
    url: "/list",
    templateUrl: "states/fitInfo/fitInfo-list.html"
  })
  .state('fitInfo.write', {
    url: "/write/:infoPostId",
    templateUrl: "states/fitInfo/fitInfo-write.html"
  })

  .state('fitInfo.details', {
    url: "/details/:locationId",
    templateUrl: "states/fitInfo/fitInfo-details.html"
  })

  //////////////////////////////////////
  /////////////// 5 Consult  ///////////
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
  //////////////  6 Event  /////////////
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

  $urlRouterProvider.otherwise('/init/login');
});
