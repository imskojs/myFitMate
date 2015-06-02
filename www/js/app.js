// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myFitMate', ['ionic', 'ngCordova'])

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
    templateUrl: "states/findFit/findFit.html",
    controller: 'findFit'
  })
  .state('findFit.map', {
    url: "/map", //modal()
    templateUrl: "states/findFit/findFit-map.html",
    controller: 'findFit.map'
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
    cache: false,
    url: '/details/:clubId',
    templateUrl: "states/club/club-details.html",
    controller: 'club.details'
  })
  .state('club.write', {
    url: '/write/:writeId',
    templateUrl: "states/club/club-write.html",
    controller: 'club.write'
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
    controller: 'fitMate.list'
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
    url: "/list/:location",
    templateUrl: "states/fitInfo/fitInfo-list.html",
    controller: 'fitInfo.list'
  })
  .state('fitInfo.write', {
    url: "/write",
    templateUrl: "states/fitInfo/fitInfo-write.html",
    controller: 'fitInfo.write'
  })

  .state('fitInfo.details', {
    url: "/details",
    templateUrl: "states/fitInfo/fitInfo-details.html",
    params: {fitInfoPostId: null},
    controller: 'fitInfo.details'
  })

  //////////////////////////////////////
  /////////////// 5 Consult  ///////////
  //////////////////////////////////////
  .state('consult', {
    abstract: true,
    url: "/consult",
    templateUrl: "states/consult/consult.html",
    controller: 'consult'
  })

  .state('consult.list', {
    url: "/list",
    templateUrl: "states/consult/consult-list.html",
    controller: 'consult.list'
  })
  .state('consult.write', {
    url: "/write",
    templateUrl: "states/consult/consult-write.html",
    controller: 'consult.write'
  })

  .state('consult.details', {
    url: "/details",
    templateUrl: "states/consult/consult-details.html",
    params: {consultPostId: null},
    controller: 'consult.details'
  })
  //////////////////////////////////////
  //////////////  6 Event  /////////////
  //////////////////////////////////////
  .state('event', {
    abstract: true,
    url: "/event",
    templateUrl: "states/event/event.html",
    controller: 'event'
  })

  .state('event.list', {
    url: "/list",
    templateUrl: "states/event/event-list.html",
    controller: 'event.list'
  })
  .state('event.write', {
    url: "/write",
    templateUrl: "states/event/event-write.html",
    controller: 'event.write'
  })

  .state('event.details', {
    url: "/details",
    templateUrl: "states/event/event-details.html",
    params: {eventPostId: null},
    controller: 'event.details'
  });

  $urlRouterProvider.otherwise('/init/login');
});
