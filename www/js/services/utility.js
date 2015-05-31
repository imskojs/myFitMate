angular.module('myFitMate')
.factory('Utility', function(
  Data, $http, $ionicLoading, $ionicScrollDelegate, $q, $state, $stateParams, 
  $timeout 
){

var serverUrl = "http://192.168.0.65:1337";

  //Sub header menu scroller
var subHeaderMenuScroller = function(arrayData, handle ,$index, $event, centerAtIndex){
  var menuLength = arrayData.length;
  var menuPixelLength = angular.element('.category-ul').prop('offsetWidth');
  var pixelPerItem = menuPixelLength / menuLength;
  var currentTarget = angular.element($event.currentTarget);
  var currentId = currentTarget.attr('id');

  currentTarget.siblings().removeClass('active');
  currentTarget.addClass('active');

  var pixelLocation = pixelPerItem * ($index - centerAtIndex);
  $ionicScrollDelegate.$getByHandle(handle).scrollTo(pixelLocation, 0, true);
};
///////////////////////////////////////////////////////////////////
//////////////////////////// General //////////////////////////////
///////////////////////////////////////////////////////////////////
var goTo = function (state, paramsObj){
  arguments.length === 1 ? $state.go(state) : $state.go(state, paramsObj);
};

var loadingOff = function (){
  $ionicLoading.hide();
};

var loadingOn = function (){
  $ionicLoading.show({
    templateUrl: 'states/misc/loading.html'
  });
};

var errorMessage = function (message){
  $ionicLoading.show({
    template: '<h2 class="error-message" style="color:red;">'+ message +'<h2>',
    duration: 1500 
  });
};

var warningMessage = function (message){
  $ionicLoading.show({
    template: '<h2 class="error-message" style="color:#f14182;">'+ message +'<h2>',
    duration: 1500,
  });
}

var getStateParam = function (paramName){
  return $stateParams[paramName]
}

var calcNearBy = function (lat, lng) {
  var category = Data.init.favorite.selectedOption.data;
  var minLat = lat - .3;
  var maxLat = lat + .3;
  var minLng = lng - .5;
  var maxLng = lng + .5;
  var params = {
    category: category,
    minLat: minLat,
    maxLat: maxLat,
    minLng: minLng, 
    maxLng: maxLng
  };
  return params;
}

//////////////////////////////////////////////////////////////////
//////////////////// Communication to server /////////////////////
//////////////////////////////////////////////////////////////////
// Pre
var findOne = function ($requestUrl, queryObj){
  // Chrome preserves order in object if non-numeric key
  var queryString = queryStringify(queryObj);

  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl + '/' + queryString,
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  .success(function(data){
    deferred.resolve(data);
  })
  .error(function(data){
    deferred.reject(data);
  })
  return deferred.promise;
};

var find = function ($requestUrl, queryObj){
  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl,
    method: 'GET',
    params: queryObj,
    headers: {'Content-Type': 'application/json'}
  })
  .success(function(data){
    deferred.resolve(data);
  })
  .error(function(data){
    deferred.reject(data);
  })
  return deferred.promise;
}

var create = function ($requestUrl, data) {
  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data 
  })
  .success(function(data) {
    deferred.resolve(data);
  })
  .error(function(data) {
    deferred.reject(data);
  });
  return deferred.promise;
}

var update = function ($requestUrl, findObj, updateObj){
  var queryString = queryStringify(findObj);

  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl + '/' + queryString,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: updateObj 
  })
  .success(function(data) {
    deferred.resolve(data);
  })
  .error(function(data) {
    deferred.reject(data);
  });
  return deferred.promise;
}

var destroy = function ($requestUrl, findObj){
  var queryString = queryStringify(findObj);

  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl + '/' + queryString,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .success(function(data) {
    deferred.resolve(data);
  })
  .error(function(data) {
    deferred.reject(data);
  });
  return deferred.promise;
}


////////////////////////////////////////////////////////////
///////////////////  Blog Post specific ////////////////////
////////////////////////////////////////////////////////////
var resetPost = function (post) {
  post.title = null;
  post.content = null;
  post.category = null;
  post.createdBy = null;
  post.viewCount = 0;
};

///////////////////////   OBJECT   //////////////////////
var Post = {
  find: find.bind(null, '/blog/list'),
  findNew: find.bind(null, '/blog/list/new'),
  findOld: find.bind(null, '/blog/list/old'),
  findOne: findOne.bind(null, '/blog/post'),
  create: create.bind(null, '/blog/post/create'),
  update: update.bind(null, '/post'),
  destroy: destroy.bind(null, '/post'),
  resetPost: resetPost
};

var Comment = {
  create: create.bind(null, '/comment'),
  destroy: destroy.bind(null, '/comment')
};

var Club = {
  find: find.bind(null, '/club/nearBy'),
  create: create.bind(null, '/club'),
  destroy: destroy.bind(null, '/club')
}

/**********************************************
* returning object
*
*
**********************************************/
return {
  Post: Post,
  Comment: Comment,
  Club: Club,
  // General //
  goTo: goTo,
  loadingOff: loadingOff,
  loadingOn: loadingOn,
  errorMessage: errorMessage,
  warningMessage: warningMessage,
  getStateParam: getStateParam,
  calcNearBy: calcNearBy,


  subHeaderMenuScroller: subHeaderMenuScroller
};

//////// Helper functions ////////
function queryStringify(queryObj){
  var paramsArray = [];
  for (var key in queryObj){
    paramsArray.push(queryObj[key]);
  }
  var queryString = paramsArray.join('/');
  return queryString;
}



function searchHandler(map, response){
  var markers = Data.findFit.map.markers; 
  var locs = Data.findFit.map.locations;
  angular.forEach(markers, function (marker, i, self){
    marker.setMap(null);
    delete self[i]
  });
  angular.forEach(locs, function(club, i, self){
    delete self[i];
  });
  angular.extend(locs, response.clubs);
  var windowWidth = Data.windowWidth;
  var markerWidth = windowWidth * .111;
  var markerHeight = windowWidth * .055;
  var markerSrc = 'img/04_map/1080x1920/icon_map_unselect.png';
  var markerClickedSrc = 'img/04_map/1080x1920/icon_map_select.png';
  var markerSize = new daum.maps.Size(markerWidth, markerHeight);
  var markerImg = new daum.maps.MarkerImage(markerSrc, markerSize);
  var markerClickedImg = new daum.maps.MarkerImage(markerClickedSrc, markerSize);
  angular.forEach(locs, function(club, i, self){
    var position =  new daum.maps.LatLng(club.latitude, club.longitude);
    var marker = new daum.maps.Marker({
      map: map,
      position: position,
      title: String(i),
      image: markerImg,
      clickable: true,
    });
    daum.maps.event.addListener(marker, 'click', function() {
      var marker = this;
      $scope.$apply(function (){
        // change this image to selected. Rest unselected img
        angular.forEach(markers, function (marker, i, self){
          marker.setImage(markerImg);
        });
        marker.setImage(markerClickedImg);
        // load content based on location of the array
        $scope.modal.show();
        index = Number(marker.getTitle());
        $scope.selectedFit = Data.findFit.map.locations[index];
        Data.findFit.map.selectedClub = Data.findFit.map.locations[index];
      })
    });
    // Save markers for deleting in the future.
    markers.push(marker);
  })
}
        // Draw newly received markers.







// End of Utility Service
});


