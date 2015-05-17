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
    templateUrl: "templates/main.html",
    controller: 'MainController'
  })

  //////////////////////////////////////
  /////////////// MAP /////////////
  //////////////////////////////////////
  .state('findFit' {
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
  /////////////// FIT MATE /////////////
  //////////////////////////////////////
  .state('fitMate', {
    abstract: true,
    url: "/fitMate",
    templateUrl: "templates/fitMate.html",
    controller: "FitMateListController"
  })

  .state('fitMate.list', {
    url: "/list",
    views: {
      "fitMateList": {
        templateUrl: "templates/fitMate-list.html",
      }
    }
  })

  .state('fitMate.write', {
    url: "/write",
    views: {
      "fitMateList": {
        templateUrl: "templates/fitMate-write.html"
      }
    }
  })

  .state('fitMate.details', {
    url: "/details/:postId",
    views: {
      "fitMateList": {
        templateUrl: "templates/fitMate-details.html"
      }
    }
  //////////////////////////////////////
  /////////////// FIT INFO /////////////
  //////////////////////////////////////
  .state('fitInfo' {
    abstract: true,
    url: '/fintInfo'
  })
  .state('fitInfo.list', {
    url: "/list"
  })
  .state('fitInfo.write', {
    url: "/info/:infoPostId",
  })

  .state('fitInfo.receive', {
    url: "/receive/:locationId",
  })

  
  })

  //////////////////////////////////////
  ///////////////  Consult  /////////////
  //////////////////////////////////////
  .state('consult', {
    abstract: true,
    url: "/consult",
    templateUrl: "templates/consult.html"
  })

  .state('consult.list', {
    url: "/list",
    views: {
      "consultList": {
        templateUrl: "templates/consult-list.html",
      }
    }
  })
  .state('consult.write', {
    url: "/write",
    views: {
      "consultList": {
        templateUrl: "templates/consult-write.html"
      }
    }
  })

  .state('consult.details', {
    url: "/details",
    views: {
      "consultList": {
        templateUrl: "templates/consult-details.html"
      }
    }
  })
  //////////////////////////////////////
  //////////////  Details  /////////////
  //////////////////////////////////////
  .state('fitInfo', {
    abstract: true,
    url: "/fitInfo",
    templateUrl: "templates/fitInfo.html",
    controller: "FitInfoListController"
  })

  .state('fitInfo.list', {
    url: "/list",
    views: {
      "fitInfoList": {
        templateUrl: "templates/fitInfo-list.htmfitInfol"
      }
    }
  })
  .state('fitInfo.write', {
    url: "/write",
    views: {
      "fitInfoList": {
        templateUrl: "templates/fitInfo-write.html"
      }
    }
  })

  .state('fitInfo.details', {
    url: "/details",
    views: {
      "fitInfoList": {
        templateUrl: "templates/fitInfo-details.html"
      }
    }
  })

  $urlRouterProvider.otherwise('/main');
})
